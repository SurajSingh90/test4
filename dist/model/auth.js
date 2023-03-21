"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const uthschema = new _mongoose.default.Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    // match: '/.+\@.+\..+/',
    unique: true
  }
});
var _default = _mongoose.default.model('authschema', uthschema);
exports.default = _default;