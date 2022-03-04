import React from 'react';
import { Box } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material'
import {useNavigate, useLocation} from 'react-router-dom'

export default function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const previousPage = ()=> {
        switch (location.pathname){
            case '/profile':
            case '/auth':
                return '/'
            default:
                return (-1)
        }
    }

    return (
        <>
        {location.pathname !== '/' &&
            <Box onClick={()=>navigate(previousPage())} sx={{zIndex: 3, position: 'fixed', top: '20px', left: '20px', height: '50px', width: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', cursor: 'pointer', color: 'white'}}>
                <KeyboardArrowLeft fontSize='large'/>
            </Box>
        }
        </>
    );
}
