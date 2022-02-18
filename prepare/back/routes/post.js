const express = require('express');

const router = express.Router();

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

// 게시글 작성
router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User, // 좋아요 누른사람
        as: 'Likers', // model에서 관계형 정의할 때 설정한 이름
        attributes: ['id'],
      }],
    });
    res.status(201).send(fullPost);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 답글 작성
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
      UserId: req.user.id,
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
// 게시글 좋아요
router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
  try {
    // 개시글이 있는지 확인
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 게시글 좋아요 취소
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});


// 게시글 삭제
router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/1
  try {
    // 게시글이 존재하는가?
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    // 해당 게시글 삭제
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
