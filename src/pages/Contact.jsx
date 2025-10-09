import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!isValidEmail(formData.email)) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.subject,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFeedback({ open: true, message: 'Message sent successfully', severity: 'success' });
    } catch (err) {
      setFeedback({ open: true, message: 'Failed to send message', severity: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '40vh',
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h1"
            data-aos="fade-down"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            data-aos="fade-up"
          >
            Get in touch with our team
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                data-aos="fade-up"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Typography color="text.secondary">
                  info@atlanticcontainer.com
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                data-aos="fade-up"
                data-aos-delay="100"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Phone
                </Typography>
                <Typography color="text.secondary">
                  +91 81285 18102
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                data-aos="fade-up"
                data-aos-delay="200"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Address
                </Typography>
                <Typography color="text.secondary">
                  123 Business Street, New Delhi, India
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          {feedback.open && (
            <Box sx={{ mb: 2, p: 2, borderRadius: 1, bgcolor: feedback.severity === 'success' ? '#e8f5e9' : '#ffebee', color: feedback.severity === 'success' ? '#2e7d32' : '#c62828' }}>
              {feedback.message}
            </Box>
          )}
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{ p: 4 }}
                data-aos="fade-right"
              >
                <Typography variant="h4" gutterBottom>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={submitting || !formData.name || !formData.email || !isValidEmail(formData.email) || !formData.message}
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Contact Us"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                data-aos="fade-left"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Box
            sx={{
              height: '500px',
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.563727059058!2d72.88673857530675!3d21.23874908046361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f40eacb8b3d%3A0x5dd425eaf9ff081c!2sMBC%20-%20Meridian%20Business%20Center!5e1!3m2!1sen!2sin!4v1744902745630!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 