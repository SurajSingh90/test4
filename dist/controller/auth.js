"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginpage = exports.createusers = void 0;
var _auth = _interopRequireDefault(require("../model/auth"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createusers = async (req, res) => {
  try {
    const existingUser = await _auth.default.findOne({
      email: req.body.email
    });
    if (existingUser) {
      res.status(400).send({
        message: 'Email already in use'
      });
    }
    // console.log("emailllll",existingUser)
    const userobj = {
      name: req.body.name,
      password: _bcrypt.default.hashSync(req.body.password, 12),
      email: req.body.email
    };
    const result = await _auth.default.create(userobj);
    res.status(200).send({
      message: 'user Create Succcesfully',
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
exports.createusers = createusers;
const loginpage = async (req, res) => {
  const finduser = await _auth.default.findOne({
    name: req.body.name
  });
  try {
    if (!finduser) {
      res.status(404).send({
        message: 'Users Not Founded'
      });
    }
    const validpassword = _bcrypt.default.compareSync(req.body.password, finduser.password);
    if (!validpassword) {
      res.status(400).send({
        msg: 'password is wrong'
      });
      return;
    }
    const token = _jsonwebtoken.default.sign({
      id: finduser.userId
    }, 'surajsinghhdfjdnxkjcbskjbvsbcsmcjscdjhjcjfjhccdhjhbv', {
      expiresIn: 7100
    });
    res.send({
      name: finduser.name,
      email: finduser.email,
      acesstoken: token
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Error',
      error: error
    });
  }
};
exports.loginpage = loginpage;