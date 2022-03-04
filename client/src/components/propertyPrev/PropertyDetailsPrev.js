import React from 'react';

import { Typography } from '@mui/material'
import { BedOutlined, BathtubOutlined, StraightenOutlined } from '@mui/icons-material'


const styles = {
    propPropContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: '0px 7px',
    }
}

export default function PropertyDetailsPrev({fontSize, rooms, bathrooms, area}) {


  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '-8px'}}>
                            
        <div style={styles.propPropContainer}>
            <BedOutlined color='primary' sx={{fontSize: fontSize}}/>
            <Typography color='textSecondary' style={{margin: '0 3px', fontSize: fontSize}}>{rooms}</Typography>
        </div>

        <div style={styles.propPropContainer}>  
            <BathtubOutlined color='primary' sx={{fontSize: fontSize}}/>
            <Typography color='textSecondary' style={{margin: '0 3px', fontSize: fontSize}}>{bathrooms}</Typography>
        </div>
        
        <div style={styles.propPropContainer}>
            <StraightenOutlined color='primary' sx={{fontSize: fontSize}}/>
            <Typography color='textSecondary' style={{margin: '0 3px', fontSize: fontSize}}>{area} m<sup>2</sup></Typography>
        </div>

    </div>
  )
}
