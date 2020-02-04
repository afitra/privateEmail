require("dotenv").config();
// var hstore = require('pg-hstore')();
const Model = require("../models");
// let hasher=require('../helpers/hasher')
// let parser=require('../helpers/parser')
// let decriptor=require('../helpers/decriptor')
// const bcrypt = require('bcrypt');
// const {saltUUID,saltID} = process.env
var result = {};
// var salt = bcrypt.genSaltSync(saltUUID);
var jwt = require("jsonwebtoken");

class userController {
  static getAllUser(req, res) {
    Model.User.findAll({})
      .then(function(data) {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  static register(req, res) {
    let obj = {
      firstName: req.body.firstName ? req.body.firstName : null,
      lastName: req.body.lastName ? req.body.lastName : null,
      email: req.body.email ? req.body.email : null,
      phone: req.body.phone ? req.body.phone : null,
      address: req.body.address ? req.body.address : null
    };

    Model.User.create(obj)
      .then(data => {
        console.log(data);
        res.status(201).json(data);
      })
      .catch(err => {
        res.send(err.message);
      });
  }
}

module.exports = userController;
