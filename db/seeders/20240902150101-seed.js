'use strict';

const { Author, Tweet, Like } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Author.bulkCreate([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }], {});
    await Tweet.bulkCreate(
      [
        { authorId: 1, text: 'Hello world!' },
        { authorId: 2, text: 'Sequelize is awesome!' },
        { authorId: 3, text: 'I love coding!' },
      ],
      {},
    );
    await Like.bulkCreate([
      { authorId: 1, tweetId: 2 }, // 
      { authorId: 2, tweetId: 1 }, // 
      { authorId: 3, tweetId: 1 }, // 
      { authorId: 3, tweetId: 2 }, //  
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};


