module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
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
  // `sequelize.define` also returns the model
  console.log(Comment === sequelize.models.Comment); // true
  Comment.associate = (db) => {};
  return Comment;
};
