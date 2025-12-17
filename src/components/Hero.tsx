import { Box, Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 700,
          }}
        >
          Transform Chaos into Clarity
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Set up your productivity system in just one day and take control of your life
        </Typography>
        <List sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto', mb: 4 }}>
          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  Feel scattered or AHDH ?
                </Typography>
              }
              secondary="Done half-using dozens of apps ?"
              secondaryTypographyProps={{ color: 'text.secondary' }}
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  Deploy faster than reading another "productivity" book
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  A complete Organization System
                </Typography>
              }
              secondary="designed for consistency"
              secondaryTypographyProps={{ color: 'text.secondary' }}
            />
          </ListItem>
        </List>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
          }}
        >
          Join Beta
        </Button>
      </Container>
    </Box>
  );
};

