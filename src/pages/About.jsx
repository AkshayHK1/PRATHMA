import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Global Logistics',
      description: 'Comprehensive logistics solutions across air, sea, and land transportation.',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Assured',
      description: 'Certified quality management systems ensuring reliable service delivery.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Efficient and timely delivery through optimized supply chain networks.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Handling',
      description: 'Advanced security measures for safe cargo handling and transportation.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Team',
      description: 'Dedicated professionals with extensive industry experience.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for seamless operations.',
    },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty and transparency.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in all our services and operations.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate to provide better solutions.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
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
            About Us
          </Typography>
          <Typography 
            variant="h5"
            data-aos="fade-up"
          >
            Learn more about our company and values
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1a237e',
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#001845',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Company Info Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                data-aos="fade-right"
                sx={{
                  color: '#1a237e',
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                paragraph
                data-aos="fade-right"
                data-aos-delay="200"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Prathama Logistics & Shipping Line Pvt Ltd was established with a vision to provide 
                comprehensive logistics solutions. Over the years, we have grown into a 
                trusted name in the industry, serving clients across the globe with our 
                reliable and efficient services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Company History"
                data-aos="fade-left"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            data-aos="fade-up"
            sx={{
              fontWeight: 'bold',
              color: '#001845',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            align="center"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            To provide reliable, efficient, and cost-effective logistics solutions 
            that help our clients achieve their business goals while maintaining 
            the highest standards of service quality and customer satisfaction.
          </Typography>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            data-aos="fade-up"
            sx={{
              fontWeight: 'bold',
              color: '#001845',
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            align="center"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            To be the preferred logistics partner for businesses worldwide, 
            known for our innovation, reliability, and commitment to excellence.
          </Typography>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            data-aos="fade-up"
            sx={{
              fontWeight: 'bold',
              color: '#001845',
              mb: 6,
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={value.image}
                    alt={value.title}
                    sx={{
                      objectFit: 'cover',
                      height: '200px',
                      width: '100%'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value.title}
                    </Typography>
                    <Typography>{value.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          data-aos="fade-up"
          sx={{
            fontWeight: 'bold',
            color: '#001845',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #1a237e, #0277bd)',
            },
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: '#1a237e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'rgba(26, 35, 126, 0.1)',
                    mx: 'auto',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#001845',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    color: '#001845',
                    opacity: 0.8,
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#001845',
          color: 'white',
          backgroundImage: 'linear-gradient(rgba(0, 24, 69, 0.9), rgba(0, 24, 69, 0.9)), url("https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(45deg, rgba(26, 35, 126, 0.9), rgba(2, 119, 189, 0.9))',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                gutterBottom
                data-aos="fade-up"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h6"
                paragraph
                data-aos="fade-up"
                data-aos-delay="200"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                }}
              >
                Let us help you streamline your logistics operations
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{
                  bgcolor: 'white',
                  color: '#001845',
                  py: 2,
                  px: 6,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us Today
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 