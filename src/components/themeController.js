import React from 'react';
import { createTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';

// Light theme configuration
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
      gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        },
      },
    },
  },
});

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#b3e5fc',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
      light: '#f8bbd0',
      dark: '#ec407a',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
      gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      card: 'linear-gradient(135deg, #2d2d2d 0%, #363636 100%)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(45, 45, 45, 0.8)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        },
      },
    },
  },
});

// Theme toggle component
const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <IconButton 
      onClick={toggleTheme}
      sx={{
        ml: 1,
        color: 'text.primary',
        '&:hover': {
          backgroundColor: 'rgba(144, 202, 249, 0.08)',
        },
      }}
    >
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export { lightTheme, darkTheme, ThemeToggle };