import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {Container, Paper, Button, Typography, Avatar, Grid, TextField, CircularProgress} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {signup, signin} from '../../actions/auth'

import { useDispatch, useSelector } from 'react-redux'

const emptyForm = {firstName: '', lastName: '', email: '', password:'', confirmPassword: ''};

export default function Auth() {
    const dispatch = useDispatch();
    const errorStatus = useSelector(state => state.auth.errorMessage)
    
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(emptyForm);
    const [isLoading, setIsLoading] = useState(false);
    const [register, setRegister] = useState(false);
    
    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(signin(formData, navigate))
    }

    const clear = ()=>{
        setFormData(emptyForm)
    }

    const switchMode = ()=>{
        setRegister((prevVal)=> !prevVal);
        clear();
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper style={{top: '50%', right: '50%', transform:'translate(50%, -50%)' ,position: 'absolute', width: '90%'}} elevation={6}>
                <Avatar style={{backgroundColor: 'red', margin: '10px auto'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography align='center' component='h1' variant='h5'>{register ? 'Sign up' : 'Sign In'}</Typography>
                {errorStatus ? <Typography component='h4' style={{color: 'red', margin: '0 15px'}}>{errorStatus}</Typography> : null}

                <form >
                    <Grid style={{padding: '15px'}} container spacing={2}>
                        {register && (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <TextField name='firstName' label='First Name' variant='outlined' fullWidth onChange={handleChange} value={formData.firstName}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name='lastName' label='Last Name' variant='outlined' fullWidth onChange={handleChange} value={formData.lastName}/>
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12} sm={12}>
                            <TextField name='email' label='Email' variant='outlined' fullWidth onChange={handleChange} value={formData.email}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField name='password' label='Password' variant='outlined' fullWidth onChange={handleChange} value={formData.password}/>
                        </Grid>

                        {register && (
                            <Grid item xs={12} sm={12}>
                                <TextField name='confirmPassword' label='Confirm Password' variant='outlined' fullWidth onChange={handleChange} value={formData.confirmPassword}/>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Button fullWidth type='submit' variant='contained' color='primary' onClick={handleSubmit}>{isLoading ? <CircularProgress color='inherit'/> : (register ? 'Sign Up' : 'Sign In' )}</Button>
                        </Grid>
                        

                        <Grid item xs={12}>
                            <Button onClick={switchMode}>{register ? 'Already have an account? Please Log In' : "Don't have an account? Please register" }</Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}
