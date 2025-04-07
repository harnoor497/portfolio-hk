import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Paper,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
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

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
      className="section"
    >
      <Container>
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
              mb: 8, 
              fontWeight: 700,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 3 }}
                >
                  I'm currently looking for new opportunities. Whether you have a
                  question or just want to say hi, I'll try my best to get back to
                  you!
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Email: harnoor1009@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Location: Surrey, British Columbia
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((link) => (
                    <IconButton
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          transition: 'transform 0.2s ease-in-out',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Send Message
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Subject"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 