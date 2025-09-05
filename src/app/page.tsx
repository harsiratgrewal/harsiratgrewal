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
            <Avatar alt="Harsirat Grewal" sx={{ width: 140, height: 140 }} src="/avatar.JPG"></Avatar>
            <Typography variant="h3" fontWeight={700}>
              Harsirat Grewal
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Working towards making a change
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Full Stack Developer" />
              <Chip label="Graduate Student (Artificial Intelligence)" />
              <Chip label="AI Researcher" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button component={Link} href="#projects" variant="contained">
                Projects
              </Button>
              <Button component={Link} href="/resume.pdf" variant="outlined">
                Resume
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
              desc: 'Brief  of what it is and why it matters.',
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
          <Button href="mailto:harsiratgrewal.hg@gmail.com">
            harsiratgrewal.hg@gmail.com
          </Button>{' '}
          or find me on{' '}
          <Button href="https://www.linkedin.com/in/harsiratgrewal/" target="_blank">
            LinkedIn
          </Button>
        </Typography>
      </Container>
    </Box>
  );
}
