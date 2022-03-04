import express from 'express';
import {registerUser, loginUser, updateProfile} from '../controllers/user.js'
import { authToken } from '../middlewares/auth.js'

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.patch('/update', authToken, updateProfile);

export default router;