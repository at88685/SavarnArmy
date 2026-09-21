import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  ContactUsContainer,
  ContactWrapper,
  FormContainer,
  InfoContainer,
  FormTitle,
  InfoTitle,
  InfoText,
  ContactDetail,
  StyledTextField,
  SubmitButton,
  MapContainer,
} from '../StyledComponents/ContactUs.styled';
import { Phone, Email } from '@mui/icons-material';
import Loader from '../components/Loader';
import { baseURL } from '../constants/appConstants';

const initialState = {
  fullName: '',
  email: '',
  telephone: '',
  comment: '',
};

function ContactUs() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Enter a valid email address';
    if (!form.telephone.match(/^\d{10}$/)) newErrors.telephone = 'Enter a valid 10-digit telephone number';
    if (!form.comment.trim()) newErrors.comment = 'Comment is required';
    return newErrors;
  };

  const SEND_EMAIL_URL = `${baseURL}/send-email`; // Replace with your actual endpoint

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setSubmitting(true);
    setLoading(true);

    try {
      const response = await fetch(SEND_EMAIL_URL, {
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

      setSuccess(true);
      setForm(initialState);
      setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds

    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <ContactUsContainer>
      <Loader open={loading} message="Sending your message..." />
      <ContactWrapper>
        <FormContainer>
          <FormTitle>कृपया नीचे अपना विवरण भरें।</FormTitle>
          {success && (
            <Typography color="lightgreen" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Your message has been sent successfully!
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Fullname *"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <StyledTextField
              label="Email Address *"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <StyledTextField
              label="Telephone *"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              error={!!errors.telephone}
              helperText={errors.telephone}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <StyledTextField
              label="Comment *"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              error={!!errors.comment}
              helperText={errors.comment}
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <SubmitButton type="submit" fullWidth disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </form>
        </FormContainer>
        <InfoContainer>
          <InfoTitle>Let's get in touch</InfoTitle>
          <InfoText>How can we help you?</InfoText>
          <ContactDetail>
            <Phone className="icon" />
            <Typography variant="body1">8887807545</Typography>
          </ContactDetail>
          <ContactDetail>
            <Email className="icon" />
            <Typography variant="body1">sawarnarmy690@gmail.com</Typography>
          </ContactDetail>
          <InfoTitle style={{ marginTop: '2rem' }}>
            Also, Follow us on social media
          </InfoTitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.636994995527!2d80.9461669150381!3d26.8514809831531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd09c90f5a3d%3A0x4c3f6c7e3a1a7b1!2sNehru%20Enclave%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1664185745535!5m2!1sen!2sin"
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </InfoContainer>
      </ContactWrapper>
    </ContactUsContainer>
  );
}

export default ContactUs;