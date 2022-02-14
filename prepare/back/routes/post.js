const express = require('express');

const router = express.Router();

const { Post } = require('../models');
const { isLoggedIn } = require('./middlewares');

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserID: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{ model: Image }, { model: Comment }, { model: User }],
    });
    res.status(201).send(fullPost);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post/postId/comment
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
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
