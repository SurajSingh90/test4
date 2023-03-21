import express from 'express';
const routes = express.Router();
import { createusers,loginpage } from '../controller/auth.js';

routes.post('/create/users', createusers);
routes.post('/login/users',loginpage)
export default routes;
