import { Box, Container, Typography, Grid, Paper } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const education = [
  {
    school: 'Langara College',
    degree: 'Post-Graduation Diploma',
    field: 'Web and Mobile App Development',
    startDate: '2023',
    endDate: 'April 2024',
    location: 'Vancouver, British Columbia',
    gpa: '3.28/4.33',
    achievements: [
      'Completed comprehensive training in web and mobile application development',
      'Developed practical skills in modern development frameworks and methodologies',
    ],
  },
  {
    school: 'Punjab Technical University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    startDate: '2017',
    endDate: 'June 2021',
    location: 'Punjab, India',
    gpa: '8.48/10',
    achievements: [
      'Specialized in computer science and engineering fundamentals',
      'Developed strong foundation in programming, algorithms, and software development',
    ],
  },
];

const Education = () => {
  return (
    <Box
      id="education"
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
            Education
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={edu.school}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {edu.degree} - {edu.field}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {edu.startDate} - {edu.endDate} | {edu.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    GPA: {edu.gpa}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {edu.achievements.map((achievement, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {achievement}
                      </Typography>
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

export default Education; 