import React from 'react';
import { Card, Typography } from '@mui/material'

import PropertyDetailsPrev from './PropertyDetailsPrev'

export default function propertyPrev({property}) {
    return (
        <Card style={{borderRadius: '25px', boxShadow: '6px 4px 50px -17px rgba(0,0,0,0.36)', backgroundColor: '#f0f0f0'}}>
            <div style={{height: '100px', display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div style={{height: '100px', width: '100px', borderRadius: '25px', overflow: 'hidden'}}>
                    <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src={property.frontImg} alt="" />
                </div>

                <div style={{margin: '0 auto 0 0', padding: '0 15px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography fontWeight="bold" style={{fontSize:'15px', fontFamily:'Montserrat', margin: '5px 0'}}>$ {property.rentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                            <Typography>/</Typography>
                            <Typography fontWeight="bold" style={{fontSize:'15px', fontFamily:'Montserrat', margin: '5px 0', color: 'green'}}>USD {property.sellPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Typography>
                        </div>
                        <Typography>{property.neighborhood} / {property.city}</Typography>
                        <PropertyDetailsPrev rooms={property.rooms} bathrooms={property.bathrooms} area={property.area}/>
                    </div>
                </div>
            </div>


        </Card>
    )
}
