import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async(req, res)=>{
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password) return res.status(404).json('You must provide First Name, Last Name, Email and Password');

    try {
        const encryptedPassword = await bcrypt.hash(password, 12)

        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(404).json("User already exists, please choose another email address");

        const result = await User.create({firstName, lastName, email, password: encryptedPassword});
        
        const token = jwt.sign({
            id: result._id,
            isAdmin: result.isAdmin
        }, JWT_SECRET);

        res.status(200).json({token, userData: {firstName: result.firstName, lastName: result.lastName, email: result.email, companyName: result.companyName, frontImg: result.frontImg, properties: result.properties}})

    } catch (error) {
        console.log(error);
        res.status(404);
    }
}

export const loginUser = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.status(404).json("You must fill all the fields");

    try {
        const currentUser = await User.findOne({email});

        if(!currentUser) return res.status(403).json("Invalid email");

        const correctPassword = await bcrypt.compare(password, currentUser.password);

        if(!correctPassword) return res.status(403).json("Invalid password");

        const token = jwt.sign({
            id: currentUser._id,
            isAdmin: currentUser.isAdmin
        }, JWT_SECRET)

        res.status(200).json({token, userData: {firstName: currentUser.firstName, lastName: currentUser.lastName, email: currentUser.email, companyName: currentUser.companyName, frontImg: currentUser.frontImg, properties: currentUser.properties}})
        
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
}

export const updateProfile = async(req, res) => {
    const {firstName, lastName, email, companyName, frontImg} = req.body;
    const userId = req.userId;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {firstName, lastName, email, companyName, frontImg}, {new: true});

        const token = jwt.sign({
            id: updatedUser._id,
            isAdmin: updatedUser.isAdmin
        }, JWT_SECRET)

        res.status(200).json({token, userData: {firstName: updatedUser.firstName, lastName: updatedUser.lastName, email: updatedUser.email, companyName: updatedUser.companyName, frontImg: updatedUser.frontImg}})
    } catch (error) {
        console.log(error);
    }
}