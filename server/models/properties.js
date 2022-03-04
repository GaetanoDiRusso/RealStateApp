import mongoose from 'mongoose';

const propertySchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    frontImg: {type: String},
    images: {type: [String]},
    type: {type: String, required: true},
    rent: {type: {rentPrice: Number, currency: String, state: Boolean }, required: true},
    sell: {type: {sellPrice: Number, currency: String, state: Boolean }, required: true},
    reserved: {type: Boolean, required: true, default: false},
    visible: {type: Boolean, required: true, default: true},
    details: {
        type: {
            rooms: Number,
            bathrooms: Number,
            serviceRooms: Number,
            serviceBathrooms: Number,
            floors: Number,
            yearOfConstruction: Number,
            areaOfConstruction: Number,
            totalArea: Number,
        }, 
        required: true
    },
    neighborhood: {type: String, required: true},
    city: {type: String, required: true},
    creatorId: {type: String, required: true}
})

export default mongoose.model('Property', propertySchema);