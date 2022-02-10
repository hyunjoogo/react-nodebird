const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  // req.user의 정보가 user로 들어간다.
  passport.serializeUser((user, done) => {
    done(user.id);
  });

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
