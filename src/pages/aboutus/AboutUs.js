import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import websiteData from '../../data/website_config.js';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '70vh', // Ensure full viewport height
        backgroundColor: '#e0f2f7',//'#e0f2f7', // Light blue background
        padding: 7,
      }}
    >
        <Container maxWidth="md"> {/* Use Container for better content width control */}
            <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align='center'>
              {websiteData.pages.aboutus.title}
            </Typography>
            <Item elevation={3}>
              <Typography variant="body1" align="justify" dangerouslySetInnerHTML={{ __html: websiteData.pages.aboutus.content }} />
            </Item>
        </Container>
    </Box>
  );
};

export default AboutUs;