"use strict";
module.exports = (sequelize, DataTypes) => {
	const premium = sequelize.define(
		"premium",
		{
			no_rek: DataTypes.STRING,
			proof_of_transfer: DataTypes.STRING,
			breeder_id: DataTypes.INTEGER,
			status: DataTypes.ENUM("Free", "Premium")
		},
		{}
	);
	premium.associate = function(models) {
		// associations can be defined here
		premium.belongsTo(models.user, {
			foreignKey: "breeder_id",
			as: "user"
		});
	};
	return premium;
};
