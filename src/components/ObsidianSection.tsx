import { Box, Container, Typography, Button, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';

export const ObsidianSection = () => {
  const youGet = [
    {
      primary: 'Full Obsidian Vault Download',
      secondary: 'Everything you need to use it daily',
    },
    {
      primary: 'A complete step by step tutorial',
      secondary: 'Learn and deploy in a single day',
    },
    {
      primary: 'Discord Access',
      secondary: 'Ask questions, share wins, troubleshoot quickly',
    },
  ];

  const youOffer = [
    {
      primary: 'Real Feedback',
      secondary: 'Does if help in fixing your biggest issues?',
    },
    {
      primary: 'Regular Check-Ins',
      secondary: 'Tell me what breaks or boosts your output',
    },
    {
      primary: 'Success Stories',
      secondary: 'If Personal OS helps you, I want your story',
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
            mb: 4,
            fontFamily: '"Space Mono", monospace',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          Built in Obsidian
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
        >
          Obsidian is a local-first, privacy-friendly notes-taking platform. No subscriptions, no
          locked ecosystem, your data, your control. It's lightning-fast and infinitely flexible,
          making it the perfect foundation for a personal workspace.
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 3 }}>
                You get
              </Typography>
              <List>
                {youGet.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={
                        <Typography component="span" sx={{ fontWeight: 600 }}>
                          {item.primary}
                        </Typography>
                      }
                      secondary={item.secondary}
                      secondaryTypographyProps={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom sx={{ mb: 3 }}>
                You offer
              </Typography>
              <List>
                {youOffer.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={
                        <Typography component="span" sx={{ fontWeight: 600 }}>
                          {item.primary}
                        </Typography>
                      }
                      secondary={item.secondary}
                      secondaryTypographyProps={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="https://discord.gg/SZrM5ayuTR"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Join Beta on Discord
          </Button>
        </Box>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Push the OS to its limits by joining the limited beta. In exchange for feedback, you'll get
          free lifetime access and direct support.
        </Typography>
      </Container>
    </Box>
  );
};

