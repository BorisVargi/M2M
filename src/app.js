const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const {Tweet, Author, Like} = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.get('/api/author/:id', async (req, res) =>{  
try {
      const {id} = req.params;
      const allHisTweets = await Tweet.findAll({where: {authorId: id}})
      return res.json(allHisTweets)
} catch (error) {
  console.log(error);
  }
})

app.get('/api/author', async (req, res) =>{  
  try {
        const allAuthors = await Author.findAll()
        return res.json(allAuthors)
  } catch (error) {
    console.log(error);
    }
  })

  app.get('/api/tweet', async (req, res) =>{  
    try {
          const allTweets = await Tweet.findAll()
          return res.json(allTweets)
    } catch (error) {
      console.log(error);
      }
    })

    // app.get('/api/like', async (req, res) =>{  
    //   try {
    //         const allLikes = await Author.findAll()
    //         return res.json(allLikes)
    //   } catch (error) {
    //     console.log(error);
    //     }
    //   })

    app.get('/api/authorLiked/:id', async (req, res) =>{  
      try {
            const {id} = req.params;
            const allHisLikedTweets = await Author.findByPk(id, {include: 'likedTweets'} )
            return res.json(allHisLikedTweets.likedTweets)
      } catch (error) {
        console.log(error);
        }
      })

      app.get('/api/tweetLikedBy/:id', async (req, res) =>{  
        try {
              const {id} = req.params;
              const allHisLikedUsers = await Tweet.findByPk(id, {include: 'LikedByAuthor'} )
              return res.json(allHisLikedUsers.LikedByAuthor)
        } catch (error) {
          console.log(error);
          }
        })

module.exports = app;
