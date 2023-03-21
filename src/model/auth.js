import mongoose from 'mongoose';
const uthschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    // match: '/.+\@.+\..+/',
    unique: true,
    
  },
});

export default mongoose.model('authschema', uthschema);
