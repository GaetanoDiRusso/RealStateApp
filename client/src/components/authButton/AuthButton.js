import React from 'react';
import { Button, Avatar } from '@mui/material'
import {useNavigate, useLocation} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import { logout } from '../../actions/auth'

export default function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const token = useSelector( (state)=> state.auth.authData );

    const userImg = JSON.parse(localStorage.getItem('profile'))?.userData.frontImg;

    const handleClick = ()=> {
        if(token){
            dispatch(logout(navigate));
        } else {
            navigate('/auth')
        }
    }

    return (
        <>
            {token ?
                <>
                    {
                        location.pathname === '/' ?
                            <Avatar onClick={()=>navigate('/profile')} sx={{height: '50px', width: '50px'}} style={{position: 'absolute', top: '25px', right: '25px'}}>
                                <img style={{height: '100%',}} src={userImg} alt={'user'}/>
                            </Avatar>
                        :
                            <Button variant='contained' onClick={handleClick} style={{position: 'absolute', top: '30px', right: '25px'}} color={token ? 'error' : 'primary'}>
                                LOGOUT
                            </Button>    
                    }
                </>
            :
                <Button variant='contained' onClick={handleClick} style={{position: 'absolute', top: '30px', right: '25px'}} color={token ? 'error' : 'primary'}>
                    LOGIN
                </Button>
            }
        </>
    );
}