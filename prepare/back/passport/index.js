const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  // req.user의 정보가 user로 들어간다.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // 로그인이 성공하고 나서 router가 실행되기전에 매번 실행이되서
  // req.user에 user.id가 들어가 있다.
  passport.deserializeUser(async (id, done) => {
    try {
      await User.findOne({ where: { id } });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
