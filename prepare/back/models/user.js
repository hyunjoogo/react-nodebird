module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
    // Model attributes are defined here
    // id가 기본적으로 들어있다.
    // 자동적으로 카운팅되어서 올라간다.
    email: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false, // 필수
    },
  }, {
    // Other model options go here
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글저장
  });
  // `sequelize.define` also returns the model
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
  };
  return User;
};
