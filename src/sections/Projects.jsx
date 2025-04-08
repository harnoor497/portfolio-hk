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
  useTheme,
  Tooltip,
  SvgIcon,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Homies',
    description:
      'A platform connecting international students looking to rent rooms or find roommates in new cities. Features secure user authentication, room listings, and roommate matching.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI', 'JWT'],
    // github: 'https://github.com/harnoorkaur/homies',
    demo: 'https://www.figma.com/design/tbMe3nAFlyck6hJEB9BDqu/Homies-Prototype?node-id=0-1&p=f&t=BkJpi5xtKzi0HvOq-0',
    figma: 'https://www.figma.com/design/tbMe3nAFlyck6hJEB9BDqu/Homies-Prototype?node-id=0-1&p=f&t=BkJpi5xtKzi0HvOq-0',
    image: '/images/projects/homies.jpg',
  },
  {
    title: 'WellQuest',
    description:
      'A native mobile app for gym trainers to track client progress with OpenAI and Google Vision APIs.',
    tags: ['React Native', 'Expo', 'MongoDB', 'AWS EC2', 'OpenAI'],
    github: 'https://github.com/bhardwajaman1998/wellquest-backend',
    demo: 'https://www.figma.com/design/aPyRqv8ybxoZzyHss3OvUJ/Wireframes-and-mockups?node-id=2312-9&p=f&t=0jBEZ7OKNx68pYdg-0',
    figma: 'https://www.figma.com/design/aPyRqv8ybxoZzyHss3OvUJ/Wireframes-and-mockups?node-id=2312-9&p=f&t=0jBEZ7OKNx68pYdg-0',
    image: '/images/projects/wellquest.jpg',
  },
  {
    title: 'PawGuard',
    description:
      'A web application for pet insurance management with custom React components.',
    tags: ['React', 'Express', 'MongoDB', 'Node.js', 'Microsoft IIS'],
    github: 'https://github.com/azim763/pawguard',
    demo: 'https://langara-my.sharepoint.com/:v:/r/personal/hcheng40_mylangara_ca/Documents/Project2-WMDD4980/Week%2011%20(Nov%2018)/PetGuard-AlphaReport.mp4?csf=1&web=1&e=hMr4Rn&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D',
    figma: 'https://www.figma.com/design/51QYXFMqxywWD1HZYxZI9H/Pawguard-Wireframes?node-id=1342-13149&p=f&t=9ehtAXYvoj91ITV0-0', 
    image: '/images/projects/pawguard.jpg',
  },
  {
    title: 'SmartPack',
    description:
      'A Progressive Web Application for efficient task and activity planning.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/harnoor497/IntegratedProject',
    demo: 'https://www.figma.com/design/EuVzZ7jaBNGDA85ltOXHlO/Project-1?node-id=339-25687&p=f&t=5D3gxyWG3GsPCWux-0',
    figma: 'https://www.figma.com/design/EuVzZ7jaBNGDA85ltOXHlO/Project-1?node-id=339-25687&p=f&t=5D3gxyWG3GsPCWux-0',
    image: '/images/projects/smartpack.jpg',
  },
];

// Define Figma icon as a custom component
const FigmaIcon = () => (
  <SvgIcon>
    <path d="M8,24 C10.208,24 12,22.208 12,20 C12,17.792 10.208,16 8,16 C5.792,16 4,17.792 4,20 C4,22.208 5.792,24 8,24 Z" />
    <path d="M8,16 C10.208,16 12,14.208 12,12 C12,9.792 10.208,8 8,8 C5.792,8 4,9.792 4,12 C4,14.208 5.792,16 8,16 Z" />
    <path d="M16,8 C13.792,8 12,9.792 12,12 C12,14.208 13.792,16 16,16 C18.208,16 20,14.208 20,12 C20,9.792 18.208,8 16,8 Z" />
    <path d="M8,8 C10.208,8 12,6.208 12,4 C12,1.792 10.208,0 8,0 C5.792,0 4,1.792 4,4 C4,6.208 5.792,8 8,8 Z" />
    <path d="M16,0 C13.792,0 12,1.792 12,4 C12,6.208 13.792,8 16,8 C18.208,8 20,6.208 20,4 C20,1.792 18.208,0 16,0 Z" />
  </SvgIcon>
);

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      component="section"
      className="section"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 8 },
        mt: { xs: 3, md: 4 },
        backgroundColor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: isDark 
            ? 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.3) 50%, rgba(59,130,246,0) 100%)'
            : 'linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.5) 50%, rgba(37,99,235,0) 100%)',
        }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 6 },
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.25rem', md: '2.75rem' },
                fontWeight: 700,
                color: 'primary.main',
                mb: 2,
                position: 'relative',
                display: 'inline-block',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '15%',
                  width: '70%',
                  height: '2px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.5) 50%, rgba(59,130,246,0) 100%)'
                    : 'linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.5) 50%, rgba(37,99,235,0) 100%)',
                },
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                mt: 3,
                fontSize: '1.15rem',
                lineHeight: 1.6,
                fontWeight: isDark ? 400 : 500,
              }}
            >
              Here are some of my notable projects that showcase my skills and experience.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: { xs: 4, md: 5 },
            width: '100%',
            mt: 4,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  boxShadow: isDark 
                    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDark
                      ? '0 12px 30px rgba(0, 0, 0, 0.4)'
                      : '0 12px 30px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '220px',
                    margin: '16px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
                
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ 
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: '1.3rem',
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.15rem',
                      lineHeight: 1.6,
                      mb: 2,
                      fontWeight: isDark ? 400 : 500,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1.5,
                      mt: 'auto',
                    }}
                  >
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.1)',
                          color: 'primary.main',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(59,130,246,0.3)' : 'rgba(37,99,235,0.3)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            backgroundColor: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(37,99,235,0.2)',
                            transform: 'translateY(-2px)',
                            boxShadow: isDark
                              ? '0 4px 8px rgba(0,0,0,0.3)'
                              : '0 4px 8px rgba(0,0,0,0.1)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions 
                  sx={{ 
                    justifyContent: 'flex-end', 
                    p: 2.5,
                    pt: 0,
                    borderTop: '1px solid',
                    borderColor: isDark ? 'rgba(59,130,246,0.2)' : 'rgba(37,99,235,0.2)',
                    gap: 1,
                  }}
                >
                  <Tooltip title="View on GitHub">
                    <IconButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.5rem',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <GitHubIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View Figma Design">
                    <IconButton
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.5rem',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <FigmaIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View Live Demo">
                    <IconButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.5rem',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <LaunchIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
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