import mongoose from 'mongoose';
const categorieschema = new mongoose.Schema({
  category_name: {
    type: String,
    require: true,
    unique: true,
  },

  category_id: {
    type: String,
    require: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

export default mongoose.model('categories', categorieschema);
