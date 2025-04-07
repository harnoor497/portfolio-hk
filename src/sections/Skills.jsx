import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'C++', 'CSS'],
  },
  {
    title: 'Technologies',
    skills: [
      'React',
      'Node.js',
      'Express.js',
      'Next.js',
      'Spring Boot',
      'AWS (EC2, S3)',
      'GCP',
      'Azure',
      'Windows',
      'Unix',
      'Linux',
      'Mainframe',
      'AIX',
    ],
  },
  {
    title: 'Testing Frameworks',
    skills: ['Jest', 'Mocha'],
  },
  {
    title: 'Concepts',
    skills: [
      'System Monitoring',
      'Incident Documentation',
      'Microservices',
      'Service-Oriented Architecture (SOA)',
      'Module Federation',
      'API Development',
      'Performance Optimization',
      'Cloud Solutions',
      'Agile Methodology',
      'Usability',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Webpack',
      'NPM',
      'Yarn',
      'PNPM',
      'MongoDB',
      'Git',
      'Jenkins',
      'ServiceNow',
      'Splunk',
      'Dynatrace',
      'Grafana',
      'Prometheus',
      'Postman',
      'Adobe',
      'OpenAI',
      'Figma',
      'Zebra TC5X Series Mobile Computers',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Work Ethic',
      'Ownership',
      'Teamwork',
      'Communication',
      'Flexibility/Adaptability',
      'Creativity',
      'Problem Solving',
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
              mb: 8, 
              fontWeight: 700,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Skills
          </Typography>
        </motion.div>

        <Grid 
          container 
          spacing={2.5}
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 2.5,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '8px',
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1.5,
                      fontSize: '1.125rem',
                      color: 'primary.main',
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      flex: 1,
                    }}
                  >
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          backgroundColor: 'background.default',
                          color: 'text.primary',
                          fontSize: '0.8125rem',
                          height: '26px',
                          borderRadius: '13px',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'background.default',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 