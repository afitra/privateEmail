'use strict';
module.exports = (sequelize, DataTypes) => {   
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'harus mengandung "@"'
        }, 
        isunique(value) {
          
          return User.findOne({
              where: {
                email: value
              }
            })
            .then(function (data) {
              if (data !== null) {
                throw new Error('email sudah exist')
              }
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      }
    },
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};