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
import websiteData from '../../data/website_data.json';

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

const products = [
    { id: 1, image: '/assets/images/ourproducts/product1_garnet.jpg', title: 'Garnet', description: 'A high-performance abrasive used in waterjet cutting, sandblasting, and filtration processes. Our Garnet is sourced and processed to ensure uniformity and efficiency in various industrial applications.' },
    { id: 2, image: '/assets/images/ourproducts/product2_ilmenite.jpg', title: 'Ilmenite', description: 'An essential raw material for titanium dioxide production, Ilmenite is widely used in pigment industries, coatings, and other manufacturing applications. We supply high-grade Ilmenite to meet stringent industry requirements.' },
    { id: 3, image: '/assets/images/ourproducts/product3_sillimanite.jpg', title: 'Sillimanite', description: 'Renowned for its heat resistance and durability, Sillimanite is a preferred choice for refractory and ceramic industries. Our Sillimanite is sourced and processed to deliver maximum performance and reliability.' },
    { id: 4, image: '/assets/images/ourproducts/product1_garnet.jpg', title: 'Garnet2', description: 'A high-performance abrasive used in waterjet cutting, sandblasting, and filtration processes. Our Garnet is sourced and processed to ensure uniformity and efficiency in various industrial applications.' },
    { id: 5, image: '/assets/images/ourproducts/product2_ilmenite.jpg', title: 'Ilmenite2', description: 'An essential raw material for titanium dioxide production, Ilmenite is widely used in pigment industries, coatings, and other manufacturing applications. We supply high-grade Ilmenite to meet stringent industry requirements.' },
    { id: 6, image: '/assets/images/ourproducts/product3_sillimanite.jpg', title: 'Sillimanite2', description: 'Renowned for its heat resistance and durability, Sillimanite is a preferred choice for refractory and ceramic industries. Our Sillimanite is sourced and processed to deliver maximum performance and reliability.' },
    { id: 7, image: '/assets/images/ourproducts/product1_garnet.jpg', title: 'Garnet3', description: 'A high-performance abrasive used in waterjet cutting, sandblasting, and filtration processes. Our Garnet is sourced and processed to ensure uniformity and efficiency in various industrial applications.' },
    { id: 8, image: '/assets/images/ourproducts/product2_ilmenite.jpg', title: 'Ilmenite3', description: 'An essential raw material for titanium dioxide production, Ilmenite is widely used in pigment industries, coatings, and other manufacturing applications. We supply high-grade Ilmenite to meet stringent industry requirements.' },
    { id: 9, image: '/assets/images/ourproducts/product3_sillimanite.jpg', title: 'Sillimanite3', description: 'Renowned for its heat resistance and durability, Sillimanite is a preferred choice for refractory and ceramic industries. Our Sillimanite is sourced and processed to deliver maximum performance and reliability.' },
];

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