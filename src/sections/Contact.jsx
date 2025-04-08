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
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
];

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
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
      setSnackbar({
        open: true,
        message: 'Please fill in all fields correctly',
        severity: 'error',
      });
      return;
    }
    
    setLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Harnoor",
          reply_to: email,
        }
      );

      if (result.status === 200) {
        // Show success message
        setSnackbar({
          open: true,
          message: 'Your message has been sent successfully! Will be back to you soon.',
          severity: 'success',
        });
        
        // Reset form
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
                  // textAlign: 'center',
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
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5,
                }}>
                  {/* <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Email: harnoor1009@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Location: Surrey, British Columbia
                  </Typography> */}
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((link) => (
                    <IconButton
                      key={link.name}
                      href={link.url}
                      target="_blank"
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
                    onSubmit={handleSubmit}
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
                      name="user_name"
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
                      name="user_email"
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
                      disabled={loading}
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
                      {loading ? 'Processing...' : 'Send Message'}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 