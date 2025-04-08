import { Box, Container, Typography, useTheme, Grid, Paper, Divider } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaJava,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaDatabase,
  FaServer,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaTools,
  FaUserFriends,
  FaHandshake,
  FaComments,
  FaRandom,
  FaPuzzlePiece,
  FaChartLine,
  FaCloud,
  FaProjectDiagram,
  FaClipboardCheck,
  FaUserCog,
  FaUserTie,
  FaUserCheck,
  FaUserClock,
  FaUserShield,
  FaUserGraduate,
  FaUserAstronaut,
  FaBolt,
  FaCogs,
  FaUsers as FaPeopleGroup,
  FaComments as FaMessage,
  FaRandom as FaRepeat,
  FaPuzzlePiece as FaPuzzle,
  FaChartBar,
  FaClipboardList,
  FaUserCog as FaUserGear,
  FaUserTag,
  FaUserCheck as FaUserVerified,
  FaUserClock as FaUserTime,
  FaUserShield as FaUserProtected,
  FaUserGraduate as FaUserAcademic,
  FaUserAstronaut as FaUserSpace,
  FaColumns,
  FaLock,
  FaTerminal,
  FaUserTie as FaUserProfessional,
  FaUserGraduate as FaUserScholar,
  FaUserAstronaut as FaUserExplorer,
  FaUserShield as FaUserGuard,
  FaUserClock as FaUserTiming,
  FaUserCheck as FaUserValidated,
  FaUserCog as FaUserSettings,
  FaUserTag as FaUserLabel,
  FaUserFriends as FaUserGroup,
  FaHandshake as FaUserHandshake,
  FaComments as FaUserChat,
  FaRandom as FaUserAdapt,
  FaBolt as FaUserCreative,
  FaPuzzlePiece as FaUserProblemSolver,
  FaChartBar as FaUserAnalytics,
  FaClipboardList as FaUserTasks,
  FaProjectDiagram as FaUserArchitecture,
  FaServer as FaUserBackend,
  FaCode as FaUserFrontend,
  FaDatabase as FaUserData,
  FaTools as FaUserTools,
  FaLightbulb as FaUserIdeas,
  FaUsers as FaUserTeam,
  FaGitAlt as FaUserVersion,
  FaDocker as FaUserContainer,
  FaAws as FaUserCloud,
  FaJava as FaUserJava,
  FaPython as FaUserPython,
  FaHtml5 as FaUserHtml,
  FaCss3 as FaUserCss,
  FaReact as FaUserReact,
  FaNodeJs as FaUserNode,
  FaPalette,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiSpringboot,
  SiPostman,
  SiFigma,
  SiOpenai,
  SiAdobephotoshop,
  SiJenkins,
  SiWebpack,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiGooglecloud,
  SiSplunk,
  SiDynatrace,
  SiMysql,
  SiCplusplus,
  SiShell,
  SiIonic,
  SiGithubactions,
  // SiZebra,
} from 'react-icons/si';
import { 
  VscAzure, 
  VscTerminalBash, 
  VscCode, 
  VscServer, 
  VscCloud, 
  VscLightbulb, 
  VscTools, 
  VscPerson, 
  VscGroupByRefType, 
  VscCommentDiscussion, 
  VscSymbolRuler, 
  // VscPuzzle, 
  VscGraph, 
  // VscGitBranch, 
  VscChecklist, 
  VscAccount, 
  VscVerified, 
  // VscClock, 
  VscShield, 
  VscMortarBoard, 
  VscRocket, 
  // VscKanban 
} from "react-icons/vsc";

// Organize skills by category
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'CSS', icon: FaCss3, color: '#1572B6' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'Shell Scripting', icon: VscTerminalBash, color: '#4EAA25' },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'Responsive Design', icon: FaPalette, color: '#0081CB' },
      { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'RESTful APIs', icon: VscCode, color: '#F7DF1E' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'JWT Authentication', icon: FaLock, color: '#F7DF1E' },
      { name: 'Firebase Auth', icon: SiFirebase, color: '#FFCA28' },
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Azure', icon: VscAzure, color: '#0078D4' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#F05032' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D33833' },
      // { name: 'CI/CD Pipelines', icon: VscGitBranch, color: '#2496ED' },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      { name: 'NPM', icon: SiNpm, color: '#CB3837' },
      { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
      { name: 'PNPM', icon: SiPnpm, color: '#F77669' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ]
  },
  {
    name: "Concepts",
    skills: [
      { name: 'System Monitoring', icon: SiDynatrace, color: '#149EF4' },
      { name: 'Incident Documentation', icon: VscCode, color: '#F7DF1E' },
      { name: 'Microservices', icon: FaDocker, color: '#2496ED' },
      { name: 'Service-Oriented Architecture', icon: VscServer, color: '#F7DF1E' },
      // { name: 'Module Federation', icon: VscGitBranch, color: '#F7DF1E' },
      { name: 'API Development', icon: VscCode, color: '#F7DF1E' },
      { name: 'Performance Optimization', icon: FaBolt, color: '#F7DF1E' },
      { name: 'Cloud Solutions', icon: FaCloud, color: '#FF9900' },
      // { name: 'Agile Methodology', icon: VscKanban, color: '#F7DF1E' },
      { name: 'Usability', icon: VscLightbulb, color: '#F7DF1E' },
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'ServiceNow', icon: FaUserSettings, color: '#F7DF1E' },
      { name: 'Splunk', icon: SiSplunk, color: '#000000' },
      { name: 'Dynatrace', icon: SiDynatrace, color: '#149EF4' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'Adobe', icon: SiAdobephotoshop, color: '#FF0000' },
      // { name: 'Zebra TC5X', icon: SiZebra, color: '#F7DF1E' },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: 'Work Ethic', icon: FaUserTag, color: '#F7DF1E' },
      { name: 'Ownership', icon: FaUserVerified, color: '#F7DF1E' },
      { name: 'Teamwork', icon: FaPeopleGroup, color: '#F7DF1E' },
      { name: 'Communication', icon: FaMessage, color: '#F7DF1E' },
      { name: 'Adaptability', icon: FaRepeat, color: '#F7DF1E' },
      { name: 'Creativity', icon: FaBolt, color: '#F7DF1E' },
      { name: 'Problem Solving', icon: FaPuzzle, color: '#F7DF1E' },
    ]
  }
];

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: isDark
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: isDark
            ? 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0) 100%)'
            : 'linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.15) 50%, rgba(37,99,235,0) 100%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: 'primary.main',
                mb: 2,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '25%',
                  width: '50%',
                  height: '3px',
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.5) 50%, rgba(59,130,246,0) 100%)'
                    : 'linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.5) 50%, rgba(37,99,235,0) 100%)',
                },
              }}
            >
              Skills & Technologies
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              A comprehensive overview of my technical expertise and professional capabilities
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: isDark
                        ? 'linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 100%)'
                        : 'linear-gradient(90deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0) 100%)',
                    },
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
              
              <Grid container spacing={2}>
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  
                  return (
                    <Grid item xs={6} sm={4} md={3} key={skill.name}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.02,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ 
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Paper
                            elevation={isDark ? 3 : 2}
                            sx={{
                              p: 2,
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: isDark 
                                ? 'rgba(17, 34, 64, 0.7)' 
                                : 'rgba(255, 255, 255, 0.9)',
                              borderRadius: 2,
                              border: `1px solid ${isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.1)'}`,
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                boxShadow: isDark 
                                  ? '0 8px 30px rgba(59,130,246,0.2)' 
                                  : '0 8px 30px rgba(37,99,235,0.2)',
                                borderColor: skill.color,
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 50,
                                mb: 1.5,
                              }}
                            >
                              <IconComponent
                                style={{
                                  width: '30px',
                                  height: '30px',
                                  color: skill.color,
                                }}
                              />
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                color: 'text.primary',
                                fontSize: '0.9rem',
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
              
              {categoryIndex < skillCategories.length - 1 && (
                <Divider 
                  sx={{ 
                    mt: 4, 
                    mb: 2,
                    borderColor: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.1)',
                  }} 
                />
              )}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 