"use strict";
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      pet_id: DataTypes.INTEGER,
      pet_liked_id: DataTypes.INTEGER,
      status: DataTypes.ENUM("True", "False")
    },
    {}
  );
  match.associate = function(models) {
    // associations can be defined here
    match.belongsTo(models.pet, {
      foreignKey: "pet_id",
      as: "pet"
    });
    match.belongsTo(models.pet, {
      foreignKey: "pet_liked_id",
      as: "pet_liked"
    });
  };
  return match;
};
