import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const Equipment = () => {
  const containerTypes = [
    {
      title: "20' STANDARD",
      image: "/images/equipment/20ft-standard.svg",
      specs: {
        internal: {
          length: { metric: "5.9m", imperial: "19'4\"" },
          width: { metric: "2.35m", imperial: "7'8\"" },
          height: { metric: "2.39m", imperial: "7'10\"" },
        },
        door: {
          width: { metric: "2.34m", imperial: "7'8\"" },
          height: { metric: "2.28m", imperial: "7'6\"" },
        },
        capacity: { metric: "33.20m3", imperial: "1,170ft" },
        payload: { metric: "28,260kg", imperial: "62,310lbs" },
      }
    },
    {
      title: "40' STANDARD",
      image: "/images/equipment/40ft-standard.svg",
      specs: {
        internal: {
          length: { metric: "12.03m", imperial: "39'6\"" },
          width: { metric: "2.35m", imperial: "7'9\"" },
          height: { metric: "2.39m", imperial: "7'10\"" },
        },
        door: {
          width: { metric: "2.34m", imperial: "7'8\"" },
          height: { metric: "2.28m", imperial: "7'6\"" },
        },
        capacity: { metric: "67.70m3", imperial: "2,391ft" },
        payload: { metric: "28,260kg", imperial: "63,620lbs" },
      }
    },
    {
      title: "20' OPEN TOP",
      image: "/images/equipment/20ft-open-top.svg",
      specs: {
        internal: {
          length: { metric: "5.9m", imperial: "19'4\"" },
          width: { metric: "2.35m", imperial: "7'8\"" },
          height: { metric: "2.35m", imperial: "7'10\"" },
        },
        roof: {
          length: { metric: "2.38m", imperial: "17'7\"" },
          width: { metric: "2.25m", imperial: "7'4\"" },
        },
        capacity: { metric: "33.23m3", imperial: "1,170ft" },
        payload: { metric: "28,180kg", imperial: "62,310lbs" },
      }
    },
    {
      title: "40' OPEN TOP",
      image: "/images/equipment/40ft-open-top.svg",
      specs: {
        internal: {
          length: { metric: "12.03m", imperial: "39'6\"" },
          width: { metric: "2.35m", imperial: "7'9\"" },
          height: { metric: "2.39m", imperial: "7'8\"" },
        },
        roof: {
          length: { metric: "11.51m", imperial: "37'9\"" },
          width: { metric: "2.23m", imperial: "7'4\"" },
        },
        capacity: { metric: "66.50m3", imperial: "2,391ft" },
        payload: { metric: "26,680kg", imperial: "58,819lbs" },
      }
    },
    {
      title: "20' REEFER",
      image: "/images/equipment/20ft-reefer.svg",
      specs: {
        internal: {
          length: { metric: "5.45m", imperial: "17'10\"" },
          width: { metric: "2.29m", imperial: "7'6\"" },
          height: { metric: "2.16m", imperial: "7'1\"" },
        },
        door: {
          width: { metric: "2.29m", imperial: "7'6\"" },
          height: { metric: "2.26m", imperial: "7'5\"" },
        },
        capacity: { metric: "28.30m3", imperial: "999ft" },
        payload: { metric: "27,540kg", imperial: "60,720lbs" },
      }
    },
    {
      title: "40' REEFER",
      image: "/images/equipment/40ft-reefer.svg",
      specs: {
        internal: {
          length: { metric: "11.59m", imperial: "38'" },
          width: { metric: "2.29m", imperial: "7'6\"" },
          height: { metric: "2.40m", imperial: "7'10\"" },
        },
        door: {
          width: { metric: "2.29m", imperial: "7'6\"" },
          height: { metric: "2.57m", imperial: "8'5\"" },
        },
        capacity: { metric: "67.90m3", imperial: "2,397ft" },
        payload: { metric: "30,260kg", imperial: "66,712lbs" },
      }
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          data-aos="fade-down"
          data-aos-delay="100"
          sx={{
            fontWeight: 'bold',
            color: '#001845',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #1a237e, #0277bd)',
            },
          }}
        >
          Equipment Specification
        </Typography>

        <Grid container spacing={6}>
          {containerTypes.map((container, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={0}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  p: 4,
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  data-aos="fade-right"
                  data-aos-delay={index * 100 + 200}
                  sx={{
                    color: '#001845',
                    fontWeight: 'bold',
                    mb: 3,
                  }}
                >
                  {container.title}
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={container.image}
                      alt={container.title}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100 + 300}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        backgroundColor: '#f5f5f5',
                        padding: 2,
                        borderRadius: 2,
                        border: '1px solid rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TableContainer
                      data-aos="fade-left"
                      data-aos-delay={index * 100 + 400}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#001845', backgroundColor: '#f5f5f5' }}>Dimension</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: '#001845', backgroundColor: '#f5f5f5' }}>Metric</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: '#001845', backgroundColor: '#f5f5f5' }}>Imperial</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Internal Length</TableCell>
                            <TableCell>{container.specs.internal.length.metric}</TableCell>
                            <TableCell>{container.specs.internal.length.imperial}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Internal Width</TableCell>
                            <TableCell>{container.specs.internal.width.metric}</TableCell>
                            <TableCell>{container.specs.internal.width.imperial}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Internal Height</TableCell>
                            <TableCell>{container.specs.internal.height.metric}</TableCell>
                            <TableCell>{container.specs.internal.height.imperial}</TableCell>
                          </TableRow>
                          {container.specs.door && (
                            <>
                              <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Door Width</TableCell>
                                <TableCell>{container.specs.door.width.metric}</TableCell>
                                <TableCell>{container.specs.door.width.imperial}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Door Height</TableCell>
                                <TableCell>{container.specs.door.height.metric}</TableCell>
                                <TableCell>{container.specs.door.height.imperial}</TableCell>
                              </TableRow>
                            </>
                          )}
                          {container.specs.roof && (
                            <>
                              <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Roof Length</TableCell>
                                <TableCell>{container.specs.roof.length.metric}</TableCell>
                                <TableCell>{container.specs.roof.length.imperial}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Roof Width</TableCell>
                                <TableCell>{container.specs.roof.width.metric}</TableCell>
                                <TableCell>{container.specs.roof.width.imperial}</TableCell>
                              </TableRow>
                            </>
                          )}
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Cubic Capacity</TableCell>
                            <TableCell>{container.specs.capacity.metric}</TableCell>
                            <TableCell>{container.specs.capacity.imperial}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Max. Payload</TableCell>
                            <TableCell>{container.specs.payload.metric}</TableCell>
                            <TableCell>{container.specs.payload.imperial}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Equipment; 