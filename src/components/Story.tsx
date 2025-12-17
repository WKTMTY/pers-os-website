import { Box, Container, Typography } from '@mui/material';

export const Story = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 4,
            fontFamily: '"Space Mono", monospace',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          15 years, 50 apps, 1 breakthrough
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 2 }}>
          15 years chasing every productivity hack, trying 50+ apps, reading stacks of self-help books,
          listening to countless podcasts, even taking courses. Each time, pumped for a week… then back
          to overload and inconsistency.
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', mb: 2 }}>
          So I built my own system, a workspace that adapts to me. I tweaked and refined it for years
          until I added the 'Engage' feature. That single addition changed the game: no more 'choice
          overload' or endless toggling between tasks.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          Every day, Personal OS pulls the focus I need, exactly when I need it. Now I stay locked on
          what matters, (almost) every time.
        </Typography>
      </Container>
    </Box>
  );
};

