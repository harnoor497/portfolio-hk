import { Box, Container, Typography, useTheme } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const educationData = [
  {
    period: "2023 - 2024",
    title: "Post-Graduation Diploma",
    institution: "Langara College",
    location: "Vancouver",
    description: "Web and Mobile App Development",
    gpa: "GPA: 3.28/4.33"
  },
  {
    period: "2017 - 2021",
    title: "Bachelor of Technology",
    institution: "Punjab Technical University",
    location: "Punjab, India",
    description: "Computer Science & Engineering",
    gpa: "GPA: 8.48/10"
  }
];

const experienceData = [
  {
    period: "May 2023 - Present",
    title: "Omni Customer Fulfilment Associate",
    company: "Walmart",
    location: "Vancouver, British Columbia",
    achievements: [
      "Managed order fulfillment using Zebra TC5X technology",
      "Provided technical support for online orders",
      "Improved operational procedures and productivity"
    ]
  },
  {
    period: "July 2021 - November 2022",
    title: "System Engineer",
    company: "Tata Consultancy Services",
    location: "India",
    achievements: [
      "Led financial app upgrade: 30% better performance, 25% fewer bugs",
      "Maintained 98% system uptime with Dynatrace monitoring",
      "Enhanced Windows 10 compatibility, expanding user base by 40%",
      "Led cross-functional teams for regulatory compliance",
      "Mentored junior engineers in best practices"
    ]
  }
];

const Education = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="education-experience"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: isDark
          ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
          : 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1px',
              height: '90%',
              background: isDark
                ? 'linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.3) 50%, rgba(59,130,246,0) 100%)'
                : 'linear-gradient(180deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.3) 50%, rgba(37,99,235,0) 100%)',
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {/* Education Column */}
          <Box
            sx={{
              flex: 1,
              pr: { md: 4 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'primary.main',
                mb: 5,
                fontWeight: 600,
                textAlign: 'left',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '80px',
                  height: '3px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'linear-gradient(90deg, rgba(37,99,235,0.8) 0%, rgba(37,99,235,0.2) 100%)',
                },
              }}
            >
              Education
            </Typography>
            <Box sx={{ mt: 5 }}>
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      mb: 5,
                      pb: 4,
                      borderBottom: index !== educationData.length - 1 
                        ? isDark
                          ? '1px solid rgba(59,130,246,0.1)'
                          : '1px solid rgba(37,99,235,0.1)'
                        : 'none',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'primary.main',
                        mb: 1.5,
                        fontSize: { xs: '1.25rem', md: '1.35rem' },
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'text.primary',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                        fontSize: { xs: '1.35rem', md: '1.4rem' },
                      }}
                    >
                      {item.institution}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                        fontSize: { xs: '1.2rem', md: '1.25rem' },
                      }}
                    >
                      {item.description} • {item.gpa}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        fontSize: { xs: '1.2rem', md: '1.25rem' },
                        opacity: 0.8,
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Experience Column */}
          <Box sx={{ flex: 1, pl: { md: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'primary.main',
                mb: 5,
                fontWeight: 600,
                textAlign: 'left',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '80px',
                  height: '3px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.2) 100%)'
                    : 'linear-gradient(90deg, rgba(37,99,235,0.8) 0%, rgba(37,99,235,0.2) 100%)',
                },
              }}
            >
              Experience
            </Typography>
            <Box sx={{ mt: 5 }}>
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      mb: 5,
                      pb: 4,
                      borderBottom: index !== experienceData.length - 1 
                        ? isDark
                          ? '1px solid rgba(59,130,246,0.1)'
                          : '1px solid rgba(37,99,235,0.1)'
                        : 'none',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'primary.main',
                        mb: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'text.primary',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                        fontSize: '1.35rem',
                      }}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        mb: 2,
                        opacity: 0.8,
                      }}
                    >
                      {item.location}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {item.achievements.map((achievement, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '1.1rem',
                            mb: 1,
                            '&::marker': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Education; 