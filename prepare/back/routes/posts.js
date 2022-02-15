const express = require('express');
const { Post, Image, User, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [{
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 답글 작성자
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 좋아요 누른사람
        as: 'Likers', // model에서 관계형 정의할 때 설정한 이름
        attributes: ['id'],
      }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
