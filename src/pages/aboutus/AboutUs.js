import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
                About Us
            </Typography>
            <Item elevation={3}>
                <Typography variant="body1" align="justify">
                    {/* Your about us content goes here */}
                    At ARK General Trading LLC, we pride ourselves on being a reliable and trusted name in the global industrial minerals market. With operations backed by RK Minerals & Industrial Supplies in India, we ensure the seamless procurement and export of high-quality raw materials to support industries across various sectors.
                    <br/><br/>
                    Our extensive experience, commitment to quality, and customer-first approach enable us to deliver consistent value to our clients. By focusing on ethical sourcing and sustainable practices, we aim to contribute positively to industrial growth worldwide.
                    <br/><br/>
                    <b>Our Mission</b>
                    <br/>
                    To provide top-quality industrial minerals to our clients, ensuring excellence in service, sustainability, and innovation.
                    <br/><br/>
                    <b>Our Vision</b>
                    <br/>
                    To be a global leader in the supply and export of industrial minerals, known for quality, reliability, and customer satisfaction.

                </Typography>
            </Item>
        </Container>
    </Box>
  );
};

export default AboutUs;