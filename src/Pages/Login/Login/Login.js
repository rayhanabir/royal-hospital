import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, isLoading, user, authError} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
    }
    return (
        <Container>
            <Grid sx={{mt:8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterbottom>
                        Login
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
                    <Button variant='contained'sx={{width:"75%", m:1}} type='submit'>Sign In</Button>
                    <NavLink to="/register">
                    <Button variant="text">New user? Please Register</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress/>}
                    {user?.email && <Alert severity="success">Login Successful</Alert>}
                    {authError && <Alert severity="error">This is an error alert — check it out!</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;