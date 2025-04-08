import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    url: 'https://github.com/harnoor497',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/harnoorkaur1009/',
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    url: 'mailto:harnoor1009@gmail.com',
  },
  {
    name: 'Location',
    icon: <LocationIcon />,
    url: 'https://www.google.com/maps/place/Surrey,+BC,+Canada',
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ENDPOINT);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate form data
    const errors = {
      name: !name || name.trim() === '',
      email: !email || !isValidEmail(email),
      message: !message || message.trim() === '',
    };
    
    setFormErrors(errors);
    
    // Check if there are any errors
    if (errors.name || errors.email || errors.message) {
      return;
    }
    
    // Submit the form using FormSpree
    await handleSubmit(e);
  };

  return (
    <Box
      id="contact"
      component="section"
      className="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          margin: 0,
          padding: '0 !important',
        }}
      >
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ 
                color: 'primary.main',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Get In Touch
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 3,
              backgroundColor: 'background.paper',
              borderRadius: 2,
              position: 'relative',
              maxWidth: '1200px',
              margin: '0 auto',
              mx: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                alignItems: { xs: 'stretch', md: 'center' },
              }}
            >
              {/* Contact Info */}
              <Box
                sx={{
                  flex: { xs: '1 1 auto', md: '0 1 45%' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    maxWidth: '400px',
                    textAlign: 'left'
                  }}
                >
                  I'm currently looking for new opportunities. Whether you have a
                  question or just want to say hi, I'll try my best to get back to you!
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((link) => (
                    <IconButton
                      key={link.name}
                      href={link.url}
                      target={link.name === 'Location' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-4px)',
                          transition: 'all 0.3s ease-in-out',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* Message Form */}
              <Box
                sx={{
                  flex: { xs: '1 1 auto', md: '0 1 55%' },
                  position: 'relative',
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 2.5,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    position: 'relative',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                    Send Message
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleFormSubmit}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <TextField
                      label="Name"
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      error={formErrors.name}
                      helperText={formErrors.name ? "Name is required" : ""}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      error={formErrors.email}
                      helperText={formErrors.email ? "Please enter a valid email address" : ""}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Message"
                      name="message"
                      multiline
                      rows={3}
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      error={formErrors.message}
                      helperText={formErrors.message ? "Message is required" : ""}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      size="medium"
                      type="submit"
                      disabled={state.submitting}
                      sx={{ 
                        alignSelf: 'flex-start',
                        backgroundColor: 'primary.main',
                        color: 'background.default',
                        px: 3,
                        py: 1,
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {state.submitting ? 'Processing...' : 'Send Message'}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={state.succeeded}
        autoHideDuration={6000}
        onClose={() => {}}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully! Will be back to you soon.
        </Alert>
      </Snackbar>

      <Snackbar
        open={state.errors && state.errors.length > 0}
        autoHideDuration={6000}
        onClose={() => {}}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Failed to send message. Please try again later.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 