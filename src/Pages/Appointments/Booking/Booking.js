import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12}sm={6} md={4}>
            <Paper elevation={3} >
                <Typography style={{textAlign:'center', padding:'10px'}} variant='h5'>{name}</Typography>
                <Typography style={{textAlign:'center', padding:'10px'}} variant='h6'>{time}</Typography>
                <Typography style={{textAlign:'center', padding:'10px'}} variant='caption'>{space} space avialable</Typography>
                <Button onClick={handleBookingOpen} variant='contained'>Book Apointment</Button>

            </Paper >
        </Grid>
            <BookingModal
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            booking={booking}
            ></BookingModal>
        </>
    );
};

export default Booking;