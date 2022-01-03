import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        if(loginData.password !== loginData.password2){
            return
        }
        registerUser(loginData.email, loginData.password, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{mt:8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterbottom>
                        Registration
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>

                    <TextField 
                    sx={{width:"75%", m:2}}
                    id="standard-basic" 
                    label="Email" 
                    type="email"
                    name ='email'
                    onBlur ={handleOnBlur}
                    variant="standard" />

                    <TextField
                    sx={{width:"75%", m:2}}
                    id="standard-basic" 
                    label="Password" 
                    type="password"
                    name ='password'
                    onBlur ={handleOnBlur}
                    variant="standard" />

                    <TextField
                    sx={{width:"75%", m:2}}
                    id="standard-basic" 
                    label="ReType Your Password" 
                    type="password"
                    name ='password2'
                    onBlur ={handleOnBlur}
                    variant="standard" />
                    <Button variant='contained'sx={{width:"75%", m:1}} type='submit'>Sign In</Button>

                    <NavLink to="/login">
                    <Button variant="text">Already Register ? Please Login</Button>
                    </NavLink>

                    </form>}
                    {isLoading && <CircularProgress/>}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;