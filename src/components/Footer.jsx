import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Paper,
  useTheme,
  Tooltip,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#001845',
        color: 'white',
        py: 8,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1a237e, #0277bd, #1a237e)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              data-aos="fade-up"
              data-aos-delay="100"
              sx={{
                bgcolor: 'rgba(255,255,255,0.05)',
                p: 3,
                borderRadius: 2,
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #64b5f6, transparent)',
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #fff, #64b5f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #64b5f6, transparent)',
                  },
                }}
              >
                Prathama Logistics & Shipping Line
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Your trusted partner in global logistics and cargo services.
                We provide comprehensive solutions for all your transportation needs.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                {[
                  {
                    icon: <FacebookIcon />,
                    color: '#1877f2',
                    tooltip: 'Follow us on Facebook',
                    link: 'https://www.facebook.com/your-facebook-page'
                  },
                  {
                    icon: <TwitterIcon />,
                    color: '#1da1f2',
                    tooltip: 'Follow us on Twitter',
                    link: 'https://twitter.com/your-twitter-handle'
                  },
                  {
                    icon: <LinkedInIcon />,
                    color: '#0a66c2',
                    tooltip: 'Connect on LinkedIn',
                    link: 'https://www.linkedin.com/company/your-linkedin'
                  },
                  {
                    icon: <WhatsAppIcon />,
                    color: '#25d366',
                    tooltip: 'Chat with us on WhatsApp',
                    link: 'https://wa.me/918128518102'
                  },
                ].map((social, index) => (
                  <Tooltip key={index} title={social.tooltip} arrow>
                    <IconButton
                      color="inherit"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '& svg': { color: social.color },          // default brand color
                        '&:hover': {
                          bgcolor: social.color,
                          transform: 'scale(1.1) rotate(5deg)',
                          '& svg': { color: '#fff' },              // white on hover for contrast
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                bgcolor: 'rgba(255,255,255,0.05)',
                p: 3,
                borderRadius: 2,
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #64b5f6, transparent)',
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #fff, #64b5f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #64b5f6, transparent)',
                  },
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { text: 'Home', to: '/' },
                  { text: 'Services', to: '/services' },
                  { text: 'About Us', to: '/about' },
                  { text: 'Contact', to: '/contact' },
                ].map((link) => (

                  <Link
                    key={link.text}
                    component={RouterLink}
                    to={link.to}
                    color="inherit"
                    underline="none"
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1.5,
                      px: 2,
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      color: 'rgba(255,255,255,0.9)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transform: 'translateX(5px)',
                        color: '#fff',
                        '& .arrow': {
                          transform: 'translateX(5px)',
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <ArrowForwardIcon
                      className="arrow"
                      sx={{
                        fontSize: 16,
                        mr: 1,
                        opacity: 0,
                        transition: 'all 0.3s ease',
                      }}
                    />
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                bgcolor: 'rgba(255,255,255,0.05)',
                p: 3,
                borderRadius: 2,
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #64b5f6, transparent)',
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #fff, #64b5f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #64b5f6, transparent)',
                  },
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { icon: <LocationOnIcon />, text: '334-MBC\n(Meredian Business Centre),\nGujarat, India - 394105', link: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('334-MBC (Meredian Business Centre), Gujarat, India - 394105'), color: '#e53935' }, // red
                  { icon: <PhoneIcon />, text: '+91 123 456 7890', link: 'tel:+911234567890', color: '#43a047' }, // green
                  { icon: <EmailIcon />, text: 'mogaljay595@gmail.com', link: 'mailto:mogaljay595@gmail.com', color: '#fb8c00' }, // orange
                  { icon: <WhatsAppIcon />, text: '+91 81285 18102', link: 'https://wa.me/918128518102', color: '#25d366' }, // whatsapp green
                ].map((contact, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 1.5,
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transform: 'translateX(5px)',
                        textDecoration: 'none',
                      },
                    }}
                    component={contact.link ? 'a' : 'div'}
                    href={contact.link}
                    target={contact.link && contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link && contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Box
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.12)',
                        p: 1,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.18)',
                        '& svg': { color: contact.color },      // brand color for the icon
                      }}
                    >
                      {contact.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: 'pre-line',
                        color: 'rgba(255,255,255,0.9)',
                        '&:hover': { color: '#fff' },
                        textDecoration: 'none',
                      }}
                    >
                      {contact.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            bgcolor: 'rgba(255,255,255,0.1)',
            height: '2px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #64b5f6, transparent)',
            },
          }}
        />

        <Typography
          variant="body1"
          align="center"
          sx={{
            opacity: 0.8,
            position: 'relative',
            color: 'rgba(255,255,255,0.9)',
            '& span': {
              background: 'linear-gradient(45deg, #64b5f6, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #64b5f6, transparent)',
              },
            },
          }}
        >
          © {new Date().getFullYear()} <span>Prathama Logistics & Shipping Line</span> Pvt. Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 