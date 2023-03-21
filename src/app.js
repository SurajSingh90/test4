import express from 'express';
import mongoose from 'mongoose';
import category from './model/category.js';

import authroute  from './routes/index.js';
import productroute from "./routes/index.js";
const app = express();
app.use(express.json());
app.use('/api',authroute, category,productroute);

app.use('/images',express.static('uploads'))
mongoose
  .connect('mongodb+srv://suraj:suraj@cluster0.gmc40jo.mongodb.net/test4')
  .then(() => {
    console.log('mongoose contected succesfully');
  })
  .catch((err) => {
    console.error('error in connection', err);
  });

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server Runing on port ${PORT}`);
});
