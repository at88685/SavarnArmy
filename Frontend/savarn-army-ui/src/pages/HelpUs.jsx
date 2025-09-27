import React, { useState } from 'react';
import {
  FormControlLabel,
  Radio,
  Checkbox,
  MenuItem,
  FormLabel,
} from '@mui/material';
import {
  HelpUsBg,
  HelpUsFormContainer,
  HelpUsHeader,
  HelpUsLogo,
  HelpUsTitle,
  FormGrid,
  FullWidthControl,
  StyledFormControl,
  StyledRadioGroup,
  StyledFormGroup,
  SubmitButton,
} from '../StyledComponents/HelpUs.styled';
import StyledTextField from '../components/Styled/StyledTextField';
import Loader from '../components/Loader';
import logo from '../assets/logo/logo.png';
import { STATES, DISTRICTS } from '../constants/location.constants';

const helpTypes = [
  'Social',
  'Medical',
  'Educational',
  'Livelihood',
  'Legal',
  'Decline to answer',
];

const initialState = {
  fullName: '',
  dob: '',
  gender: '',
  phone: '',
  emergency: '',
  email: '',
  helpNeeded: [],
  zipCode: '',
  address: '',
  state: '',
  district: '',
};

function HelpUs() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      const helpNeeded = checked
        ? [...prev.helpNeeded, value]
        : prev.helpNeeded.filter((item) => item !== value);
      return { ...prev, helpNeeded };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.dob) newErrors.dob = 'Date of Birth is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.phone.match(/^\d{10}$/)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.emergency) newErrors.emergency = 'Please select an emergency status';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter a valid email address';
    if (form.helpNeeded.length === 0) newErrors.helpNeeded = 'Please select at least one type of help';
    if (!form.zipCode.match(/^\d{6}$/)) newErrors.zipCode = 'Enter a valid 6-digit zip code';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.state) newErrors.state = 'State is required';
    if (!form.district) newErrors.district = 'District is required';
    return newErrors;
  };

  const SEND_HELP_EMAIL_URL = 'https://5ybhbgwo1c.execute-api.ap-south-1.amazonaws.com/send-help-email'; // Replace with your actual endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setSubmitting(true);

    try {
      const response = await fetch(SEND_HELP_EMAIL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      alert('Your request has been submitted successfully!');
      setForm(initialState);

    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <HelpUsBg>
      <Loader open={submitting} message="Submitting your request..." />
      <HelpUsFormContainer component="form" onSubmit={handleSubmit}>
        <HelpUsHeader>
          <HelpUsLogo src={logo} alt="Logo" />
          <HelpUsTitle>मदद की ज़रूरत है!</HelpUsTitle>
        </HelpUsHeader>

        <FormGrid>
          <StyledTextField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            helperText={errors.fullName}
            required
            icon="👤"
            placeholder="Enter your full name"
          />

          <StyledTextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            required
            InputLabelProps={{ shrink: true }}
          />

          <StyledFormControl required error={!!errors.gender}>
            <FormLabel>
               Gender
            </FormLabel>
            <StyledRadioGroup name="gender" value={form.gender} onChange={handleChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </StyledRadioGroup>
          </StyledFormControl>

          <StyledTextField
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            required
            icon="📞"
            placeholder="Enter your phone number"
          />

          <StyledFormControl required error={!!errors.emergency}>
            <FormLabel>
               Is there any emergency?
            </FormLabel>
            <StyledRadioGroup name="emergency" value={form.emergency} onChange={handleChange}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Decline to answer" control={<Radio />} label="Decline to answer" />
            </StyledRadioGroup>
          </StyledFormControl>

          <StyledTextField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
            icon="✉️"
            placeholder="Enter your email address"
          />

          <FullWidthControl required error={!!errors.helpNeeded}>
            <StyledFormControl>
              <FormLabel>
               What kind of help do you need?
              </FormLabel>
              <StyledFormGroup>
                {helpTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    control={<Checkbox value={type} onChange={handleCheckboxChange} />}
                    label={type}
                  />
                ))}
              </StyledFormGroup>
            </StyledFormControl>
          </FullWidthControl>

          <StyledTextField
            label="Zip Code"
            name="zipCode"
            value={form.zipCode}
            onChange={handleChange}
            error={!!errors.zipCode}
            helperText={errors.zipCode}
            required
            icon="📮"
            placeholder="Enter zip code"
          />

          <StyledTextField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            required
            icon="🏠"
            placeholder="Enter your address"
          />

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
          >
            <MenuItem value="">Select State</MenuItem>
            {STATES.map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </StyledTextField>

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
          >
            <MenuItem value="">Select District</MenuItem>
            {form.state && DISTRICTS[form.state] && DISTRICTS[form.state].map((d) => (
              <MenuItem key={d} value={d}>{d}</MenuItem>
            ))}
          </StyledTextField>
        </FormGrid>

        <SubmitButton type="submit" fullWidth disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </HelpUsFormContainer>
    </HelpUsBg>
  );
}

export default HelpUs;