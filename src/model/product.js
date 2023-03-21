import mongoose from "mongoose";
const productschmea = new mongoose.Schema({
    product_name: {
        type: String,
        unique:true
    },
    description: {
        type: String,
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require:true
    },
    product_image: {
        type: String,
        required: true
    }
})

export default mongoose.model('product', productschmea)