import React, { useState } from 'react';
// navigation removed; success will be shown in modal
import { MenuItem } from '@mui/material';
import StyledTextField from '../components/Styled/StyledTextField';
import StyledUploadPhoto from '../components/Styled/StyledUploadPhoto';
import Loader from '../components/Loader';
import RegistrationCard from '../components/RegistrationCard';
import {
  RegistrationBg,
  RegistrationForm,
  RegistrationHeader,
  RegistrationLogo,
  RegistrationTitle,
  RegGrid,
  RegisterBtn
} from '../StyledComponents/Registration.styled';
import '../styles/registration.css';
import logo from '../assets/logo/logo.png';
import { STATES, DISTRICTS } from '../constants/location.constants';

const initialState = {
  fullName: '',
  mobile: '',
  email: '',
  familyMembers: '',
  state: '',
  district: '',
  block: '',
  city: '',
  pincode: '',
  addedBy: '',
  image: null,
  imagePreview: null,
};

function Registration() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Processing...');
  const [successData, setSuccessData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.mobile.match(/^\d{10}$/)) newErrors.mobile = 'Enter valid 10-digit mobile number';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter valid email';
    if (!form.state) newErrors.state = 'State is required';
    if (!form.district) newErrors.district = 'District is required';
    return newErrors;
  };

  // Add payment amount and Razorpay loader
  const PAYMENT_AMOUNT = 100; // amount in paise (1.20 INR) — update as needed
  const PAYMENT_CURRENCY = 'INR';
  const CREATE_ORDER_URL = 'https://5ybhbgwo1c.execute-api.ap-south-1.amazonaws.com/create-orders';
  const REGISTER_USER_URL = 'https://5ybhbgwo1c.execute-api.ap-south-1.amazonaws.com/register-user'; // update to your real endpoint

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const scriptId = 'razorpay-script';
      if (document.getElementById(scriptId)) return resolve(true);
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // call server to create order
  const createOrder = async (payload) => {
    const resp = await fetch(CREATE_ORDER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || 'Failed to create order');
    }
    console.log('Order data:', data);
    return data;
    
  };

  // open razorpay modal and return payment response
  const openRazorpay = async (orderData) => {
    const ok = await loadRazorpayScript();
    if (!ok) throw new Error('Failed to load Razorpay SDK');

    return new Promise((resolve, reject) => {
      const options = {
        key: 'rzp_live_RNM586voy9aDb5', //change this key
        amount: orderData.amount || PAYMENT_AMOUNT,
        currency: orderData.currency || PAYMENT_CURRENCY,
        name: 'Savarn Army',
        description: 'Membership fee',
        image: logo,
        order_id: orderData.id || orderData.order_id,
        handler: function (response) {
          // resolve with response for further processing
          resolve(response);
        },
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },
        notes: {
          address: form.city || '',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on('payment.failed', function (response) {
        reject(new Error(response.error?.description || 'Payment failed'));
      });
    });
  };

  // call backend to register user after successful payment
  const registerUser = async (userData, paymentInfo, imageBase64) => {
    // Build JSON payload including base64 image and payment id
    const paymentId = paymentInfo?.razorpay_payment_id || paymentInfo?.payment_id || '';

    const payload = {
      ...userData,
      paymentId,
      paymentInfo: paymentInfo || {},
      image: imageBase64 || null,
    };

    console.log('Register payload:', payload);

    const resp = await fetch(REGISTER_USER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || 'Failed to register user');
    }
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      // 1) create order on server
      setLoadingMessage('Creating payment order...');
      setLoading(true);
      const orderPayload = {
        amount: PAYMENT_AMOUNT,
        receipt: `rcpt_${Date.now()}`,
        purpose: 'membership',
        name: form.fullName,
        email: form.email,
        contact: form.mobile,
        currency: PAYMENT_CURRENCY,
      };
      const orderData = await createOrder(orderPayload);
      setLoading(false);

      // 2) open Razorpay and wait for payment success
      const paymentResponse = await openRazorpay(orderData);

      // 3) on successful payment call register API with form data + payment info
      setLoadingMessage('Finalizing registration...');
      setLoading(true);
      const userPayload = {
        fullName: form.fullName,
        mobile: form.mobile,
        email: form.email,
        familyMembers: form.familyMembers,
        state: form.state,
        district: form.district,
        block: form.block,
        city: form.city,
        pincode: form.pincode,
        addedBy: form.addedBy,
      };

      // pass image base64 so registerUser can include it in JSON payload
      const registerResp = await registerUser(userPayload, paymentResponse, form.image);
      setLoading(false);

      // registration success
      // extract registration id and show modal with info
      setForm(initialState);
      console.log('Registration response:', registerResp);
      setSuccessData({  data: registerResp.userData, message: registerResp.message || 'Registration successful and payment completed.' });
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert(err.message || 'Registration/payment failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <RegistrationBg>
      <Loader open={loading} message={loadingMessage} />
      {successData && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(3px)',
          zIndex: 3000,
          overflowY: 'auto',
        }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 8, width: 'auto', maxWidth: '95%', boxShadow: '0 8px 24px rgba(0,0,0,0.16)', margin: '20px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ marginTop: 0 }}>Registration Successful</h3>
              <button onClick={() => setSuccessData(null)} style={{ padding: '8px 12px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
            </div>
            <p>{successData.message}</p>
            {successData.data ? (
              <RegistrationCard userData={successData.data} />
            ) : (
              <p style={{ color: '#666' }}>Could not load registration card.</p>
            )}
          </div>
        </div>
      )}
      <RegistrationForm component="form" onSubmit={handleSubmit}>
        <RegistrationHeader>
          <RegistrationLogo src={logo} alt='logo' />
          <RegistrationTitle>सदस्य पंजीकरण</RegistrationTitle>
        </RegistrationHeader>

        <RegGrid>
          <div className="reg-item">
            <StyledTextField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              required
              icon="👤"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Mobile Number"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
              required
              icon="📞"
              inputProps={{ maxLength: 10 }}
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              icon="✉️"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Member in Family"
              name="familyMembers"
              value={form.familyMembers}
              onChange={handleChange}
              icon="👥"
              type="number"
              inputProps={{ min: 0 }}
              placeholder="Enter number of family members"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
              required
              select
              icon="📍"
              placeholder="Select State"
            >
              <MenuItem value="">Select State</MenuItem>
              {STATES.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </StyledTextField>
          </div>

          <div className="reg-item">
            <StyledTextField
              label="District"
              name="district"
              value={form.district}
              onChange={handleChange}
              error={!!errors.district}
              helperText={errors.district}
              required
              select
              icon="🏢"
              disabled={!form.state}
              placeholder="Select District"
            >
              <MenuItem value="">Select District</MenuItem>
              {form.state && DISTRICTS[form.state] && DISTRICTS[form.state].map((d) => (
                <MenuItem key={d} value={d}>{d}</MenuItem>
              ))}
            </StyledTextField>
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Block"
              name="block"
              value={form.block}
              onChange={handleChange}
              icon="🏢"
              placeholder="Enter Block Name"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="City/Village"
              name="city"
              value={form.city}
              onChange={handleChange}
              icon="🏠"
              placeholder="Enter Village Name"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              icon="📮"
              inputProps={{ inputMode: 'numeric', maxLength: 6 }}
              placeholder="Enter Pincode"
            />
          </div>

          <div className="reg-item">
            <StyledTextField
              label="Added by (optional)"
              name="addedBy"
              value={form.addedBy}
              onChange={handleChange}
              icon="👤"
              placeholder="Enter your name (optional)"
            />
          </div>
        </RegGrid>

        <StyledUploadPhoto
          imagePreview={form.imagePreview}
          error={errors.image}
          onImageChange={e => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onloadend = () => {
                // store base64 string in form.image and preview
                setForm((prev) => ({ ...prev, image: reader.result, imagePreview: reader.result }));
              };
              reader.readAsDataURL(file);
              setErrors((prev) => ({ ...prev, image: '' }));
            } else {
              setErrors((prev) => ({ ...prev, image: 'Only image files are allowed' }));
            }
          }}
          onDrop={e => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setForm((prev) => ({ ...prev, image: reader.result, imagePreview: reader.result }));
              };
              reader.readAsDataURL(file);
              setErrors((prev) => ({ ...prev, image: '' }));
            } else {
              setErrors((prev) => ({ ...prev, image: 'Only image files are allowed' }));
            }
          }}
          onRemovePhoto={() => setForm(prev => ({ ...prev, image: null, imagePreview: null }))}
        />

        <RegisterBtn type="submit" disabled={submitting}>
          {submitting ? 'Registering...' : 'Register'}
        </RegisterBtn>
      </RegistrationForm>
    </RegistrationBg>
  );
}

export default Registration;