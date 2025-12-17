import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9ee58d', // Mint green for headings
      light: '#b8f0a8',
      dark: '#7dd46a',
    },
    secondary: {
      main: '#ffb800', // Yellow/orange for buttons
      light: '#ffc733',
      dark: '#cc9300',
    },
    background: {
      default: '#0d0d0d', // Very dark background
      paper: '#0d0d0d', // Same as default
    },
    text: {
      primary: '#f8f8f8', // Light gray/white text
      secondary: 'rgba(248, 248, 248, 0.7)', // Slightly transparent
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Body text and paragraphs use Roboto
    h2: {
      fontFamily: '"League Spartan", sans-serif', // Headings use League Spartan
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#9ee58d', // Mint green
    },
    h3: {
      fontFamily: '"League Spartan", sans-serif', // Headings use League Spartan
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      color: '#9ee58d', // Mint green
    },
    h4: {
      fontFamily: '"League Spartan", sans-serif', // Headings use League Spartan
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#9ee58d', // Mint green
    },
    h5: {
      fontFamily: 'Roboto, sans-serif', // Logo uses Roboto
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Roboto, sans-serif', // Paragraphs use Roboto
    },
    body2: {
      fontFamily: 'Roboto, sans-serif', // Small text uses Roboto
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif', // Buttons use Inter
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#ffb800', // Yellow/orange
          color: '#0d0d0d', // Dark text
          '&:hover': {
            backgroundColor: '#ffc733', // Lighter yellow on hover
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
  },
});

