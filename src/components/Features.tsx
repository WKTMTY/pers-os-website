import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';

export const Features = () => {
  const features = [
    {
      title: 'DEPLOY',
      description: 'Step by step guidance to install the entire system in a single day.',
    },
    {
      title: 'OPERATE',
      description: 'Run goals, tasks and routines with clarity. Your daily structure on autopilot.',
    },
    {
      title: 'COMMAND',
      description: 'Intentionally improve your execution. Refine, adapt, and expand without friction.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
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
          Implement once, execute daily
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
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
            Deploy Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

