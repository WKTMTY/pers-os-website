import { Box, Container, Typography } from '@mui/material';

export const BetaCTA = () => {
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
          Help Me Refine Personal OS. Get the System Free
        </Typography>
      </Container>
    </Box>
  );
};

