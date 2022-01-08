import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../context/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date}) => {
     const {name, time} = booking;
     const {user} = useAuth()
     const handleBookingSubmit = e =>{
       alert('submitting')
      // collect data

       handleBookingClose()
       e.preventDefault()
     }
    
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            sx={{width:'90%', m:1}}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />

            <TextField
             sx={{width:'90%', m:1}}
            id="outlined-size-small"
            defaultValue={user.displayName}
            size="small"
          />
            <TextField
            sx={{width:'90%', m:1}}
            id="outlined-size-small"
            defaultValue="Phone"
            size="small"
          />
            <TextField
             sx={{width:'90%', m:1}}
            id="outlined-size-small"
            defaultValue={user.email}
            size="small"
          />
            <TextField
             sx={{width:'90%', m:1}}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button type='submit' variant='contained'>Send</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;