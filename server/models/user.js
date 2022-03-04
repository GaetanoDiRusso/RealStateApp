import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    companyName: {type: String},
    password: {type: String, required: true},
    frontImg: {type: String},
    properties: {type: [String]},
    isAdmin: {type: Boolean, required: true, default: false}
})

export default mongoose.model('User', userSchema);