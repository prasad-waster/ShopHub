import express from 'express';
import { processCheckout } from '../controllers/orderController.js';

const router = express.Router();

// @route   POST /api/orders/checkout
router.post('/checkout', processCheckout);

export default router;