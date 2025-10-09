import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #1e88e5 50%, #42a5f5 75%, #90caf9 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(30, 56, 114, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  animation: `${fadeIn} 0.5s ease-out`,
  '&:hover': {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #1e88e5 50%, #42a5f5 75%, #90caf9 100%)',
    boxShadow: '0 4px 35px rgba(30, 56, 114, 0.4)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  position: 'relative',
  padding: '8px 16px',
  overflow: 'hidden',
  fontWeight: 500,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.4s ease',
  },
  '&:hover::before': {
    transform: 'translateX(100%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0%',
    height: '2px',
    bottom: '0',
    left: '50%',
    background: 'linear-gradient(90deg, #1e3c72, #2a5298, #1e88e5, #42a5f5, #90caf9)',
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transform: 'translateY(-1px)',
    color: '#FFD700',
    boxShadow: '0 4px 8px rgba(30, 56, 114, 0.2)',
    '&::before': {
      transform: 'translateX(100%)',
    },
  },
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const LogoBox = styled(Box)(({ theme }) => ({
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.02)',
    '& img': {
      filter: 'brightness(1.1) drop-shadow(0 0 3px rgba(144, 202, 249, 0.3))',
      transform: 'rotate(2deg)',
    },
    '& .MuiTypography-root': {
      background: 'linear-gradient(90deg, #1e3c72, #2a5298, #1e88e5, #42a5f5, #90caf9)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% auto',
      animation: 'gradient 3s linear infinite',
      transform: 'translateX(2px)',
    },
  },
  '& img': {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #1e88e5 50%, #42a5f5 75%, #90caf9 100%)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(30, 56, 114, 0.3)',
    animation: `${fadeIn} 0.3s ease-out`,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: 'white',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transform: 'translateX(3px)',
    color: '#FFD700',
    boxShadow: '0 2px 4px rgba(30, 56, 114, 0.1)',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '2px',
      background: 'linear-gradient(to bottom, #1e3c72, #2a5298, #1e88e5, #42a5f5, #90caf9)',
      animation: 'fadeIn 0.3s ease-in-out',
    },
  },
}));

// Add keyframes for gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Add keyframes for new animations
const pulseAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

// Add global styles for gradient animation
const GlobalStyles = styled('div')`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Equipment Specification', path: '/equipment' },
  ];
  const menuOpen = Boolean(anchorEl);

  return (
    <StyledAppBar position="sticky">
      <Container disableGutters maxWidth={false}>
        <Toolbar disableGutters>
          {/* Logo */}
          <LogoBox
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 0,//flexGrow: { xs: 1, md: 0 },
              // ml:0,
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />

          </LogoBox>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              display: { xs: 'none', sm: 'block' },
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Prathama Logistics & Shipping Line
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <StyledButton
                  key={item.title}
                  component={Link}
                  to={item.path}
                  sx={{
                    mx: 1,
                  }}
                >
                  {item.title}
                </StyledButton>
              ))}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                sx={{
                  ml: 'auto',
                  color: 'white',
                  transition: 'background-color 0.3s ease',
                  ...(menuOpen && { backgroundColor: alpha(theme.palette.common.white, 0.1) }),
                }}
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon
                  sx={{
                    transition: 'transform 0.3s ease',
                    transform: menuOpen ? 'rotate(90deg) scale(1.1)' : 'none',
                  }}
                />
              </IconButton>
              <StyledMenu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuItems.map((item) => (
                  <StyledMenuItem
                    key={item.title}
                    component={Link}
                    to={item.path}
                    onClick={handleClose}
                  >
                    {item.title}
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 