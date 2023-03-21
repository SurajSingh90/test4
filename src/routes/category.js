import express from "express";
const routes = express.Router()
import { createcategories,getAllCategories } from "../controller/category.js";

routes.post('/create/categories', createcategories)
routes.get('/all', getAllCategories)
export default routes