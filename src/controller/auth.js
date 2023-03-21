import Users from '../model/auth.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createusers = async (req, res) => {
  try {
    const existingUser = await Users.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(400).send({ message: 'Email already in use' });
    }
    // console.log("emailllll",existingUser)
    const userobj = {
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 12),
      email: req.body.email,
    };
    const result = await Users.create(userobj);

    res
      .status(200)
      .send({ message: 'user Create Succcesfully', result: result });
  } catch (error) {
    res.status(500).send({ message: 'Internal Error', error: error });
    console.log('erorr==>>', error);
  }
};

export const loginpage = async (req, res) => {
  const finduser = await Users.findOne({ name: req.body.name });
  try {
    if (!finduser) {
      res.status(404).send({ message: 'Users Not Founded' });
    }
    const validpassword = bcrypt.compareSync(
      req.body.password,
      finduser.password
    );
    if (!validpassword) {
      res.status(400).send({ msg: 'password is wrong' });
      return;
    }
    const token = jwt.sign(
      { id: finduser.userId },
      'surajsinghhdfjdnxkjcbskjbvsbcsmcjscdjhjcjfjhccdhjhbv',
      {
        expiresIn: 7100,
      }
    );
    res.send({
      name: finduser.name,
      email: finduser.email,
      acesstoken: token,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Error', error: error });
  }
};
