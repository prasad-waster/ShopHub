import express from 'express';
import {
  getProducts,
  getProduct
} from '../controllers/productController.js';

const router = express.Router();

// @route   GET /api/products
router.get('/', getProducts);

// @route   GET /api/products/:id
router.get('/:id', getProduct);

export default router;