import express from "express";
const routes = express.Router()
import {createproduct,getAllProducts} from "../controller/category.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

routes.post('/create/product', upload.single('product_image'), createproduct)
routes.get('allp',getAllProducts)

export default routes