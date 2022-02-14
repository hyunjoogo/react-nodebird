const express = require('express');

const router = express.Router();

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try {
    console.log(req.user.id);
    const post = await Post.create({
      content: req.body.content,
      UserID: req.user.id, // 1
    });
    // 유저 아이디가 제대로 들어가는 것도 확인했고
    // 그런데 model 만드는 과정에서 UserID가 사라져
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
        attributes: ['id', 'nickname'],
      }, {
        model: Comment,
        attributes: ['id', 'nickname'],
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }],
    });
    res.status(201).send(fullPost);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post/postId/comment
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    console.log('UserId', req.user.id);
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserID: req.user.id,
    });
    res.status(201).send(comment);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
