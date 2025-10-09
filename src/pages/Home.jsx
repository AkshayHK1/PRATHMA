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
  IconButton,
  Paper,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const featuredServices = [
    {
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services worldwide',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#1a237e'
    },
    {
      title: 'Ocean Freight',
      description: 'Efficient sea transportation solutions',
      image: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#0277bd'
    },
    {
      title: 'Custom Clearance',
      description: 'Professional customs clearance services',
      image: 'https://images.pexels.com/photos/7706434/pexels-photo-7706434.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgColor: '#00838f'
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(26,35,126,0.3), rgba(2,119,189,0.3))',
          },
        }}
      >
        <Container>
          <Typography
            variant="h1"
            data-aos="fade-down"
            data-aos-delay="100"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Welcome to Our Container Services
          </Typography>
          <Typography
            variant="h5"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ 
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Your trusted partner in container logistics and transportation
          </Typography>
          <Button
            variant="contained"
            size="large"
            data-aos="zoom-in"
            data-aos-delay="300"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/contact"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              py: 2,
              px: 4,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Welcome Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5', position: 'relative' }}>
        <Container>
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom
            data-aos="fade-up"
            sx={{
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #1a237e, #0277bd)',
                borderRadius: 2,
              },
            }}
          >
            Welcome to Prathama Logistics & Shipping Line Pvt. Ltd
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            paragraph 
            sx={{ 
              maxWidth: '900px', 
              mx: 'auto', 
              mb: 6,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience reliable and efficient cargo services with Atlantic Container. 
            We offer a wide range of transportation and logistics solutions to meet your business needs. 
            Trust us for seamless air, rail, road, and sea cargo services, customs clearance, port handling, 
            warehousing, and more.
          </Typography>
          <Box
            component="img"
            src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Container Terminal"
            sx={{
              width: '100%',
              maxHeight: '600px',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, position: 'relative' }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            data-aos="fade-down"
            sx={{ 
              mb: 6,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #1a237e, #0277bd)',
                borderRadius: 2,
              },
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {featuredServices.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      objectFit: 'cover',
                      height: '200px',
                      width: '100%',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1,
                    bgcolor: 'white',
                    p: 3,
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 'bold',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom 
                color="primary"
                data-aos="fade-right"
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1a237e, #0277bd)',
                    borderRadius: 2,
                  },
                }}
              >
                About Atlantic Container
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                data-aos="fade-right"
                data-aos-delay="200"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                Atlantic Container is a renowned global cargo service provider headquartered 
                in New Delhi, India. With a broad portfolio of services and expertise in 
                logistics, we cater to the diverse needs of our clients. Our dedicated team 
                ensures efficient and reliable transportation of goods through air, rail, 
                road, and sea. We also offer customs clearance, port handling, and 
                warehousing services to streamline the supply chain process.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/about"
                endIcon={<ArrowForwardIcon />}
                data-aos="fade-right"
                data-aos-delay="400"
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Warehouse Operations"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
                data-aos="fade-left"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
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
            background: 'linear-gradient(45deg, rgba(26,35,126,0.8), rgba(2,119,189,0.8))',
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            data-aos="fade-up"
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Delivering Excellence in Global Cargo Services
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact us today for a customized logistics solution
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: '#001845',
                py: 2,
                px: 4,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* WhatsApp Button */}
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#25D366',
          color: 'white',
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
          },
          width: 60,
          height: 60,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
        }}
        component="a"
        href="https://wa.me/your-whatsapp-number"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
};

export default Home; 