import jwt from 'jsonwebtoken'

export const authToken = (req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) return res.status(401).json('You must be logged in');

    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = userData.id;
        req.userAdmin = userData.isAdmin;
        
        next();
    } catch (error) {
        console.log(error);
        res.json('Error in token authentication')
    }
}