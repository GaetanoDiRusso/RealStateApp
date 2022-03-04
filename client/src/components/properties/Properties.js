import React, { useState } from 'react';
import { Grid, Typography, Box, Card } from '@mui/material'
import { Search } from '@mui/icons-material'

import { useNavigate } from 'react-router-dom';

import PropertyPrev from '../propertyPrev/PropertyPrev'

export default function Properties({properties}) {
    const navigate = useNavigate();
    const [displayFilter, setDisplayFilter] = useState(false);

    return (
        <>
            <Grid container spacing={2} justifyContent='center' style={{position: 'fixed', padding: '100px 20px 10px', backgroundColor: '#1976d2'}}>
                <Grid item xs={12}>
                    <Card sx={{margin: '0 auto'}} style={{padding: '20px', borderRadius: '30px', boxShadow: '6px 4px 50px -17px rgba(0,0,0,0.36)', backgroundColor: '#f0f0f0'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography style={{}} variant='h6' color='textSecondary'>Search your house</Typography>
                            <Box onClick={()=> setDisplayFilter(!displayFilter)} sx={{marginLeft: '10px', height: '50px', width: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: displayFilter? '#1976d2' : '#e2e9fa', cursor: 'pointer', transition: 'all 0.3s', color: displayFilter ? 'white' : '#1976d2'}}>
                                <Search style={{pointerEvents: 'none'}}/>
                            </Box>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{padding: '216px 20px 0px'}}>
                {
                    properties.map((property)=>(
                        <Grid key={property._id} onClick={()=>navigate('/property/' + property._id)} item xs={12}>
                            <PropertyPrev property={property}/>
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}
