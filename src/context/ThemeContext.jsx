import { createContext, useState, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Create the context
export const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Get the saved theme from localStorage or default to 'dark'
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Create the theme based on the current mode
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#3B82F6' : '#2563EB', // Blue
        light: mode === 'dark' ? '#60A5FA' : '#3B82F6',
        dark: mode === 'dark' ? '#2563EB' : '#1D4ED8',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: mode === 'dark' ? '#8B5CF6' : '#7C3AED', // Violet
        light: mode === 'dark' ? '#A78BFA' : '#8B5CF6',
        dark: mode === 'dark' ? '#7C3AED' : '#6D28D9',
        contrastText: '#FFFFFF',
      },
      background: {
        default: mode === 'dark' ? '#0F172A' : '#FFFFFF', // Deep navy blue for dark mode
        paper: mode === 'dark' ? '#1E293B' : '#F8FAFC', // Slightly lighter navy for cards
      },
      text: {
        primary: mode === 'dark' ? '#E2E8F0' : '#1E293B', // Light gray for dark mode
        secondary: mode === 'dark' ? '#94A3B8' : '#475569', // Medium gray for dark mode
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
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            '&:focus': {
              outline: 'none',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: '0 30px !important',
            '@media (min-width: 600px)': {
              padding: '0 30px !important',
            },
            maxWidth: '100% !important',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            '&.section': {
              padding: '20px',
              '@media (min-width: 900px)': {
                padding: '40px 20px',
              },
              '&:first-of-type': {
                paddingTop: '60px',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                '@media (min-width: 900px)': {
                  paddingTop: '80px',
                },
              },
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              boxSizing: 'border-box',
              position: 'relative',
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
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: mode === 'dark' 
                ? '0 12px 30px rgba(0, 0, 0, 0.4)' 
                : '0 12px 30px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '4px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: mode === 'dark'
                ? '0 4px 8px rgba(0,0,0,0.3)'
                : '0 4px 8px rgba(0,0,0,0.1)',
            },
          },
        },
      },
    },
  });

  // Toggle the theme
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  // Update the theme when the mode changes
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 