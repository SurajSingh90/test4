// const Category = require('../models/category');
// // const Product = require('../models/product');

// const ITEMS_PER_PAGE = 10;

// exports.getCategoriesWithProducts = async (req, res, next) => {
//   const page = +req.query.page || 1;
//   let totalCategories;

//   try {
//     totalCategories = await Category.countDocuments();
//   } catch (err) {
//     return next(err);
//   }

//   try {
//     const categories = await Category.aggregate([
//       {
//         $lookup: {
//           from: 'products',
//           localField: '_id',
//           foreignField: 'category',
//           as: 'products'
//         }
//       },
//       {
//         $project: {
//           _id: 1,
//           category_name: 1,
//           category_id: 1,
//           product_count: { $size: '$products' }
//         }
//       },
//       {
//         $skip: (page - 1) * ITEMS_PER_PAGE
//       },
//       {
//         $limit: ITEMS_PER_PAGE
//       }
//     ]);

//     res.render('categories', {
//       categories,
//       currentPage: page,
//       hasNextPage: ITEMS_PER_PAGE * page < totalCategories,
//       hasPreviousPage: page > 1,
//       nextPage: page + 1,
//       previousPage: page - 1,
//       lastPage: Math.ceil(totalCategories / ITEMS_PER_PAGE)
//     });
//   } catch (err) {
//     return next(err);
//   }
// };

// exports.getCategoryById = async (req, res, next) => {
//   const { categoryId } = req.params;

//   try {
//     const category = await Category.findById(categoryId);

//     if (!category) {
//       return res.status(404).send('Category not found');
//     }

//     res.render('category', { category });
//   } catch (err) {
//     return next(err);
//   }
// };

// exports.getCreateCategoryForm = (req, res) => {
//   res.render('create-category');
// };

// exports.postCreateCategory = async (req, res, next) => {
//   const { category_name, category_id } = req.body;

//   const category = new Category({ category_name, category_id });

//   try {
//     await category.save();
//     res.redirect('/categories');
//   } catch (err) {
//     return next(err);
//   }
// };
"use strict";