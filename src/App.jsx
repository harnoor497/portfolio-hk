import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
          maxWidth: '1000px !important',
          margin: '0 auto',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          '&.section': {
            paddingTop: '48px',
            paddingBottom: '48px',
            '@media (min-width: 900px)': {
              paddingTop: '64px',
              paddingBottom: '64px',
            },
            '&:first-of-type': {
              paddingTop: '100px',
            },
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          marginTop: '32px',
          marginBottom: '24px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: 'primary.main',
            borderRadius: '2px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
