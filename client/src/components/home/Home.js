import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, Box, Card } from '@mui/material'
import { Search } from '@mui/icons-material'

import NewPropertyPrev from './NewPropertyPrev';
import PropertyDetailsPrev from '../propertyPrev/PropertyDetailsPrev';
import AuthButton from '../authButton/AuthButton';

export default function Home({newProperties}) {
    const [displayFilter, setDisplayFilter] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <AuthButton/>
            
            <Grid container spacing={4} style={{padding: '60px 30px 10px 30px'}}>
                <Grid item xs={12}>
                    <Typography variant='h6' color='textSecondary'>Find you dream house</Typography>
                    <Typography variant='h4' color='primary' fontWeight='bold'>The Real Estate App</Typography>
                </Grid>


                <Grid item xs={12}>
                    <Card style={{padding: '20px', borderRadius: '30px', boxShadow: '6px 4px 50px -17px rgba(0,0,0,0.36)', backgroundColor: '#f0f0f0'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Typography style={{}} variant='h6' color='textSecondary'>Which house do you want?</Typography>
                            <Box onClick={()=> setDisplayFilter(!displayFilter)} sx={{marginLeft: '10px', height: '50px', width: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: displayFilter? '#1976d2' : '#e2e9fa', cursor: 'pointer', transition: 'all 0.3s', color: displayFilter ? 'white' : '#1976d2'}}>
                                <Search style={{pointerEvents: 'none'}}/>
                            </Box>
                        </div>
                    </Card>
                </Grid>

                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2}}>
                    <Typography variant='h5' fontWeight='bold' color='textSecondary'>New Properties</Typography>
                    <Typography onClick={()=> navigate('/search')} variant='subtitle1' fontWeight='bold' color='primary'>View All</Typography>
                </Grid>

            </Grid>

            <div className='new-properties-menu' style={{display: 'flex', overflow: 'auto', padding: '0 15px', margin: '-40px 0'}}>
                {newProperties.map((property) => (
                    <div key={property._id} onClick={()=>navigate('/property/'+ property._id)} style={{margin: '35px 5px'}}>
                        <NewPropertyPrev property={property}/>
                    </div>
                ))}
            </div>
        </>
  )
}
