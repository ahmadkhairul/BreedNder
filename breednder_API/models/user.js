"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      breeder: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      level: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.pet, {
      foreignKey: "breeder_id",
      as: "pet"
    });

    user.hasMany(models.message, {
      foreignKey: "messageTo",
      as: "message"
    });
  };
  return user;
};
