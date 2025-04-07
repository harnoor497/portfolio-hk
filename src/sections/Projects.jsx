import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SecureShare',
    description:
      'A secure web application for file sharing with MFA, RBAC, and encrypted file uploads.',
    tags: ['React', 'Redux', 'Python', 'Django', 'SQLite', 'Docker'],
    github: 'https://github.com/harnoor497/secure-file-share-frontend',
    demo: '#',
    image: '/images/projects/secure-share.jpg',
  },
  {
    title: 'WellQuest',
    description:
      'A native mobile app for gym trainers to track client progress with OpenAI and Google Vision APIs.',
    tags: ['React Native', 'Expo', 'MongoDB', 'AWS EC2', 'OpenAI'],
    github: 'https://github.com/bhardwajaman1998/wellquest-backend',
    demo: '#',
    image: '/images/projects/wellquest.jpg',
  },
  {
    title: 'PawGuard',
    description:
      'A web application for pet insurance management with custom React components.',
    tags: ['React', 'Express', 'MongoDB', 'Node.js', 'Microsoft IIS'],
    github: 'https://github.com/azim763/pawguard',
    demo: 'https://langara-my.sharepoint.com/:v:/r/personal/hcheng40_mylangara_ca/Documents/Project2-WMDD4980/Week%2011%20(Nov%2018)/PetGuard-AlphaReport.mp4?csf=1&web=1&e=hMr4Rn&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D',
    image: '/images/projects/pawguard.jpg',
  },
  {
    title: 'SmartPack',
    description:
      'A Progressive Web Application for efficient task and activity planning.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/harnoor497/IntegratedProject',
    demo: '#',
    image: '/images/projects/smartpack.jpg',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      component="section"
      className="section"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
            width: '100%',
            mt: 4,
            '& > *': {
              width: '100%',
              maxWidth: '100%',
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease-in-out',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    backgroundColor: 'background.default',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::before': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    p: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      fontSize: '1.25rem',
                      mb: 0.5,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mt: 'auto',
                    }}
                  >
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'background.default',
                          color: 'text.primary',
                          fontSize: '0.75rem',
                          height: '24px',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'background.default',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions 
                  sx={{ 
                    justifyContent: 'flex-end', 
                    p: 2,
                    pt: 0,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <IconButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 