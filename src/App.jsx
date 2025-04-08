import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Education from './sections/Education';
// import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          width: '100%',
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        {/* <Experience /> */}
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
