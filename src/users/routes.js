'use strict';

const Joi = require('joi');
const handler = require('./handlers');

module.exports = [{
  method : 'POST',
  path : '/api/v1/users/',
  handler: handler.create, config : {
    validate : {
      payload : Joi.object({
        username : Joi.string().required(),
        password : Joi.string().required()
      })
    }
  }
}];