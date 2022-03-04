import React from 'react'
import { Grid, Typography, Card } from '@mui/material'

import PropertyDetailsPrev from '../propertyPrev/PropertyDetailsPrev';

export default function NewPropertyPrev({property}) {
  return (
    <div style={{width: '90vw'}}>
        <Grid item xs={12} style={{paddingTop: '5px'}}>
            <Card style={{padding: '10px 10px 20px 10px', borderRadius: '30px', boxShadow: '6px 4px 50px -17px rgba(0,0,0,0.36)', backgroundColor: '#f0f0f0'}}>
                <img style={{borderRadius: '25px', width: '100%', height: '200px', objectFit: 'cover'}} src={property?.frontImg} alt="" />

                <Typography variant="subtitle2" color='textSecondary'>{property.neighborhood} / {property.city}</Typography>

                {property.rentPrice &&
                    <Typography fontWeight="bold" style={{fontSize:'30px', fontFamily:'Montserrat', margin: '5px 0', display: 'flex', alignItems: 'center'}}>$ {property?.rentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<Typography variant='subtitle2' color='textSecondary'>/Month</Typography></Typography>
                }

                {property.sellPrice &&
                    <div style={{marginTop: '-20px', display: 'flex', justifyContent: 'flex-end'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='subtitle2' style={{color: '#85bb65', marginBottom: '-10px'}}>Sell Price</Typography>
                            <Typography fontWeight="bold" style={{color: 'green', fontSize:'30px', fontFamily:'Montserrat'}}>USD {property?.sellPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                        </div>
                    </div>           
                }

                <div style={{width: '200px', margin: '0 auto'}}>
                    <PropertyDetailsPrev rooms={property.rooms} bathrooms={property.bathrooms} area={property.area}/>
                </div>

            </Card>
        </Grid>
    </div>
  )
}
