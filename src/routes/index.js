import express from 'express';
const routes = express.Router();
import authRoutes from './auth.js';

import category from "./category.js";
import productroute from "./product.js";
routes.use('/auth', authRoutes);
routes.use('/category', category)
routes.use('/product', productroute)

export default routes;
