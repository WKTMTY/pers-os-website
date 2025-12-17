import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.default' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.8,
            },
          }}
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="Personal OS Logo"
            sx={{
              height: '50px', // 25% bigger (40px * 1.25 = 50px)
              width: 'auto',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"League Spartan", sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#ffb800', // Yellow/orange color
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Personal OS
          </Typography>
        </Box>
        <Button
          component="a"
          href="https://discord.gg/SZrM5ayuTR"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'rgba(144, 202, 249, 0.08)',
            },
          }}
        >
          Join the discord
        </Button>
      </Toolbar>
    </AppBar>
  );
};

