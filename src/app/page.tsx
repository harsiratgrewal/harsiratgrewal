"use client"
import { JSX, useState } from "react"
import {
  AppBar, Toolbar, Avatar, Typography, Box, Container, Card,
  Tooltip, IconButton, Dialog, DialogTitle, DialogContent,
  DialogActions, Divider, List, ListItem, ListItemIcon, ListItemText,
  Button, CardMedia, CardActionArea, Link, ListItemButton, Chip, Stack
} from "@mui/material"
import ArticleIcon from "@mui/icons-material/Article"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded"
import WebIcon from "@mui/icons-material/Web"
import ApiIcon from "@mui/icons-material/Api"
import CloudQueueIcon from "@mui/icons-material/CloudQueue"
import SecurityIcon from "@mui/icons-material/Security"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import ExtensionIcon from "@mui/icons-material/Extension"
import VerifiedIcon from "@mui/icons-material/Verified"
import { Robot } from "./components/Robot"

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
        "• Built a two-stage pipeline using K-Means & Random Forest to forecast wildfire risk from ~100k hourly weather records.\n" +
        "• Labeled fire risk into 5 tiers using K-Means on temperature, humidity, wind, speed, and pressure.\n" +
        "• Trained a random forest with 70/30 split on training and testing.\n" +
        "• Achieved ~100% across all evaluation metrics (accuracy, precision, recall, and F1) and validated via cross-validation and confusion matrix analysis.\n" +
        "• Verified clustering quality with a Silhouette Score and 2D Projections.",
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
        "• Implemented Eigenfaces and Naive Bayes face-recognition pipeline using scikit-learn, with z-score normalization and Gaussian classification.\n" +
        "• Engineered a clean PCA workflow: mean-face centering, eigen decomposition, top-k eigenfaces, and projection to a compact feature space.\n" +
        "• Performed 10-fold cross validation, tuning the number of components and adding z-score raised accuracy from 27% to 88%.\n" +
        "• Visualized reports using confusion-matrix heatmaps and classification reports (precision/recall/F1).",
      image: "/projects/Eigenfaces/eigenfaces.png",
      docs: [
        { label: "Project Report", href: "/projects/Eigenfaces/Report.pdf" },
        { label: "Implementation Run", href: "/projects/Eigenfaces/eigenface.pdf" },
        { label: "Test Run", href: "/projects/Eigenfaces/test.pdf" },
      ],
      github: "https://github.com/harsiratgrewal/Face-Recognition-Using-Eigenface-with-Naive-Bayes",
    },
    {
      id: "fooducate",
      title: "Fooducate (Capstone Project)",
      blurb:
        "Built a React/Node nutrition app with Firebase real-time data and an OpenAI-powered chatbot for instant diet tracking and guidance.",
      details:
        "• Developed a food nutrition application using React and Node.js, helping users in tracking and managing dietary intake.\n" +
        "• Integrated Firebase for real-time database management, ensuring efficient data storage and synchronization.\n" +
        "• Implemented an AI-powered chatbot using OpenAI, providing users with instant responses to nutrition-related queries.",
      image: "/projects/Fooducate/fooducate.png",
      docs: [
        { label: "Presentation", href: "/projects/Fooducate/Presentation.pdf" },
        { label: "Flyer", href: "/projects/Fooducate/Fooducate_Flyer.pdf" }
      ],
      github: "https://github.com/harsiratgrewal/Fooducate",
    },
    {
      id: "cyber-attacks-on-llm",
      title: "Cyber Attacks on LLM (Research Survey)",
      blurb:
        "Researched LLM security: uncovered model inversion risks, forecasted a 25% rise in prompt-injection attacks, and outlined gaps in current defenses with universal mitigation proposals.",
      details:
        "• Conducted comprehensive research on model inversion attacks on LLM, identifying potential vulnerabilities.\n" +
        "• Performed predictive analysis on evolving threats, identifying a 25% rise in prompt injection attacks.\n" +
        "• Highlighted the limitations of current mitigation strategies and proposed universally applicable solutions.",
      image: "/projects/CyberAttacks/cyber.png",
      docs: [
        { label: "Project Report", href: "/projects/CyberAttacks/Cyber_FinalReport.pdf" },
      ],
      github: "",
    }
  ]

  const [active, setActive] = useState<Project | null>(null)

  type Research = {
    id: string
    title: string
    blurb: string
    details: string
    docs?: { label: string; href: string }[]
    github?: string
  }

  const research: Research[] = [
    // {
    //   id: "example",
    //   title: "Upcoming AI Research",
    //   blurb: "",
    //   details: "Independent Research",
    //   docs: [{ label: "", href: "" }],
    //   github: "",
    // },
  ]

  const [activeResearch, setActiveResearch] = useState<Research | null>(null)

  type Experience = {
    company: string
    role: string
    period: string
    bullets: string[]
    link?: string
    logo?: string
    location?: string
  }

  const experience: Experience[] = [
    {
      company: "DCS Corporation",
      role: "Software Developer",
      location: "St. Inigoes, Maryland",
      period: "September 2024 – August 2025",
      logo: "/dcs.png",
      link: "https://www.dcscorp.com",
      bullets: [
        "Analyzed ~100k lines across the legacy C#/.NET system; prioritized and upgraded deprecated libraries; re-implemented core flows with cleaner interfaces, reducing build time from 10 minutes to 2 minutes and eliminating all critical deprecation warnings",
        "Migrated AngularJS views to SSR/SSG pages on Next.js behind IIS; introduced Material UI and code-splitting, decreasing redundancy in UI code by 30%",
        "Secured an initially unauthenticated application by introducing a reverse proxy and Okta OIDC/OAuth2 with short-lived tokens and refresh flow, resolving 12/12 STIG findings",
        "Rebuilt key Oracle procedures using REST endpoints and SOAP adapters, reducing integration defects by 55%",
        "Implemented GitLab CI/CD pipelines (builds, tests, deployments), reducing release time by 20%",
      ],
    },
    {
      company: "AlixPartners",
      role: "IT Intern (Full-Time Internship)",
      location: "Southfield, Michigan",
      period: "September 2022 – August 2023",
      logo: "/alix.png", 
      link: "https://www.alixpartners.com",
      bullets: [
        "Automated Active Directory role assignments, streamlined VMware provisioning, and enhanced MFT workflows, minimizing setup time by 25%",
        "Built a PowerShell script for auto-assigning ServiceNow tickets, decreasing triage time and improving average resolution time by 10%",
        "Developed an AWS Lambda function for real-time monitoring and auto-recovery, reducing AWS downtime response to under 1 minute",
      ],
    },
  ]

  type Education = {
    school: string
    degree: string
    period: string
    location?: string
    gpa?: string
    coursework?: string[]
    bullets?: string[]
    logo?: string
    link?: string
  }

  const education: Education[] = [
    {
      school: "Johns Hopkins University",
      degree: "M.S. in Artificial Intelligence",
      period: "2024 – Present",
      location: "Baltimore, Maryland",
      logo: "/jhu.png",
      link: "https://ep.jhu.edu/programs/artificial-intelligence/courses/",
      coursework: [
        "Machine Learning",
        "K-Means Clustering", 
        "Random Forest Classification", 
        "Naive Bayes", 
        "Computer Vision"
      ],
      bullets: [
        "Research focus: Yet to be determined.",
      ],
      gpa: "4.0"
    },
     {
      school: "Oakland University",
      degree: "B.S. in Computer Science",
      period: "2024 – Present",
      location: "Rochester, Michigan",
      logo: "/oakland.png",
      link: "https://catalog.oakland.edu/preview_program.php?catoid=68&poid=14697",
      coursework: [
        "Design and Analysis of Alogrithm",
        "Information Security Practices",
        "Parallel and Distributed Computing",
        "Theory of Computation",
        "Operating Systems"
      ],
      bullets: [
        "Activities and societies: Mathematics Student Society, Robotics Association, Data Science & Decision Society",
        "Deans List: Summer 2023, Fall 2023",
        "Presidents List: Summer 2024",
        "Departmental Honors"
      ],
      gpa: "3.5"
    },
  ]

  type SkillGroup = {
    title: string
    icon: JSX.Element
    items: string[]
  }

  const skillGroups: SkillGroup[] = [
    {
      title: "Programming Languages",
      icon: <CodeRoundedIcon />,
      items: ["Python", "JavaScript/TypeScript", "C#", "Java"],
    },
    {
      title: "Frontend Development",
      icon: <WebIcon />,
      items: [
        "React",
        "Next.js (SSR/SSG)",
        "Material UI",
        "HTML5",
        "CSS3",
        "Jest (unit testing)",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <ApiIcon />,
      items: [
        "Node.js",
        "Express",
        ".NET",
        "Flask",
        "RESTful APIs",
        "SOAP",
        "Oracle",
        "SQL (RDBMS design & optimization)",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <CloudQueueIcon />,
      items: ["AWS (Lambda)", "Microsoft Azure", "Docker", "Linux", "IIS", "Hyper-V", "VMware"],
    },
    {
      title: "Identity & Security",
      icon: <SecurityIcon />,
      items: ["Okta", "OAuth2/OIDC", "Reverse Proxying", "STIG remediation"],
    },
    {
      title: "DevOps & CI/CD",
      icon: <BuildCircleIcon />,
      items: ["Git", "GitLab (Pipelines, MR templates, caching)", "Jenkins", "Vercel"],
    },
    {
      title: "Tools & Platforms",
      icon: <ExtensionIcon />,
      items: ["Jupyter Notebook", "Visual Studio", "VS Code", "ServiceNow"],
    },
    {
      title: "Certification",
      icon: <VerifiedIcon />,
      items: ["JIRA Software Essentials"],
    },
  ]

  const HEADER_H = 72
  const FOOTER_H = 56
  const LEFT_W = 240

  type Section = "Projects" | "Experience" | "Education" | "Skills" | "Research"
  const [section, setSection] = useState<Section>("Projects")

  const initials = (name: string) =>
    name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)

  const symbolFor = (skill: string) => {
    const s = skill.toLowerCase()
    if (s.includes("python")) return "🐍"
    if (s.includes("javascript") || s.includes("typescript")) return "⚡"
    if (s === "c#" || s.includes(".net")) return "#️⃣"
    if (s.includes("java")) return "☕"
    if (s.includes("react")) return "⚛️"
    if (s.includes("next.js")) return "⏭️"
    if (s.includes("material ui")) return "🎨"
    if (s.includes("html")) return "🔶"
    if (s.includes("css")) return "🎨"
    if (s.includes("jest")) return "🧪"
    if (s.includes("node")) return "🟢"
    if (s.includes("express")) return "🚂"
    if (s.includes("flask")) return "🧪"
    if (s.includes("rest")) return "🔗"
    if (s.includes("soap")) return "🧼"
    if (s.includes("oracle")) return "🧱"
    if (s.includes("sql")) return "🗄️"
    if (s.includes("aws")) return "☁️"
    if (s.includes("azure")) return "☁️"
    if (s.includes("docker")) return "🐳"
    if (s.includes("linux")) return "🐧"
    if (s.includes("iis")) return "🧱"
    if (s.includes("hyper-v")) return "💠"
    if (s.includes("vmware")) return "🧿"
    if (s.includes("okta")) return "🔐"
    if (s.includes("oauth")) return "🔑"
    if (s.includes("reverse proxy")) return "↩️"
    if (s.includes("stig")) return "🛡️"
    if (s.includes("gitlab")) return "🦊"
    if (s.includes("git")) return "🔧"
    if (s.includes("jenkins")) return "🧑‍🔧"
    if (s.includes("vercel")) return "▲"
    if (s.includes("jupyter")) return "📓"
    if (s.includes("visual studio") && !s.includes("code")) return "💜"
    if (s.includes("vs code")) return "🧩"
    if (s.includes("servicenow")) return "🛎️"
    if (s.includes("jira")) return "🎓"
    return "•"
  }

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
            <Typography sx={{ lineHeight: 1, fontSize: '24px', fontWeight: 'bold' }}>
              Harsirat (Harry) Grewal
            </Typography>
            <Typography sx={{ fontSize: '12px', ml: 2}}>💻 Full Stack Developer</Typography>
            <Typography sx={{ fontSize: '12px', ml: 1.5}}>🎓 Graduate Student </Typography>
            <Typography sx={{ fontSize: '12px', ml: 1.5}}>🤖 AI Researcher</Typography>
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

      <Box
        sx={{
          height: `calc(100vh - ${HEADER_H}px - ${FOOTER_H}px)`,
          display: "flex",
          bgcolor: "white",
          color: "black",
        }}
      >
        <Box
          sx={{
            width: { xs: LEFT_W - 40, sm: LEFT_W },
            borderRight: "1px solid #e5e5e5",
            bgcolor: "grey.50",
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr" },
              gap: 1,
              position: "sticky",
              top: 0,
            }}
          >
            {(["Projects", "Experience", "Education", "Skills", "Research"] as Section[]).map((s) => (
              <ListItemButton
                key={s}
                selected={section === s}
                onClick={() => setSection(s)}
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: section === s ? "grey.800" : "grey.300",
                  bgcolor: section === s ? "grey.200" : "white",
                  "&.Mui-selected:hover": { bgcolor: "grey.200" },
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <ListItemText
                  primary={<Typography sx={{ fontWeight: 700, fontSize: 14 }}>{s}</Typography>}
                />
              </ListItemButton>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
          {section === "Projects" && (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              <Container
                sx={{
                  py: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                }}
              >
                <Typography gutterBottom sx={{ flex: "0 0 auto", fontSize: "24px", fontWeight: "bold" }}>
                  Projects
                </Typography>

                <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto", pr: 1 }}>
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
                                fontSize: "12px",
                              }}
                            />

                            <Box sx={{ p: 2, flex: 1 }}>
                              <Typography sx={{ mb: 0.5, fontSize: "12px", fontWeight: "bold" }}>
                                {p.title}
                              </Typography>
                              <Typography color="text.secondary" sx={{ fontSize: "10px" }}>
                                {p.blurb}
                              </Typography>
                            </Box>
                          </Box>
                        </CardActionArea>
                      </Card>
                    ))}
                  </Box>
                </Box>

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
                            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                              {active.details}
                            </Typography>
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
                              <ListItem component={Link} href={active.github} target="_blank" rel="noreferrer">
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
                        <Button
                          sx={{ bgcolor: "white", color: "black", fontWeight: "bold" }}
                          onClick={() => setActive(null)}
                          variant="contained"
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </>
                  )}
                </Dialog>
              </Container>
            </Box>
          )}

          {section === "Experience" && (
            <Container>
              <Typography gutterBottom sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Experience
              </Typography>
              {experience.length === 0 ? (
                <Typography color="text.secondary">
                  Nothing to show here.
                </Typography>
              ) : (
                <List sx={{ pl: 1 }}>
                  {experience.map((e, idx) => (
                    <ListItem
                      key={idx}
                      alignItems="flex-start"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "48px 1fr", sm: "56px 1fr" },
                        columnGap: 2,
                        mb: 2.5,
                      }}
                    >
                      <Box>
                        <Avatar
                          variant="rounded"
                          src={e.logo}
                          alt={`${e.company} logo`}
                          sx={{ width: 48, height: 48, mt: 0.5, bgcolor: "grey.200", color: "grey.800", fontWeight: 700 }}
                        >
                          {initials(e.company)}
                        </Avatar>
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                          {e.role} • {e.company}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 1}}>
                          {e.period}{e.location ? ` • ${e.location}` : ""}
                        </Typography>
                        <List sx={{ listStyle: "disc", pl: 3, "& .MuiListItem-root": { display: "list-item", p: 0 } }}>
                          {e.bullets.map((b, i) => (
                            <ListItem key={i}>
                              <Typography sx={{ mb: 1, fontSize: "12px"}}>
                                {b}{`.`}
                              </Typography>           
                            </ListItem>
                          ))}
                        </List>
                        {e.link && (
                          <Typography sx={{ mt: 0.5, fontSize: "10px" }}>
                            <Link href={e.link} target="_blank" rel="noreferrer">
                              Company Website
                            </Link>
                          </Typography>
                        )}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              )}
            </Container>
          )}

          {section === "Education" && (
            <Container>
              <Typography gutterBottom sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Education
              </Typography>
              {education.length === 0 ? (
                <Typography color="text.secondary">
                  Nothing to see here.
                </Typography>
              ) : (
                <List sx={{ pl: 1 }}>
                  {education.map((ed, idx) => (
                    <ListItem
                      key={idx}
                      alignItems="flex-start"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "48px 1fr", sm: "56px 1fr" },
                        columnGap: 2,
                        mb: 2.5,
                      }}
                    >
                      <Box>
                        <Avatar
                          variant="rounded"
                          src={ed.logo}
                          alt={`${ed.school} logo`}
                          sx={{ width: 48, height: 48, mt: 0.5, bgcolor: "grey.200", color: "grey.800", fontWeight: 700 }}
                        >
                          {initials(ed.school)}
                        </Avatar>
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                          {ed.degree} • {ed.school}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {ed.period}{ed.location ? ` • ${ed.location}` : ""}
                        </Typography>

                        {ed.bullets && ed.bullets.length > 0 && (
                          <List sx={{ listStyle: "disc", pl: 3, "& .MuiListItem-root": { display: "list-item", p: 0 } }}>
                            {ed.bullets.map((b, i) => (
                              <ListItem key={i}>
                                 <Typography sx={{ mb: 1, fontSize: "12px"}}>
                                  {b}
                                </Typography>   
                              </ListItem>
                            ))}
                          </List>
                        )}

                        {(ed.coursework?.length || ed.gpa) && (
                          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
                            {ed.coursework?.map((c) => (
                              <Chip key={c} size="small" label={c} />
                            ))}
                            {ed.gpa && <Chip size="small" variant="outlined" label={`GPA: ${ed.gpa}`} />}
                          </Stack>
                        )}

                        {ed.link && (
                          <Typography sx={{ mt: 1, fontSize: "10px" }}>
                            <Link href={ed.link} target="_blank" rel="noreferrer">
                              Program page
                            </Link>
                          </Typography>
                        )}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              )}
            </Container>
          )}

          {section === "Skills" && (
            <Container>
              <Typography gutterBottom sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Skills
              </Typography>

              {skillGroups.length === 0 ? (
                <Typography color="text.secondary">
                  Nothing to see here yet!
                </Typography>
              ) : (
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
                  {skillGroups.map((group) => (
                    <Card key={group.title} variant="outlined" sx={{ p: 2 }}>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        {group.icon}
                        <Typography sx={{ fontWeight: 700 }}>{group.title}</Typography>
                      </Stack>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {group.items.map((item) => (
                          <Chip
                            key={item}
                            size="small"
                            variant="outlined"
                            label={item}
                            avatar={
                              <Avatar sx={{ bgcolor: "transparent", width: 20, height: 20, fontSize: 14 }}>
                                {symbolFor(item)}
                              </Avatar>
                            }
                            sx={{ fontWeight: 600 }}
                          />
                        ))}
                      </Box>
                    </Card>
                  ))}
                </Box>
              )}
            </Container>
          )}

          {section === "Research" && (
            <Container>
              <Typography gutterBottom sx={{ fontSize: "24px", fontWeight: "bold" }}>
                Research
              </Typography>

              {research.length === 0 ? (
                <Typography color="text.secondary">Nothing to see here yet!</Typography>
              ) : (
                <List dense disablePadding>
                  {research.map((o) => (
                    <ListItem key={o.id} disableGutters sx={{ mb: 0.75 }}>
                      <ListItemButton onClick={() => setActiveResearch(o)} sx={{ borderRadius: 1 }}>
                        <ListItemText
                          primary={<Typography variant="subtitle1">{o.title}</Typography>}
                          secondary={<Typography variant="body2" color="text.secondary">{o.blurb}</Typography>}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}

              <Dialog open={Boolean(activeResearch)} onClose={() => setActiveResearch(null)} maxWidth="md" fullWidth>
                {activeResearch && (
                  <>
                    <DialogTitle sx={{ pb: 1 }}>{activeResearch.title}</DialogTitle>
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
                          <Typography variant="body1">{activeResearch.details}</Typography>
                        </Box>

                        <Box>
                          <Typography variant="subtitle1" sx={{ mb: 1.5, color: "text.secondary" }}>
                            Resources
                          </Typography>
                          <List dense sx={{ "& a": { textDecoration: "none" } }}>
                            {(activeResearch.docs ?? []).map((d) => (
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
                            {activeResearch.github && (
                              <>
                                <Divider sx={{ my: 1.5 }} />
                                <ListItem
                                  component={Link}
                                  href={activeResearch.github}
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
                      <Button
                        sx={{ bgcolor: "white", color: "black", fontWeight: "bold" }}
                        onClick={() => setActiveResearch(null)}
                        variant="contained"
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </>
                )}
              </Dialog>
            </Container>
          )}
        </Box>
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
