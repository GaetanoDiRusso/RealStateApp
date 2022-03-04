import React, { useState } from 'react'
import { Avatar, Grid, Typography, Button, TextField, IconButton } from '@mui/material'
import { EditOutlined, Check } from '@mui/icons-material'
import FileBase from 'react-file-base64'

import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/auth'

import AuthButton from '../authButton/AuthButton'

export default function Profile() {
    const [editing, setEditing] = useState({username: false, email: false, companyName: false, password: false})
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')).userData);
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

    const handleChange = (e)=> setUserData({...userData, [e.target.name]: e.target.value})

    const handleSubmit = (e)=> {
        e.preventDefault();
        setIsLoading(true);

        dispatch(updateProfile(userData))
            .then(()=>setIsLoading(false))
        setEditing({username: false, email: false, companyName: false, password: false})
    }

    return (
        <>
            <AuthButton/>

            <Grid align='center' container spacing={3} style={{padding: '100px 20px 0 20px'}}>
                <Grid item xs={12}>
                    <Avatar 
                        sx={{height: '100px', width: '100px'}}               
                    >
                        {userData.frontImg ? 
                            <img style={{height: '100%',}} src={userData.frontImg} alt={userData.firstName}/>
                            :
                            null
                        }
                    </Avatar>
                </Grid>

                <Grid item xs={12} style={{marginBottom: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant='subtitle1' color='textSecondary'>Change Image</Typography>
                        <Button onClick={()=> setUserData({...userData, frontImg: ''})} variant='contained' style={{marginLeft: '10px'}}>Delete Image</Button>
                    </div>

                    <FileBase
                        multiple={false}
                        type='file'
                        onDone={({base64})=> setUserData({...userData, frontImg: base64})}
                    />
                </Grid>

                <Grid item xs={12}>
                    <div style={{display: 'flex'}}>
                        <TextField
                            name='firstName'
                            label='First Name'
                            value={userData.firstName}
                            disabled={!editing.username}
                            fullWidth
                            style={{marginRigth: '5px'}}
                            onChange={handleChange}
                        />

                        <TextField
                            name='lastName'
                            label='Last Name'
                            value={userData.lastName}
                            disabled={!editing.username}
                            fullWidth
                            style={{marginLeft: '5px'}}
                            onChange={handleChange}
                        />

                        <IconButton onClick={()=> setEditing({...editing, username: !editing.username})} style={{margin: 'auto 10px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'}}>
                            {editing.username ?                         
                                    <Check style={{color: 'green'}}/>
                                :                            
                                    <EditOutlined color='primary'/>
                            }
                        </IconButton>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div style={{display: 'flex'}}>
                        <TextField
                            name='email'
                            label='Email'
                            value={userData.email}
                            disabled={!editing.email}
                            fullWidth
                            onChange={handleChange}
                        />

                        <IconButton onClick={()=> setEditing({...editing, email: !editing.email})} style={{margin: 'auto 10px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'}}>
                            {editing.email ?                         
                                    <Check style={{color: 'green'}}/>
                                :                            
                                    <EditOutlined color='primary'/>
                            }
                        </IconButton>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div style={{display: 'flex'}}>
                        <TextField
                            name='companyName'
                            label='Company Name'
                            value={userData.companyName}
                            disabled={!editing.companyName}
                            fullWidth
                            onChange={handleChange}
                        />

                        <IconButton onClick={()=> setEditing({...editing, companyName: !editing.companyName})} style={{margin: 'auto 10px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'}}>
                            {editing.companyName ?                         
                                    <Check style={{color: 'green'}}/>
                                :                            
                                    <EditOutlined color='primary'/>
                            }
                        </IconButton>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <Button variant='contained' onClick={handleSubmit} >{isLoading ? 'Loading...' : 'Submit'}</Button>
                </Grid>
            </Grid>
        </>
    )
}
