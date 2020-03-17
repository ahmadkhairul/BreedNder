"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      species_id: DataTypes.INTEGER,
      age: DataTypes.ENUM("Adult", "Teen", "Young"),
      breeder_id: DataTypes.INTEGER,
      about_pet: DataTypes.TEXT,
      photo: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    // associations can be defined here
    pet.belongsTo(models.user, {
      foreignKey: "breeder_id",
      as: "user"
    });

    pet.belongsTo(models.species, {
      foreignKey: "species_id",
      as: "species"
    });
  };
  return pet;
};
