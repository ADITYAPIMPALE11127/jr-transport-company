import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FaTruck,
  FaCogs,
  FaIndustry,
  FaShip,
  FaWarehouse,
  FaBuilding
} from 'react-icons/fa';
import { styled, alpha } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Lighter overlay to show the background image
const BackgroundOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to bottom, 
    ${alpha(theme.palette.common.black, 0.4)} 0%,
    ${alpha(theme.palette.common.black, 0.3)} 50%,
    ${alpha(theme.palette.common.black, 0.4)} 100%
  )`,
  zIndex: 1,
}));

// Main container with background image - LIGHTER overlay
const ServicesContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(16, 12),
  backgroundImage: 'url(/assets/services-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  
  // Lighter gradient overlay to show background image
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${alpha('#000000', 0.2)} 0%,
      ${alpha('#000000', 0.1)} 50%,
      ${alpha('#000000', 0.2)} 100%
    )`,
    zIndex: 2,
  },
  
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(8, 8),
  },
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 6),
    backgroundAttachment: 'scroll',
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 4),
  },
}));

// Content container with proper z-index
const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
}));

// Scroll container with buttons absolutely positioned outside
const ScrollContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: theme.spacing(0, 8),
  
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(0, 6),
  },
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 4),
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

const ServicesScroll = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  padding: theme.spacing(0.5, 0),
  margin: theme.spacing(0),
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
    padding: theme.spacing(2, 0),
  },

  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    padding: theme.spacing(1, 0),
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  minWidth: 300,
  maxWidth: 340,
  height: 440,
  borderRadius: '20px',
  background: 'white',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  flexShrink: 0,
  border: 'none',

  '&:hover': {
    transform: 'translateY(-15px) scale(1.03)',
    boxShadow: `
      0 15px 35px rgba(255, 0, 0, 0.2),
      0 25px 50px rgba(0, 0, 0, 0.3)
    `,
    borderRadius: '20px',

    '& .service-icon': {
      transform: 'scale(1.15) rotate(8deg)',
      filter: 'drop-shadow(0 5px 15px rgba(255, 0, 0, 0.4))',
    },

    '& .service-title': {
      color: '#d32f2f',
    },

    '& .feature-item': {
      transform: 'translateX(5px)',
      color: '#333',
    },

    '& .feature-check': {
      color: '#d32f2f',
      transform: 'scale(1.2)',
    }
  },

  [theme.breakpoints.down('md')]: {
    minWidth: 260,
    maxWidth: 300,
    height: 380,
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: 220,
    maxWidth: 260,
    height: 360,
    borderRadius: '16px',
  },

  [theme.breakpoints.down('xs')]: {
    minWidth: 200,
    maxWidth: 240,
    height: 330,
  },
}));

// Gradient overlay for the top part of the card
const CardTopGradient = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '140px',
  background: `linear-gradient(135deg, 
    #000000 0%,
    #333333 50%,
    #555555 100%
  )`,
  zIndex: 1,
}));

// Buttons positioned COMPLETELY outside the scroll area
const ScrollButton = styled(IconButton)(({ theme, side }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  border: `2px solid #d32f2f`,
  width: 64,
  height: 64,
  zIndex: 100,
  opacity: 1,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  
  // Position buttons outside the scroll container
  left: side === 'left' ? theme.spacing(2) : 'auto',
  right: side === 'right' ? theme.spacing(2) : 'auto',
  
  '&:hover': {
    backgroundColor: '#d32f2f',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 12px 40px rgba(211, 47, 47, 0.5)',
    borderColor: '#d32f2f',
    
    '& .MuiSvgIcon-root': {
      color: 'white',
      animation: side === 'left' ? 'bounceLeft 0.6s infinite' : 'bounceRight 0.6s infinite',
    }
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: '#d32f2f',
    transition: 'all 0.3s ease',
  },
  
  '@keyframes bounceLeft': {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(-4px)',
    }
  },
  
  '@keyframes bounceRight': {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '50%': {
      transform: 'translateX(4px)',
    }
  },
  
  [theme.breakpoints.down('lg')]: {
    width: 56,
    height: 56,
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
    }
  },
  
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  height: 140,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 2,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
    animation: 'shimmer 3s infinite',
  },

  '@keyframes shimmer': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(100%)',
    }
  },

  [theme.breakpoints.down('md')]: {
    height: 120,
  },

  [theme.breakpoints.down('sm')]: {
    height: 100,
  },

  [theme.breakpoints.down('xs')]: {
    height: 90,
  },
}));

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollRef = useRef(null);

  const services = [
    {
      icon: <FaTruck />,
      title: "ODC/Over Dimensional Cargo Transport",
      desc: "Specialized transportation solutions for over-dimensional cargo with hydraulic modular trailers and advanced route planning capabilities.",
      features: ["Hydraulic modular trailers", "Route survey & feasibility study", "Police escorts & permissions", "Real-time tracking & monitoring"]
    },
    {
      icon: <FaCogs />,
      title: "Heavy Machinery Transport",
      desc: "Safe and secure transportation of heavy industrial machinery with certified rigging and specialized equipment handling.",
      features: ["Certified rigging team", "Heavy lift cranes", "Load distribution calculation", "Insurance coverage"]
    },
    {
      icon: <FaIndustry />,
      title: "Boiler & Factory Equipment Movement",
      desc: "Expert handling and transportation of boilers, pressure vessels, and complete factory equipment with precision engineering.",
      features: ["Site survey & planning", "Customized loading/unloading", "On-site supervision", "Multi-modal options"]
    },
    {
      icon: <FaShip />,
      title: "Container Transport",
      desc: "Efficient container transportation services across all major ports and industrial hubs with dedicated fleet management.",
      features: ["Port-to-door delivery", "800+ owned & attached vehicles", "24x7 control room", "Digital POD delivery"]
    },
    {
      icon: <FaWarehouse />,
      title: "Bulk Cargo Movement",
      desc: "Comprehensive bulk cargo transportation solutions for raw materials, finished goods, and industrial commodities.",
      features: ["Coverage in 28 states & 7 UTs", "Specialized bulk carriers", "Weather-proof handling", "End-to-end logistics"]
    },
    {
      icon: <FaBuilding />,
      title: "Industrial Project Cargo Logistics",
      desc: "Complete turnkey logistics solutions for industrial projects including power plants, refineries, and infrastructure projects.",
      features: ["Project planning & execution", "Heavy lift equipment", "Route clearance & permits", "On-site project management"]
    },
  ];

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth - 10;
    
    setShowLeftButton(scrollLeft > 10);
    setShowRightButton(scrollLeft < maxScrollLeft);
  };

  const scrollLeft = (amount = 800) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = (amount = 800) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Initial button visibility check
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  return (
    <Box
      id="services"
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Services Container with background image - NOW VISIBLE */}
      <ServicesContainer>
        {/* Lighter Background Overlay - allows background image to show through */}
        <BackgroundOverlay />
        
        {/* Content Container */}
        <ContentContainer maxWidth="xl">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 1, lg: 1 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 800,
                color: 'white',
                mb: 2,
                position: 'relative',
                display: 'inline-block',
                textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '5px',
                  background: `linear-gradient(90deg,
                    #d32f2f,
                    #ff5252
                  )`,
                  borderRadius: '3px',
                  boxShadow: '0 2px 8px rgba(211, 47, 47, 0.5)',
                }
              }}
            >
              Our Comprehensive Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.7,
                px: 2,
                fontWeight: 400,
                mt: 1,
                textShadow: '0 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              End-to-end heavy transport solutions backed by experience, technology and a commitment to safety
            </Typography>
          </Box>

          {/* Services Container with separate button areas */}
          <Box sx={{ position: 'relative' }}>
            {/* Left Scroll Button - COMPLETELY SEPARATE from cards */}
            {showLeftButton && !isMobile && (
              <ScrollButton
                side="left"
                onClick={() => scrollLeft()}
                aria-label="Scroll left"
              >
                <ChevronLeftIcon />
              </ScrollButton>
            )}

            {/* Scroll Container (cards only) */}
            <ScrollContainer>
              <ServicesScroll 
                ref={scrollRef} 
                onScroll={checkScrollButtons}
              >
                {services.map((service, index) => (
                  <ServiceCard key={index} elevation={3}>
                    {/* Black gradient overlay for top part */}
                    <CardTopGradient />
                    
                    {/* Icon Header */}
                    <IconContainer>
                      <Box
                        className="service-icon"
                        sx={{
                          color: '#d32f2f', // Red icons
                          fontSize: { xs: '3rem', md: '4rem' },
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.4)',
                          position: 'relative',
                          zIndex: 3,
                        }}
                      >
                        {service.icon}
                      </Box>
                    </IconContainer>

                    {/* Content - WHITE background */}
                    <CardContent
                      sx={{
                        height: 'calc(100% - 140px)',
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2.5,
                        background: 'white',
                        position: 'relative',
                        zIndex: 2,

                        [theme.breakpoints.down('md')]: {
                          height: 'calc(100% - 120px)',
                          p: 2,
                        },

                        [theme.breakpoints.down('sm')]: {
                          height: 'calc(100% - 100px)',
                          p: 1.5,
                        },

                        [theme.breakpoints.down('xs')]: {
                          height: 'calc(100% - 90px)',
                          p: 1,
                        },
                      }}
                    >
                      <Typography
                        className="service-title"
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#212121',
                          mb: 0.5,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          lineHeight: 1.2,
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#424242',
                          mb: 1,
                          lineHeight: 1.4,
                          fontSize: { xs: '0.85rem', md: '0.95rem' },
                        }}
                      >
                        {service.desc}
                      </Typography>

                      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                        {service.features.map((feature, i) => (
                          <Box
                            className="feature-item"
                            component="li"
                            key={i}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 0.5,
                              fontSize: { xs: '0.8rem', md: '0.9rem' },
                              color: '#333',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <Box
                              className="feature-check"
                              sx={{
                                color: '#d32f2f',
                                mr: 1.5,
                                mt: '2px',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                fontWeight: 'bold',
                                flexShrink: 0,
                                transition: 'all 0.2s ease',
                              }}
                            >
                              ✓
                            </Box>
                            <Box component="span" sx={{ lineHeight: 1.4 }}>
                              {feature}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </ServiceCard>
                ))}
              </ServicesScroll>
            </ScrollContainer>

            {/* Right Scroll Button - COMPLETELY SEPARATE from cards */}
            {showRightButton && !isMobile && (
              <ScrollButton
                side="right"
                onClick={() => scrollRight()}
                aria-label="Scroll right"
              >
                <ChevronRightIcon />
              </ScrollButton>
            )}

            {/* Scroll Indicator for Mobile */}
            {isMobile && (
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    border: `1px solid #d32f2f`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <ChevronLeftIcon sx={{ 
                    color: '#d32f2f', 
                    fontSize: '1.2rem',
                  }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#212121',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    Swipe to explore services
                  </Typography>
                  <ChevronRightIcon sx={{ 
                    color: '#d32f2f', 
                    fontSize: '1.2rem',
                  }} />
                </Box>
              </Box>
            )}
          </Box>
        </ContentContainer>
      </ServicesContainer>
    </Box>
  );
};

export default Services;