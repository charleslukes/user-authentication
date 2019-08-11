const {User, validation} = require('../models/register');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const {error} = validation(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  // check if email or username have been taken
  const checkMail = await User.findOne({email: req.body.email});
  const checkUsername = await User.findOne({username: req.body.username});

  if (checkMail) return res.status(404).send(`email already taken`)
  if (checkUsername) return res.status(404).send(`username already taken`)
  
  const {name, email, username, password, confirm, profilePic} = req.body
  if (password !== confirm) return res.status(404).send(`Password doesnt match`);

  //hash the users password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name: name,
    email: email,
    username: username,
    password: hashPassword,
    profilePic: profilePic
  })

  await user.save();
  res.send(user);

  
}

