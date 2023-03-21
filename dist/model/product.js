"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productschmea = new _mongoose.default.Schema({
  product_name: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  categorie: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Category'
  },
  product_image: {
    type: String,
    required: true
  }
});
var _default = _mongoose.default.model('product', productschmea);
exports.default = _default;