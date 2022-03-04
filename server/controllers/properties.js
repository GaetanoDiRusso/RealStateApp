import Property from '../models/properties.js'

export const getProperties = async(req, res) => {
    try {
        const properties = await Property.find();

        res.status(200).json(properties);
    } catch (error) {
        res.status(404).json(error);
        console.log(error)
    }
}

export const getPropertiesByCreatorId = async(req, res) => {
    const creatorId = req.params.id;

    try {
        const creatorPoperties = await Property.find({creatorId: creatorId});

        res.status(200).json(creatorPoperties);
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}

export const getPropertiesBySearch = async(req, res) => {

    var filter = {};
    
    if(req.query.rentPrice){
        filter = {...filter, "rent.rentPrice": {$lte: req.query.rentPrice}}
    }

    if(req.query.sellPrice){
        filter = {...filter, "sell.sellPrice": {$lte: req.query.sellPrice}}
    }

    if(req.query.rooms){
        filter = {...filter, "details.rooms" : {$gte: req.query.rooms}}
    }

    if(req.query.bathrooms){
        filter = {...filter, "details.bathrooms" : {$gte: req.query.bathrooms}}
    }

    if(req.query.neighborhood){
        filter = {...filter, neighborhood: new RegExp(req.query.neighborhood.trim(), "i")}
    }

    if(req.query.city){
        filter = {...filter, city: new RegExp(req.query.city.trim(), "i")}
    }

    try {
        const searchedProperties = await Property.find(filter);

        res.status(200).json(searchedProperties)
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}

export const createProperty = async(req, res) => {
    const userId = req.userId;

    const {
        title,
        description,
        frontImg,
        images,
        type,
        rent,
        sell,
        details,
        neighborhood,
        city,
        visible
    } = req.body;

    if(!title || !type || !rent || !sell || !details || !neighborhood || !city) return res.status(404).json('You must provide all the information');
    if(type !== 'house' && type !== 'apartment' && type !== 'office') return res.status(404).json("Type must be house, apartment or office");

    const propertyData = {
        title,
        description,
        frontImg,
        images,
        type,
        rent,
        sell,
        details,
        neighborhood,
        city,
        visible,
        creatorId: userId
    }
    
    try {
        const newProperty = await Property.create(propertyData);

        res.status(200).json(newProperty);
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}

export const updateProperty = async(req, res) =>{
    const userId = req.userId;
    const isAdmin = req.userAdmin;
    const propertyId = req.params.id;

    const {
        title,
        description,
        frontImg,
        images,
        type,
        rent,
        sell,
        details,
        neighborhood,
        city,
        visible,
        reserved
    } = req.body;

    if(type && type !== 'house' && type !== 'apartment' && type !== 'office') return res.status(404).json("Type must be house, apartment or office");

    const updatedPropertyData = {
        title,
        description,
        frontImg,
        images,
        type,
        rent,
        sell,
        details,
        neighborhood,
        city,
        visible,
        reserved
    }

    try {
        const currentProperty = await Property.findById(propertyId);
        if(!currentProperty) return res.status(404).json('This property does not exist');

        if(!(currentProperty.creatorId === userId || isAdmin)) return res.status(401).json('Permission Denied');

        const updatedProperty = await Property.findByIdAndUpdate(propertyId, updatedPropertyData, {new: true})

        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}

export const deleteProperty = async(req, res)=>{
    const userId = req.userId;
    const isAdmin = req.userAdmin;
    const propertyId = req.params.id;

    try {
        const currentProperty = await Property.findById(propertyId);
        if(!currentProperty) return res.status(404).json('This property does not exist');

        if(!(currentProperty.creatorId === userId || isAdmin)) return res.status(401).json('Permission Denied');

        currentProperty.delete();

        res.status(200).json('Deleted successfully');
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
}