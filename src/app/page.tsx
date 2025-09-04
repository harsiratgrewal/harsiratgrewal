import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: 10,
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Avatar sx={{ width: 96, height: 96 }}>YN</Avatar>
            <Typography variant="h3" fontWeight={700}>
              Your Name
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Software Engineer • Building useful, beautiful things on the web
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Next.js" />
              <Chip label="TypeScript" />
              <Chip label="MUI" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button component={Link} href="#projects" variant="contained">
                Projects
              </Button>
              <Button component={Link} href="/resume.pdf" variant="outlined">
                Résumé
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Projects */}
      <Container id="projects" maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          Projects
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          useFlexGap
          flexWrap="wrap"
        >
          {[
            {
              title: 'Project One',
              desc: 'Brief description of what it is and why it matters.',
              href: 'https://github.com/you/project-one',
            },
            {
              title: 'Project Two',
              desc: 'Another highlight with a concise explanation.',
              href: 'https://github.com/you/project-two',
            },
          ].map((p) => (
            <Card
              key={p.title}
              variant="outlined"
              sx={{ flex: '1 1 300px', minWidth: 280 }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  {p.title}
                </Typography>
                <Typography color="text.secondary" sx={{ my: 1 }}>
                  {p.desc}
                </Typography>
                <Button size="small" href={p.href} target="_blank">
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>

      {/* Contact */}
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Typography>
          Email me at{' '}
          <Button href="mailto:you@yourdomain.com">
            you@yourdomain.com
          </Button>{' '}
          or find me on{' '}
          <Button href="https://linkedin.com/in/yourhandle" target="_blank">
            LinkedIn
          </Button>
          .
        </Typography>
      </Container>
    </Box>
  );
}
