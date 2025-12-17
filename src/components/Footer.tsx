import { Box, Container, Typography, Link as MuiLink, IconButton, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 8,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component={Link}
              to="/"
              color="inherit"
              aria-label="Home"
              sx={{ color: 'text.secondary' }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:support@pers-os.com"
              color="inherit"
              aria-label="Email"
              sx={{ color: 'text.secondary' }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
          <MuiLink
            component={Link}
            to="/privacy"
            color="text.secondary"
            underline="hover"
            sx={{ fontSize: '0.875rem' }}
          >
            Privacy policy
          </MuiLink>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            Copyright WKTMTY © 2024. All rights reserved.
          </Typography>
          <MuiLink
            component={Link}
            to="/terms"
            color="text.secondary"
            underline="hover"
            sx={{ fontSize: '0.875rem' }}
          >
            Terms and conditions
          </MuiLink>
        </Stack>
      </Container>
    </Box>
  );
};

