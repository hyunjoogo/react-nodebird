module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    // Model attributes are defined here
    // id가 기본적으로 들어있다.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false, // 필수
    },
  }, {
    // Other model options go here
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장 가능
  });
  // `sequelize.define` also returns the model
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
