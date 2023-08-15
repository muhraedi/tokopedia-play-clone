import express from 'express';
import { getProductsByVideoId } from '../controllers/productController.js';

const router = express.Router();

router.get('/products/:videoId', getProductsByVideoId)

export default router;