import express from 'express';
const router = express.Router();

import { createProperty, updateProperty, getProperties, getPropertiesByCreatorId, getPropertiesBySearch, deleteProperty } from '../controllers/properties.js';

//auth middleware
import { authToken } from '../middlewares/auth.js'

router.get('/', getProperties);
router.get('/search/:id', getPropertiesByCreatorId);
router.get('/search', getPropertiesBySearch);
router.post('/create', authToken, createProperty);
router.patch('/update/:id', authToken, updateProperty);
router.delete('/delete/:id', authToken, deleteProperty);


export default router;