import { Typography, Card, CardHeader, CardContent, Avatar, Box, Grid } from '@mui/material';
import { Call } from '@mui/icons-material'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

import PropertyDetailsPrev from '../propertyPrev/PropertyDetailsPrev';

export default function FullProperty({properties}) {
    const [displayNumber, setDisplayNumber] = useState(false);
    const location = useLocation();

    const propertyId = location.pathname.split('/')[2];

    const property = properties.find(property => property._id == propertyId);

    return (
        <div style={{height: '100vh'}}>

            <div style={{height: '50vh'}}>
                <img style={{position: 'fixed', top: 0, height: '50vh', width: '100vw', objectFit: 'cover'}} src={property.frontImg} alt="" />
            </div>

            <div style={{position: 'absolute', top: '40vh', backgroundColor: '#eff0f5', minHeight: '60vh', width: '100vw', borderRadius: '50px 50px 0 0'}}>
                <hr style={{width: '60px', height: '5px', borderRadius: '50px', backgroundColor: '#787878', border: 'none'}}/>

                <Grid container spacing={2} sx={{padding: '10px 25px'}}>
                    <Grid item xs={12}>
                        <Typography variant='body1' fontWeight='bold' style={{color: '#696969'}}>{property.neighborhood} / {property.city}</Typography>
                        <Typography variant='h5' fontWeight='bold'>{property.title}</Typography>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography fontWeight="bold" style={{fontSize: '20px',fontFamily:'Montserrat', margin: '5px 0', color: '#1976d2'}}>$ {property.rentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                            <Typography style={{margin: '0 10px'}} >/</Typography>
                            <Typography fontWeight="bold" style={{fontSize: '20px',fontFamily:'Montserrat', margin: '5px 0', color: 'green'}}>USD {property.sellPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={8}>
                        <PropertyDetailsPrev rooms={property.rooms} bathrooms={property.bathrooms} area={property.area} fontSize={20}/>
                    </Grid>
                    
                    <Grid item xs={12} justifyContent='center'>
                        <Card style={{borderRadius: '30px', boxShadow: '6px 4px 50px -17px rgba(0,0,0,0.36)', backgroundColor: '#f0f0f0'}}>
                            <CardHeader
                                sx={{'& .MuiCardHeader-action': {margin: '0'}, paddingBottom: 0}}

                                avatar={
                                    <Avatar>
                                        <img style={{height: '100%'}} src="https://cdn.dribbble.com/users/4538854/screenshots/9069866/elegant-real-estate-logo_4x.jpg" alt="" />
                                    </Avatar>
                                }

                                action={
                                    <Box onClick={()=> setDisplayNumber(!displayNumber)} sx={{height: '50px', width: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: displayNumber? '#1976d2' : '#e2e9fa', cursor: 'pointer', transition: 'all 0.3s', color: displayNumber ? 'white' : '#1976d2'}}>
                                        <Call style={{pointerEvents: 'none'}}/>
                                    </Box>
                                }

                                title={
                                    <Typography variant='h6'>
                                        {'Real State'}
                                    </Typography>
                                }
                            />

                            <CardContent>
                                <Grid container spacing={2} sx={{height: displayNumber ? 'auto' : '0px', overflow: 'hidden'}}>
                                    <Grid item xs={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <Call color='primary' style={{margin: '0 5px'}} />
                                        <Typography color='testSecondary' fontWeight='bold'><a style={{color: 'inherit', textDecoration: 'none'}} href={`tel:+598-${'099698010'}`}>{'099698010'}</a></Typography>
                                    </Grid>

                                    <Grid item xs={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <Call color='primary' style={{margin: '0 5px'}} />
                                        <Typography color='testSecondary' fontWeight='bold'><a style={{color: 'inherit', textDecoration: 'none'}} href={`tel:+598-${'099698010'}`}>{'099698010'}</a></Typography>
                                    </Grid>

                                    <Grid item xs={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                        <Call color='primary' style={{margin: '0 5px'}} />
                                        <Typography color='testSecondary' fontWeight='bold'><a style={{color: 'inherit', textDecoration: 'none'}} href={`tel:+598-${'099698010'}`}>{'099698010'}</a></Typography>
                                    </Grid>

                                </Grid>

                                <Typography style={{marginTop: '10px'}} color='textSecondary'>{property.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {property.images.map((image, i) => (
                                <Grid key={i} item xs={6}>
                                    <img style={{width: '170px', height: '130px', borderRadius: '10px', objectFit: 'cover'}} src={image} alt="" />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}
