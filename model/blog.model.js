const { DataTypes } = require('sequelize');
const {sequelize}= require("../config/config")
const User=require("./user.model")

const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  
  User.hasMany(Post);
  Post.belongsTo(User);
  sequelize.sync()

  module.exports=Post