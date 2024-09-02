'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({Tweet, Like}) {
   this.hasMany(Tweet, {foreignKey: 'authorId', as: 'tweets'});
    this.belongsToMany(Tweet, {through: Like, foreignKey: 'authorId', as: 'likedTweets'})
    }
  }
  Author.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};
