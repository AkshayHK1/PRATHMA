import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';

const Services = () => {
  const services = [
    {
      title: 'Air Freight',
      description: 'Prathama Logistics & Shipping Line Pvt Ltd develops comprehensive air freight service plans tailored to meet customer\'s specific requirements. This is accomplished by learning customers\' exact objectives with regards to their internal and external requirements',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Ocean Frieght',
      description: 'Ocean Freight is one of the key elements in multi-modal transportation. In order to offer the best service possible, we have a sea freight department specializing in both FCL/LCL and in the handling of different types of cargoes.',
      image: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Transportation',
      description: 'Transportation refers to the movement of people, goods, and services from one place to another. It plays a crucial role in modern society and is essential for economic, social, and cultural development. There are various modes of transportation that are used for different purposes and distances.',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Custom Clearance',
      description: 'Our highly efficient customs brokerage, clearance and compliance service is designed to take the complexity out of the customs process.We understand the importance of customs brokerage in getting your products to their destination.',
      image: 'https://images.pexels.com/photos/7706434/pexels-photo-7706434.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Break Bulk Cargo',
      description: 'Break bulk cargo refers to goods that are transported individually and not in shipping containers or bulk quantities. These goods are typically loaded and unloaded individually, using various methods such as cranes, forklifts, and other handling equipment',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Warehouse',
      description: 'Warehousing and distribution is a key component of the integrated logistics and shipping system for companies seeking a cost effective method of distributing their range of products. We have totally computerized, efficient and dynamic warehousing solutions that are designed to stock consumer goods as well as perishable items for safer and longer periods.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Special Equipment',
      description: 'Special equipment can refer to a wide range of tools, devices, or machinery specifically designed for particular tasks or industries. These specialized tools are often used in various fields to achieve specific goals efficiently and safely.',
      image: 'https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Project Cargo',
      description: 'Project cargo refers to the transportation of large, heavy, and oversized goods that cannot be transported using standard shipping methods. These goods are often complex and require specialized handling and equipment for transportation. Project cargo shipments are unique and require careful planning and coordination to ensure their safe and timely delivery.',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Door To Door',
      description: 'Door-to-door sales have been used by various industries for decades, but their effectiveness has changed over time due to advancements in technology and shifts in consumer behavior. Traditionally, door-to-door sales involved selling products like cleaning supplies, encyclopedias, and home appliances.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          data-aos="fade-down"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
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
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.title}
                  </Typography>
                  <Typography>{service.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 200}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 