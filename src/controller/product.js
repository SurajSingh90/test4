// import Product from '../model/product.js';

// export const createproduct = async (req, res) => {
//   try {
//     const prdobj = {
//       product_name: req.body.product_name,
//       description: req.body.description,
//       // categorie: req.body.categorie,
//       product_image: req.file.filename,
//     };
//     const result = await Product.create(prdobj);
//     res.send({ result: result });
//   } catch (error) {
//     res.status(500).send({ message: 'Internal Error', error: error });
//     console.log('erorr==>>', error);
//   }
// };
