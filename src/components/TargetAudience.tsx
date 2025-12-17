import { Box, Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

export const TargetAudience = () => {
  const points = [
    {
      primary: "You've tried 50 app ... none stuck",
      secondary: 'You crave a single system that can handle your workflow.',
    },
    {
      primary: "You're scattered and anxious",
      secondary: 'Action is easy, consistency is much harder.',
    },
    {
      primary: "You're aiming for growth",
      secondary: 'Personal project or business, you need execution daily.',
    },
    {
      primary: 'You want a system that evolves with you',
      secondary: 'No more outgrowing your tools.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: '"Space Mono", monospace',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          Built for the Obsessed, Designed for Control
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          textAlign="center"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Disclaimer : It's not for everyone
        </Typography>
        <List sx={{ mb: 4 }}>
          {points.map((point, index) => (
            <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
              <ListItemText
                primary={
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    {point.primary}
                  </Typography>
                }
                secondary={point.secondary}
                secondaryTypographyProps={{ color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: 'center' }}>
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
        </Box>
      </Container>
    </Box>
  );
};

