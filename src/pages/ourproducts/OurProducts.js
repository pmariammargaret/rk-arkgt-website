import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import websiteData from '../../data/website_config.js';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer', // Make it clear it's clickable
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const products = websiteData.pages.ourproducts.products;

const OurProducts = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleOpen = (product) => {
        setModalContent(product);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const visibleProducts = products.slice(startIndex, startIndex + 6);

    const handleNext = () => {
        setStartIndex(Math.min(startIndex + 6, products.length - 6));
    };

    const handlePrevious = () => {
        setStartIndex(Math.max(0, startIndex - 6));
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 7 }}>
            <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align='center'>
                Our Products
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {visibleProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}> {/* Responsive grid items */}
                        <Item elevation={3} onClick={() => handleOpen(product)}>
                            <img src={`${websiteData.resPrefix}${product.image}`} alt={product.title} style={{ width: '250px', height: '250px' }} />
                            <Typography variant="h6" gutterBottom>
                                {product.title}
                            </Typography>
                            <Typography variant="body2">
                                {product.description.substring(0, 50)}...{/* Shortened description */}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
            {products.length > 6 && ( // Conditionally render buttons if there are more than 6 products
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <IconButton onClick={handlePrevious} disabled={startIndex === 0}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton onClick={handleNext} disabled={startIndex + 6 >= products.length}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalContent && (
                        <div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {modalContent.title}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {modalContent.description}
                            </Typography>
                        </div>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default OurProducts;