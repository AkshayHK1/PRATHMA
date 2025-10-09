import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Equipment from './pages/Equipment.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep blue color
    },
    secondary: {
      main: '#f50057', // Pink color for accents
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/equipment" element={<Equipment />} />
            </Routes>
          </Box>
          <Footer />
          <WhatsAppButton />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;