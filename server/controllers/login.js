const {User} = require('../models/register');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.Login = async(req, res) => {
  const {email, password } = req.body;
  const checkUser = await User.findOne({email: email});
  if(!checkUser) return res.status(400).send(`email is invalid`);
  
  const validPass = await bcrypt.compare(password, checkUser.password);

  if(!validPass) return res.status(400).send('password is invalid');

  const token = jwt.sign({_id: checkUser._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({token});
}