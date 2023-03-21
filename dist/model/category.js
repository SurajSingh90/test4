"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const categorieschema = new _mongoose.default.Schema({
  category_name: {
    type: String,
    require: true,
    unique: true
  },
  category_id: {
    type: String,
    require: true
  }
});
var _default = _mongoose.default.model('categories', categorieschema);
exports.default = _default;