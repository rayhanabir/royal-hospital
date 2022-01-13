import React, { useState } from 'react';
import { Alert, Container, Grid, Typography } from "@mui/material";
import Booking from '../Booking/Booking';



const bookings = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "8am to 9am",
      space: 10,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "9am to 10am",
      space: 10,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "5pm to 6.30pm",
      space: 10,
    },
    {
      id: 4,
      name: "Cavity Protection",
      time: "10am to 11am",
      space: 10,
    },
    {
      id: 5,
      name: "Teeth Orthodontics",
      time: "11am to 12am",
      space: 10,
    },
    {
      id: 6,
      name: "Teeth Flim",
      time: "8am to 9am",
      space: 10,
    },
  ];
  

const AvailableAppointments = ({date}) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Container>
            <Typography variant="h4" style={{textAlign:"center"}}>Available Appointment {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successful</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                    >

                    </Booking>)
                }
            </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointments;