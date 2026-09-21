import React, { useState } from 'react';
import {
  DonateNowBg,
  DonationModal,
  DonationHeader,
  DonationLogo,
  DonationTitle,
  DonationForm,
  AmountButtonGroup,
  AmountButton,
  DonateButton,
} from '../StyledComponents/DonateNow.styled';
import StyledTextField from '../components/Styled/StyledTextField';
import Loader from '../components/Loader';
import logo from '../assets/logo/logo.png';
import { baseURL, razorPayKey } from '../constants/appConstants';

const initialState = {
  fullName: '',
  mobile: '',
  email: '',
  amount: '',
};

const PRESET_AMOUNTS = [500, 1100, 2100];

function DonateNow() {
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

  const handleAmountClick = (amount) => {
    setForm((prev) => ({ ...prev, amount: String(amount) }));
    setErrors((prev) => ({ ...prev, amount: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.mobile.match(/^\d{10}$/)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (form.email && !form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter a valid email address';
    if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0) newErrors.amount = 'Enter a valid amount';
    return newErrors;
  };

  const CREATE_ORDER_URL = `${baseURL}/create-orders`;
  const SAVE_DONATION_URL = `${baseURL}/save-donation`; // Replace with your actual endpoint

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
    return data;
  };

  const openRazorpay = async (orderData) => {
    const ok = await loadRazorpayScript();
    if (!ok) throw new Error('Failed to load Razorpay SDK');

    return new Promise((resolve, reject) => {
      const options = {
        key: razorPayKey, // Replace with your Razorpay key
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Sawarn Army',
        description: 'Donation',
        image: logo,
        order_id: orderData.id || orderData.order_id,
        handler: function (response) {
          resolve(response);
        },
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },
        theme: {
          color: '#FF8F00',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on('payment.failed', function (response) {
        reject(new Error(response.error?.description || 'Payment failed'));
      });
    });
  };

  const saveDonation = async (donationDetails) => {
    const resp = await fetch(SAVE_DONATION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donationDetails),
    });
    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(data.message || 'Failed to save donation');
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
      // 1. Create Order
      setLoadingMessage('Creating payment order...');
      setLoading(true);
      const orderPayload = {
        amount: Number(form.amount), // Amount in paise
        receipt: `donation_${Date.now()}`,
        purpose: 'donation',
        name: form.fullName,
        email: form.email,
        contact: form.mobile,
        currency: 'INR',
      };
      const orderData = await createOrder(orderPayload);
      setLoading(false);

      // 2. Open Razorpay
      const paymentResponse = await openRazorpay(orderData);

      // 3. Save Donation
      setLoadingMessage('Finalizing donation...');
      setLoading(true);
      const donationPayload = {
        donorName: form.fullName,
        donorMobile: form.mobile,
        donorEmail: form.email,
        amount: Number(form.amount),
        paymentId: paymentResponse.razorpay_payment_id,
      };
      const donationResult = await saveDonation(donationPayload);
      setLoading(false);

      setForm(initialState);
      setSuccessData({ message: donationResult.message || 'Donation successful!' });

    } catch (err) {
      console.error(err);
      setLoading(false);
      alert(err.message || 'Donation failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DonateNowBg>
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
        }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 8, width: 400, maxWidth: '90%', boxShadow: '0 8px 24px rgba(0,0,0,0.16)', textAlign: 'center' }}>
            <h3 style={{ marginTop: 0, color: '#4CAF50' }}>Thank You!</h3>
            <p>{successData.message}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
              <button onClick={() => setSuccessData(null)} style={{ padding: '8px 16px', background: '#FF8F00', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
      
      <DonationModal>
        <DonationHeader>
          <DonationLogo src={logo} alt="Sawarn Army Logo" />
          <DonationTitle>Donating to Sawarn Army</DonationTitle>
        </DonationHeader>

        <DonationForm onSubmit={handleSubmit}>
          <StyledTextField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            required
            placeholder="Enter Your Full Name"
          />
          <StyledTextField
            label="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
            required
            inputProps={{ maxLength: 10 }}
            placeholder="Enter 10-digit mobile number"
          />
          <StyledTextField
            label="Email ID (Optional)"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Enter Your Email Address"
          />
          <StyledTextField
            label="Enter your amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
            required
            type="number"
            placeholder="₹"
          />

          <AmountButtonGroup>
            {PRESET_AMOUNTS.map((val) => (
              <AmountButton
                key={val}
                selected={String(val) === form.amount}
                onClick={() => handleAmountClick(val)}
              >
                ₹ {val}
              </AmountButton>
            ))}
          </AmountButtonGroup>

          <DonateButton type="submit" disabled={submitting}>
            {submitting ? 'Processing...' : 'Donate'}
          </DonateButton>
        </DonationForm>
      </DonationModal>
    </DonateNowBg>
  );
}

export default DonateNow;