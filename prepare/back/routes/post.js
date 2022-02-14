const express = require('express');

const router = express.Router();

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserID: req.user.id, // 1
    });
    console.log(req.user.id);
    // 그런데 model 만드는 과정에서 UserID가 사라져
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
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
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserID: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    });


    res.status(201).send(fullComment);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
