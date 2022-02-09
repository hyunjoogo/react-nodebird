module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    // Model attributes are defined here
    // id가 기본적으로 들어있다.
    src: {
      type: DataTypes.STRING(200),
      allowNull: false, // 필수
    },
  }, {
    // Other model options go here
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  // `sequelize.define` also returns the model
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
