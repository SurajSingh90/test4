"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createcategories = void 0;
var _category = _interopRequireDefault(require("../model/category"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createcategories = async (req, res) => {
  try {
    const obj = {
      category_name: req.body.category_name,
      category_id: req.body.category_id
    };
    const result = await _category.default.create(obj);
    res.status(200).send({
      msg: "create sucesfully",
      result: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Error',
      error: error
    });
    console.log('erorr==>>', error);
  }
};
exports.createcategories = createcategories;