import Categorie from '../model/category.js';
import product from '../model/product.js';
export const createcategories = async (req, res) => {
  try {
    const obj = {
      category_name: req.body.category_name,
      category_id: req.body.category_id,
     
    };
    const result = await Categorie.create(obj);
    res.status(200).send({ msg: 'create sucesfully', result: result });
  } catch (error) {
    res.status(500).send({ message: 'Internal Error', error: error });
    console.log('erorr==>>', error);
  }
};

// export const getcategerieswithproduct = async (req, res) => {
//   try {
//     Categorie.find({})
//       .populate('product')
//       .then((err, categories) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.send('categories', { categories });
//         }
//       });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Error', error: error });
//     console.log('erorr==>>', error);
//   }
// };


export const getAllCategories = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
  
      const count = await Categorie.countDocuments();
      const categories = await Categorie.find({})
        .populate('products')
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.json({
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        categories
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createproduct = async (req, res) => {
    try {
      const prdobj = {
        product_name: req.body.product_name,
        description: req.body.description,
        categorie: req.body.categorie,
        product_image: req.file.filename,
      };
        const result = await product.create(prdobj);
        await Categorie.findByIdAndUpdate(Categorie, { $push: { products: result._id } });
      res.send({ result: result });
    } catch (error) {
      res.status(500).send({ message: 'Internal Error', error: error });
      console.log('erorr==>>', error);
    }
};


export const getAllProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
  
      const count = await product.countDocuments();
      const products = await product.find({})
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.json({
        total: count,
        page: parseInt(page),
        limit: parseInt(limit),
        products
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  