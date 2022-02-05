module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
    // Model attributes are defined here
    // id가 기본적으로 들어있다.
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
  console.log(User === sequelize.models.User); // true
  User.associate = (db) => {};
  return User;
};
