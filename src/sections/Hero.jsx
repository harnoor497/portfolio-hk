import { Box, Container, Typography, Button, Grid } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="section"
      className="section"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: isDark
          ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
          : 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Tech Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.05,
          zIndex: 0,
          background: isDark
            ? 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 50%)',
        }}
      />

      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 }, // Reduced padding
        }}
      >
        <Grid 
          container 
          spacing={3} 
          alignItems="center" 
          justifyContent="center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          {/* Left Content */}
          <Grid 
            item 
            xs={12} 
            md={7}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              pr: { md: 4 }, // Add padding right on desktop
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="overline"
                component="div"
                color="primary"
                sx={{ 
                  mb: 2, 
                  letterSpacing: 2,
                  fontSize: '1rem',
                }}
              >
                Hi, my name is
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.1,
                  color: 'text.primary',
                }}
              >
                Harnoor Kaur.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  fontWeight: 600,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                I build things for the web.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: { xs: '100%', md: '600px' },
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                }}
              >
                I'm a software engineer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="#projects"
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    py: 1.5,
                    px: 4,
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<DescriptionIcon />}
                  href="/src/assets/HarnoorKaurResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    py: 1.5,
                    px: 4,
                  }}
                >
                  Resume
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Content - Tech Circle */}
          <Grid 
            item 
            xs={12} 
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                width: '100%',
                maxWidth: '400px', // Reduced from 500px to 400px
                aspectRatio: '1/1',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '110%',
                    height: '110%',
                    borderRadius: '50%',
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 100%)'
                      : 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(0,0,0,0) 100%)',
                    animation: 'rotate 10s linear infinite',
                  },
                  '@keyframes rotate': {
                    '0%': {
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) rotate(360deg)',
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src="/public/images/profile.jpg"
                  alt="Profile"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: isDark
                      ? '2px solid rgba(59,130,246,0.3)'
                      : '2px solid rgba(37,99,235,0.3)',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      transform: 'scale(1.02)',
                      borderColor: 'primary.main',
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 