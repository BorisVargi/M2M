'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate({Author, Like}) {
      this.belongsTo(Author, {foreignKey: 'authorId', as: 'author'})
      this.belongsToMany(Author, {through: Like, foreignKey: 'tweetId', as: 'LikedByAuthor'})
    }
  }
  Tweet.init({
    text: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};
