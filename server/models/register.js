const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    maxlength: 255
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  confirm: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  profilePic: {
    type: String,
    required: true,
  }
})

 exports.validation = (body) => {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).email().required(),
    username: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
    confirm: Joi.string().min(5).max(255).required(),
    profilePic: Joi.string().required()
  }

  return Joi.validate(body, schema)
}

exports.User = mongoose.model('User', Schema);

