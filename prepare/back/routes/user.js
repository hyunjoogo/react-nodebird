const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();
// 유저 정보 - GET /user
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      res.status(200).json(fullUserWithoutPassword);
    }
    res.status(200).json(null);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 로그인 -  POST /user/login
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});
// 회원가입 - POST /user/
router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 로그아웃 - POST /user/logout
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});
// 닉네님 수정 - PATCH /user/nickname
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.body);
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 팔로우 - PATCH /user/1/follow
router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 언팔로우 - delete /user/1/unfollow
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    // 그 사람에게서 나를 팔로워로 제거
    await user.removeFollowers(req.user.id);
    // json으로 넘기는 것이 action.data가 된다.
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

// 팔로워(나를 팔로우한 사람) 목록 가지고 오기 - get /followers
router.get('/followers', isLoggedIn, async (req, res, next) => {
  try {
    // 1. 내 아이디를 먼저 찾고
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    // 2. 나를 팔로우한 사람 찾기
    const followers = await user.getFollowers();
    // json으로 넘기는 것이 action.data가 된다.
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});


// 팔로잉(내가 팔로우한 사람) 목록 가지고 오기 - GET /following
router.get('/followings', isLoggedIn, async (req, res, next) => {
  try {
    // 1. 내 아이디를 먼저 찾고
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    // 2. 나를 팔로우한 사람 찾기
    const followings = await user.getFollowings();
    // json으로 넘기는 것이 action.data가 된다.
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});
// 팔로워 차단하기 - DELETE /user/follower/2
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send('없는 사람을 차단하려고 하시네요?');
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
