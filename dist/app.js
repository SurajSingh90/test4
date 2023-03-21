"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _index = _interopRequireDefault(require("./routes/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.use('/api', _index.default);
_mongoose.default.connect('mongodb+srv://suraj:suraj@cluster0.gmc40jo.mongodb.net/test4').then(() => {
  console.log('mongoose contected succesfully');
}).catch(err => {
  console.error('error in connection', err);
});
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server Runing on port ${PORT}`);
});