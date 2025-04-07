import { Box, Container, Typography, Grid, Paper } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const experience = [
  {
    company: 'Walmart',
    position: 'Omni Customer Fulfilment Associate',
    startDate: 'May 2023',
    endDate: 'Present',
    location: 'Vancouver, British Columbia',
    responsibilities: [
      'Utilized Zebra TC5X Series mobile computers for efficient order picking, smart staging, dispensing, and inventory management',
      'Assisted customers with technical issues for online orders and provided in-person support, enhancing customer satisfaction and loyalty',
      'Participated in continuous improvement initiatives, suggesting operational procedure enhancements and optimizing productivity',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    position: 'System Engineer',
    startDate: 'July 2021',
    endDate: 'November 2022',
    location: 'India',
    responsibilities: [
      'Led the technical upgrade of a UK-based financial bank application, improving performance by 30% using Spring Boot batch automation and reducing post-release bugs by 25%',
      'Provided Level 2 technical support, reducing user-reported issues by 20% and ensuring 98% system uptime through effective Dynatrace monitoring, including creating dashboards for real-time performance insights, and ServiceNow incident management',
      'Enhanced application compatibility for Windows 10, expanding the user base by 40% and improving overall user satisfaction',
      'Collaborated with cross-functional teams to resolve critical issues, ensuring regulatory compliance and operational success',
      'Mentored junior engineers, promoting best practices in software development and system security to ensure quality and reliability',
    ],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
            Experience
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {experience.map((exp, index) => (
            <Grid item xs={12} key={`${exp.company}-${exp.position}`}>
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
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {exp.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.startDate} - {exp.endDate} | {exp.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {exp.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {exp.responsibilities.map((responsibility, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {responsibility}
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

export default Experience; 