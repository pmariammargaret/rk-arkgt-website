import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
                minHeight: '100vh',
                padding: 3,
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align='center'>
                    Contact Us
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Item elevation={3}>
                            <Typography variant="h6" gutterBottom>
                                Get in Touch
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Have an inquiry or some feedback for us? Fill out the form below to contact our team.
                            </Typography>
                            <TextField fullWidth id="name" label="Name" variant="outlined" margin="normal" />
                            <TextField fullWidth id="email" label="Email" variant="outlined" margin="normal" type="email" />
                            <TextField
                                fullWidth
                                id="message"
                                label="How can we help?"
                                multiline
                                rows={4}
                                variant="outlined"
                                margin="normal"
                            />
                            <Button variant="contained" sx={{ mt: 2 }}>SUBMIT</Button>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item elevation={3}>
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Any questions or remarks? Just write us a message!
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom>
                                        Sydney
                                    </Typography>
                                    <Typography variant="body2">
                                        45 Pirrama Rd, Pyrmont NSW 2022
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom>
                                        Melbourne
                                    </Typography>
                                    <Typography variant="body2">
                                        163 Collins St, Melbourne VIC 3000
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom>
                                        Los Angeles
                                    </Typography>
                                    <Typography variant="body2">
                                        340 Main St, Venice CA 902291, USA
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