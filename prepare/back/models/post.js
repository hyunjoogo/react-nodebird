module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    // Model attributes are defined here
    // id가 기본적으로 들어있다.
    content: {
      type: DataTypes.TEXT,
      allowNull: false, // 필수
    },
  }, {
    // Other model options go here
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장 가능
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Liker' });
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
};
