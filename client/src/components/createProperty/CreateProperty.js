import React, { useState } from 'react'
import { Typography, Grid, TextField, Checkbox, FormControlLabel, InputAdornment, Button, FormLabel, FormControl, Radio, RadioGroup } from '@mui/material'
import { Image } from '@mui/icons-material'
import { BedOutlined, BathtubOutlined, StraightenOutlined, HomeOutlined, CalendarToday, HotelOutlined, WcOutlined, VisibilityOff, Visibility } from '@mui/icons-material'

import { useDispatch } from 'react-redux'
import { createProperty } from '../../actions/properties'

import FileBase from 'react-file-base64'

const emptyProperty = {
    title: '',
    description: '',
    frontImg: '',
    images: [],
    type: '',
    rent: {rentPrice: 0, currency: '', state: false},
    sell: {sellPrice: 0, currency: '', state: false},
    details: {
        rooms: 0,
        bathrooms: 0,
        serviceRooms: 0,
        serviceBathrooms: 0,
        yearOfConstruction: 0,
        areaOfConstruction: 0,
        totalArea: 0,
    },
    neighborhood: '',
    city: '',
    visible: false
}


export default function CreateProperty() {
    const [newProperty, setNewProperty] = useState(emptyProperty);
    const dispatch = useDispatch();

    const handleRentChange = ()=>{
        setNewProperty({...newProperty, rent: {...newProperty.rent, state: !newProperty.rent.state}})
    }

    const handleSellChange = ()=>{
        setNewProperty({...newProperty, sell: {...newProperty.sell, state: !newProperty.sell.state}})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(createProperty(newProperty))
    }

    return (
            <form onSubmit={handleSubmit}>
            <Grid align="center" spacing={2} container style={{padding: '100px 20px 20px'}}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h5' fontWeight='bold' color='textSecondary'>New Property</Typography>
                </Grid>


                <Grid item xs={12}>
                    {newProperty.frontImg ? 
                        <img src={newProperty.frontImg} alt={newProperty.title} style={{maxHeight: '150px', maxWidth: "170px"}} />

                        :

                        <div style={{height: '200px', width: "200px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Image fontSize='large'/>
                        </div>
                    }                    
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='subtitle1' fontWeight='bold' color='textSecondary'>Front Image</Typography>

                    <FileBase
                        multiple={false}
                        type='file'
                        onDone={({base64})=> setNewProperty({...newProperty, frontImg: base64})}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label='Title'
                        fullWidth
                        value={newProperty.title}
                        onChange={(e)=> setNewProperty({...newProperty, title: e.target.value})}
                        required
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label='Neighborhood'
                        fullWidth
                        value={newProperty.neighborhood}
                        onChange={(e)=> setNewProperty({...newProperty, neighborhood: e.target.value})}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label='City'
                        fullWidth
                        value={newProperty.city}
                        onChange={(e)=> setNewProperty({...newProperty, city: e.target.value})}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        label='Description'
                        onChange={(e)=> setNewProperty({...newProperty, description: e.target.value})}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Type</FormLabel>

                        <RadioGroup defaultValue='house' row onChange={(e)=> setNewProperty({...newProperty, type: e.target.value})}>
                            <FormControlLabel value='house' control={<Radio/>} label='House'/>
                            <FormControlLabel value='apartment' control={<Radio/>} label='Apartment'/>
                            <FormControlLabel value='office' control={<Radio/>} label='Office'/>
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        label='For Rent?'
                        control={
                            <Checkbox
                                checked={newProperty.rent.state}
                                onChange={handleRentChange}
                            />
                        }
                    />

                    <TextField
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        fullWidth
                        value={newProperty.rentPrice}
                        onChange={(e)=> setNewProperty({...newProperty, rent: {...newProperty.rent, rentPrice: e.target.value} }) }
                        label='Rent Price'
                        disabled={!newProperty.rent.state}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={6}>
                    <FormControlLabel
                        label='For Sale?'
                        control={
                            <Checkbox
                                checked={newProperty.sell.state}
                                onChange={handleSellChange}
                            />
                        }
                    />

                    <TextField
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        fullWidth
                        value={newProperty.sellPrice}
                        onChange={(e)=> setNewProperty({...newProperty, sell: {...newProperty.sell, sellPrice: e.target.value} }) }
                        label='Sell Price'
                        disabled={!newProperty.sell.state}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Rooms'
                        fullWidth
                        value={newProperty.details.rooms}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, rooms: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <BedOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Bathrooms'
                        fullWidth
                        value={newProperty.details.bathrooms}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, bathrooms: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <BathtubOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Total Area'
                        fullWidth
                        value={newProperty.details.totalArea}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, totalArea: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <StraightenOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Service Rooms'
                        fullWidth
                        value={newProperty.details.serviceRooms}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, serviceRooms: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <HotelOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Service Bathrooms'
                        fullWidth
                        value={newProperty.details.serviceBathrooms}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, serviceBathrooms: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <WcOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label='Area of Construction'
                        fullWidth
                        value={newProperty.details.areaOfConstruction}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, areaOfConstruction: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <HomeOutlined/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label='Year of Construction'
                        fullWidth
                        value={newProperty.details.yearOfConstruction}
                        onChange={(e)=> setNewProperty({...newProperty, details: {...newProperty.details, yearOfConstruction: e.target.value}})}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <CalendarToday/>
                                    </InputAdornment>
                                )
                            }
                        }
                        inputProps={{ inputMode: 'numeric', type: 'number'}}
                        onFocus={(e)=> e.target.select()}
                    />
                </Grid>

                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center'}}>
                    <FormControlLabel
                        label="Web Visible"
                        control={
                            <Checkbox
                                icon={<VisibilityOff/>}
                                checkedIcon={<Visibility/>}
                                checked={newProperty.visible}
                                onChange={()=> setNewProperty({...newProperty, visible: !newProperty.visible})}
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h6' color='textSecondary'>Property images</Typography>
                    <FileBase type="file" multiple onDone={(imgs)=> setNewProperty({...newProperty, images: imgs.map(img=> img.base64)})}></FileBase>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {newProperty.images?.map((image, i) => (
                            <Grid key={i} item xs={6}>
                                <img style={{width: '170px', height: '130px', borderRadius: '10px', objectFit: 'cover'}} src={image} alt="" />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Button type='submit' variant='contained'>Create</Button>
                </Grid>

            </Grid>
        </form>
    )
}