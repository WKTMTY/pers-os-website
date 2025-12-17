import { Divider } from '@mui/material';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { TargetAudience } from '../components/TargetAudience';
import { Story } from '../components/Story';
import { BetaCTA } from '../components/BetaCTA';
import { ObsidianSection } from '../components/ObsidianSection';

export const Home = () => {
  return (
    <>
      <Divider
        sx={{
          borderColor: '#808080',
          height: '24px',
        }}
      />
      <main>
        <Hero />
        <Divider
          sx={{
            my: { xs: 6, md: 18 },
            borderColor: '#808080',
            height: '24px',
          }}
        />
        <Features />
        <Divider
          sx={{
            my: { xs: 6, md: 18 },
            borderColor: '#808080',
            height: '24px',
          }}
        />
        <TargetAudience />
        <Divider
          sx={{
            my: { xs: 6, md: 18 },
            borderColor: '#808080',
            height: '24px',
          }}
        />
        <Story />
        <Divider
          sx={{
            my: { xs: 6, md: 18 },
            borderColor: '#808080',
            height: '24px',
          }}
        />
        <BetaCTA />
        <ObsidianSection />
        <Divider
          sx={{
            my: { xs: 6, md: 18 },
            borderColor: '#808080',
            height: '24px',
          }}
        />
      </main>
    </>
  );
};

