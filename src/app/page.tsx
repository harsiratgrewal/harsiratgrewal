"use client"
import { useState } from "react"
import {
  AppBar, Toolbar, Avatar, Typography, Box, Container, Card,
  Tooltip, IconButton, Dialog, DialogTitle, DialogContent,
  DialogActions, Divider, List,
  ListItem, ListItemIcon, ListItemText, Button,
  CardMedia, CardActionArea, Link, ListItemButton
} from "@mui/material"
import ArticleIcon from "@mui/icons-material/Article"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Robot } from "./components/Robot"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"

export default function Home() {
  type Project = {
    id: string
    title: string
    blurb: string
    details: string
    image: string
    docs: { label: string; href: string }[]
    github: string
  }

  const projects: Project[] = [
    {
      id: "forest-fire-prediction",
      title: "Forest Fire Prediction",
      blurb:
        "Developed a two-stage pipeline using K-Means clustering and Random Forest to classify wildfire risk into five tiers from ~100k hourly weather records, achieving ~100% accuracy across metrics and validating with cross-validation, confusion matrices, and silhouette scores.",
      details:
        "- Built a two-stage pipeline using K-Means & Random Forest to forecast wildfire risk from ~100k hourly weather records.\n" +
        "- Labeled fire risk into 5 tiers using K-Means on temperature, humidity, wind, speed, and pressure.\n" +
        "- Trained a random forest with 70/30 split on training and testing.\n" +
        "- Achieved ~100% across all evaluation metrics (accuracy, precision, recall, and F1) and validated via cross-validation and confusion matrix analysis.\n" +
        "- Verified clustering quality with a Silhouette Score and 2D Projections.",
      image: "/projects/ForestFires/wildfire_risk.png",
      docs: [
        { label: "Project Report", href: "projects/ForestFires/ProjectReport.pdf" },
        { label: "Notebook Output", href: "projects/ForestFires/ForestFires.pdf" },
      ],
      github: "https://github.com/harsiratgrewal/Forest-Fire-Prediction",
    },
    {
      id: "face-recoginition-using-eigenface-and-naive-bayes",
      title: "Face Recognition using Eigenface & Naive Bayes",
      blurb:
        "Implemented a PCA-based Eigenface and Naive Bayes pipeline with z-score normalization, boosting accuracy from 27% to 88% via 10-fold cross-validation, hyperparameter tuning, and visual evaluations with heatmaps and classification reports",
      details:
        "- Implemented Eigenfaces and Naive Bayes face-recognition pipeline using scikit-learn, with z-score normalization and Gaussian classification.\n" +
        "- Engineered a clean PCA workflow: mean-face centering, eigen decomposition, top-k eigenfaces, and projection to a compact feature space.\n" +
        "- Performed 10-fold cross validation, tuning the number of components and adding z-score raised accuracy from 27% to 88%.\n" +
        "- Visualized reports using confusion-matrix heatmaps and classification reports (precision/recall/F1).",
      image: "/projects/Eigenfaces/eigenfaces.png",
      docs: [
        { label: "Project Report", href: "/projects/Eigenfaces/Report.pdf" },
        { label: "Implementation Run", href: "/projects/Eigenfaces/eigenface.pdf" },
        { label: "Test Run", href: "/projects/Eigenfaces/test.pdf" },
      ],
      github: "https://github.com/harsiratgrewal/Face-Recognition-Using-Eigenface-with-Naive-Bayes",
    }
  ]

  const [active, setActive] = useState<Project | null>(null)

  type Ongoing = {
    id: string
    title: string
    blurb: string
    details: string
    docs?: { label: string; href: string }[]
    github?: string
  }

  const ongoing: Ongoing[] = [
    {
      id: "example",
      title: "Upcoming AI Research",
      blurb: "",
      details:
        "Independent Research",
      docs: [{ label: "", href: "" }],
      github: "",
    },
  ]

  const [activeOngoing, setActiveOngoing] = useState<Ongoing | null>(null)

  const HEADER_H = 72
  const FOOTER_H = 56

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100vh",
        bgcolor: "black",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",   
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "black", color: "white", borderBottom: "1px solid #222" }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", gap: 1.5, minHeight: `${HEADER_H}px` }}>
          <Robot size={40} wave />

          <Avatar alt="portrait" src="/avatar.JPG" sx={{ width: 56, height: 56 }} />
          <Box sx={{ ml: 1, display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              Harsirat (Harry) Grewal
            </Typography>
            <Typography variant="body2">💻 Full Stack Developer</Typography>
            <Typography variant="body2">🎓 Graduate Student (MS Artificial Intellgence, Johns Hopkins) </Typography>
            <Typography variant="body2">🤖 AI Researcher</Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="GitHub" arrow>
            <IconButton
              component="a"
              href="https://github.com/harsiratgrewal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              sx={{
                bgcolor: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "white" },
                "&:hover .MuiSvgIcon-root": { color: "#000" }
              }}
            >
              <GitHubIcon sx={{ fontSize: 36, color: "#000" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn" arrow>
            <IconButton
              component="a"
              href="https://linkedin.com/in/harsiratgrewal"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              sx={{
                bgcolor: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "white" },
                "&:hover .MuiSvgIcon-root": { color: "#0A66C2" }
              }}
            >
              <LinkedInIcon sx={{ fontSize: 36, color: "#0A66C2" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Open Resume" arrow>
            <IconButton
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              sx={{
                bgcolor: "white",
                color: "black",
                px: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                height: 36,
                "&:hover": { bgcolor: "#f2f2f2" },
              }}
            >
              <ArticleIcon sx={{ fontSize: 18, mr: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Resume
              </Typography>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* ===== Projects Section ===== */}
      <Box
        sx={{
          bgcolor: "white",
          color: "black",
          height: `calc((100vh - ${HEADER_H}px - ${FOOTER_H}px) * 0.6)`, 
          overflow: "hidden", 
          borderBottom: "1px solid #e5e5e5"
        }}
      >
        <Container
          sx={{
            py: 2.5,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0
          }}
        >
          <Typography gutterBottom sx={{ flex: "0 0 auto", fontSize: '24px' }}>
            Projects
          </Typography>

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              pr: 1
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr" },
                gap: 4,
                ml: 10,
                pb: 1,
              }}
            >
              {projects.map((p) => (
                <Card key={p.id} variant="outlined" sx={{ overflow: "hidden" }}>
                  <CardActionArea onClick={() => setActive(p)}>
                    <Box sx={{ display: "flex", alignItems: "stretch", flexDirection: "row" }}>
                      <CardMedia
                        component="img"
                        image={p.image}
                        alt={`${p.title} thumbnail`}
                        sx={{
                          width: { xs: 120, sm: 160 },
                          height: "100%",
                          objectFit: "cover",
                          flexShrink: 0,
                          fontSize: '12px'
                        }}
                      />

                      <Box sx={{ p: 2, flex: 1 }}>
                        <Typography sx={{ mb: 0.5, fontSize: '12px', fontWeight: 'bold' }}>
                          {p.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: '10px' }}>
                          {p.blurb}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Project Popup */}
          <Dialog open={Boolean(active)} onClose={() => setActive(null)} maxWidth="md" fullWidth>
            {active && (
              <>
                <DialogTitle sx={{ pb: 1 }}>{active.title}</DialogTitle>
                <DialogContent dividers sx={{ pt: 2 }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr" },
                      gap: 3,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, color: "text.secondary" }}>
                        Overview
                      </Typography>
                      <Typography variant="body1" sx={{whiteSpace: "pre-line"}}>{active.details}</Typography>
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, color: "text.secondary" }}>
                        Resources
                      </Typography>
                      <List dense sx={{ "& a": { textDecoration: "none" } }}>
                        {active.docs.map((d) => (
                          <ListItem
                            key={d.href}
                            component={Link}
                            href={d.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ListItemIcon sx={{ minWidth: 34 }}>
                              <DescriptionOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={d.label} />
                          </ListItem>
                        ))}
                        <Divider sx={{ my: 1.5 }} />
                        <ListItem
                          component={Link}
                          href={active.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ListItemIcon sx={{ minWidth: 34 }}>
                            <GitHubIcon />
                          </ListItemIcon>
                          <ListItemText primary="View on GitHub" />
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button sx={{ bgcolor: 'white', color: 'black', fontWeight: 'bold'}} onClick={() => setActive(null)} variant="contained">
                    Close
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </Container>
      </Box>

      {/* ===== Ongoing Projects & Future Work ===== */}
      <Box
        sx={{
          bgcolor: "grey.100",
          color: "black",
          height: `calc((100vh - ${HEADER_H}px - ${FOOTER_H}px) * 0.4)`, 
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            py: 2.5,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <Typography gutterBottom sx={{ flex: "0 0 auto", fontSize: '24px'  }}>
            Ongoing Projects & Future Work
          </Typography>

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              pr: 1,
            }}
          >
            <List dense disablePadding>
              {ongoing.map((o) => (
                <ListItem key={o.id} disableGutters sx={{ mb: 0.75 }}>
                  <ListItemButton onClick={() => setActiveOngoing(o)} sx={{ borderRadius: 1 }}>
                    <ListItemText
                      primary={<Typography variant="subtitle1">{o.title}</Typography>}
                      secondary={<Typography variant="body2" color="text.secondary">{o.blurb}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Ongoing Popup */}
          <Dialog open={Boolean(activeOngoing)} onClose={() => setActiveOngoing(null)} maxWidth="md" fullWidth>
            {activeOngoing && (
              <>
                <DialogTitle sx={{ pb: 1 }}>{activeOngoing.title}</DialogTitle>
                <DialogContent dividers sx={{ pt: 2 }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr" },
                      gap: 3,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, color: "text.secondary" }}>
                        Details
                      </Typography>
                      <Typography variant="body1">{activeOngoing.details}</Typography>
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, color: "text.secondary" }}>
                        Resources
                      </Typography>
                      <List dense sx={{ "& a": { textDecoration: "none" } }}>
                        {(activeOngoing.docs ?? []).map((d) => (
                          <ListItem
                            key={d.href}
                            component={Link}
                            href={d.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ListItemIcon sx={{ minWidth: 34 }}>
                              <DescriptionOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={d.label} />
                          </ListItem>
                        ))}
                        {activeOngoing.github && (
                          <>
                            <Divider sx={{ my: 1.5 }} />
                            <ListItem
                              component={Link}
                              href={activeOngoing.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ListItemIcon sx={{ minWidth: 34 }}>
                                <GitHubIcon />
                              </ListItemIcon>
                              <ListItemText primary="View on GitHub" />
                            </ListItem>
                          </>
                        )}
                      </List>
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button sx={{ bgcolor: 'white', color: 'black', fontWeight: 'bold'}} onClick={() => setActiveOngoing(null)} variant="contained">
                    Close
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </Container>
      </Box>

      <Box
        sx={{
          height: `${FOOTER_H}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "grey.900",
          color: "white",
          borderTop: "1px solid #222",
          px: 2,
          flex: "0 0 auto",
        }}
      >
        <Typography variant="body2" noWrap>
          📧{" "}
          <Link
            href="mailto:harsiratgrewal.hg@gmail.com"
            color="inherit"
            underline="hover"
          >
            harsiratgrewal.hg@gmail.com
          </Link>{" "}
          &nbsp;|&nbsp; © {new Date().getFullYear()} Harsirat Grewal
        </Typography>
      </Box>
    </Box>
  )
}
