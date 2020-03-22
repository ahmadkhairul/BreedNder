"use strict";
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define(
    "message",
    {
      message: DataTypes.TEXT,
      messageFrom: DataTypes.INTEGER,
      messageTo: DataTypes.INTEGER
    },
    {}
  );
  message.associate = function(models) {
    message.belongsTo(models.user, {
      foreignKey: "messageFrom",
      as: "from"
    });

    message.belongsTo(models.user, {
      foreignKey: "messageTo",
      as: "to"
    });
  };
  return message;
};
