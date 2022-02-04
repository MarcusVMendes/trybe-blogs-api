module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};