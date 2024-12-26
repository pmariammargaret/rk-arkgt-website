import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import websiteData from '../../data/website_config.js';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const ContactUs = () => {

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '60vh',
                padding: 7,
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align='center'>
                    {websiteData.pages.contactus.title}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Item elevation={3}>
                            <Typography variant="h6" gutterBottom>
                                <b>{websiteData.pages.contactus.leftPanel.title}</b>
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {websiteData.pages.contactus.leftPanel.content}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>{/*Email box with icon*/}
                                <EmailIcon sx={{ mr: 1 }} />
                                <a href={`mailto:${websiteData.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <b>{websiteData.email}</b>
                                </a>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>{/*Phone box with icon*/}
                                <LocalPhoneIcon sx={{ mr: 1 }} />
                                <a href={`tel:${websiteData.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <b>{websiteData.phoneFormatted}</b>
                                </a>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item elevation={3}>
                            <Typography variant="body1" gutterBottom>
                                {websiteData.pages.contactus.rightPanel.content}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom >
                                        {websiteData.address.country}
                                    </Typography>
                                    <Typography variant="body2">
                                        {websiteData.companyName} <br/> 
                                        {websiteData.address.address1}, {websiteData.address.address2}  <br/>
                                        {websiteData.address.city}, {websiteData.address.country}  <br/>
                                        {websiteData?.address?.zip}
                                    </Typography>
                                </Grid>                            
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactUs;