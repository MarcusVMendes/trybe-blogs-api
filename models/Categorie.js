module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });
  
  return Categorie;
};