import { Box, Container, Typography, Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import DescriptionIcon from '@mui/icons-material/Description';

const Hero = () => {
  return (
    <Box
      component="section"
      className="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
            : 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="overline"
            component="div"
            color="primary"
            sx={{ mb: 2, letterSpacing: 2 }}
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
              mb: 4,
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
              maxWidth: '600px',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.1rem' },
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
          <Box sx={{ display: 'flex', gap: 2 }}>
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
      </Container>
    </Box>
  );
};

export default Hero; 