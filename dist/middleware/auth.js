"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const tokenverify = (req, res, next) => {
  let token = req.headers['authorization'];
  token = token.split("Bearer ")[1];
  try {
    if (!token) {
      res.send("token is missing");
    }
    _jsonwebtoken.default.verify(token, "surajsinghhdfjdnxkjcbskjbvsbcsmcjscdjhjcjfjhccdhjhbv", (err, decode) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized!"
        });
      } else {
        req.name = decode.id;
        next();
      }
    });
  } catch (err) {
    res.status(401).send({
      message: " internal error ",
      err
    });
    console.log("the Error is ", err);
  }
};
var _default = {
  tokenverify
};
exports.default = _default;