"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = require("../controller/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = _express.default.Router();
routes.post('/create/users', _auth.createusers);
routes.post('/login/users', _auth.loginpage);
var _default = routes;
exports.default = _default;