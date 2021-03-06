const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const {Post, Image, Comment, User, Hashtag} = require('../models');
const {isLoggedIn} = require('./middlewares');

// 이미지 업로드 전용 - POST /post/images
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) { // 제로초.png
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      console.log(basename);
      done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: {fileSize: 20 * 1024 * 1024}, // 20MB
});
// 게시글 작성
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST /post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
        where: {name: tag.slice(1).toLowerCase()},
      }))); // [[노드, true], [리액트, true]]
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const images = await Promise.all(req.body.image.map((image) => Image.create({
          src: image,
        })));
        await post.addImages(images);
      } else { // 이미지를 하나만 올리면 image: 제로초.png
        const image = await Image.create({src: req.body.image});
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: {id: post.id},
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

// 파일이 두개 이상 array , 한개 single, 두개의 input일 때는 fields
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => { // POST /post/1/retweet
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
      include: [{
        model: Post,
        as: 'Retweet',
      }],
    });
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
    }
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send('이미 리트윗했습니다.');
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });
    const retweetWithPrevPost = await Post.findOne({
      where: {id: retweet.id},
      include: [{
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }],
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


// 답글 작성
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post/postId/comment
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
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
      where: {id: comment.id},
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
    const post = await Post.findOne({where: {id: req.params.postId}});
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.addLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 게시글 좋아요 취소
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
  try {
    const post = await Post.findOne({where: {id: req.params.postId}});
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({PostId: post.id, UserId: req.user.id});
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});


// 게시글 삭제
router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/1
  try {
    // 게시글이 존재하는가?
    const post = await Post.findOne({where: {id: req.params.postId}});
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
    res.status(200).json({PostId: parseInt(req.params.postId, 10)});
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
