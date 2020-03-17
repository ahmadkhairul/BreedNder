const models = require("../models");
const Premium = models.premium;
const User = models.user;

exports.index = async (req, res) => {
	try {
		if (req.level == "Admin") {
			const data = await Premium.findAll({
				include: [
					{
						model: User,
						as: "user",
						attributes: [
							"id",
							"breeder",
							"address",
							"phone",
							"createdAt",
							"updatedAt"
						]
					}
				],
				attributes: {
					exclude: ["breeder_id", "createdAt", "updatedAt"]
				}
			});
			res.status(200).send({ message: "success", data });
		} else {
			res.status(401).send({
				status: false,
				message: "Authorization not Allowed"
			});
		}
	} catch (err) {
		res.status(404).send({ status: false });
	}
};

exports.store = async (req, res) => {
	try {
		if (req.level == "User") {
			const { no_rek, proof_of_transfer, status } = req.body;
			const breeder_id = req.user;
			const premium = await Premium.create({
				no_rek,
				proof_of_transfer,
				breeder_id,
				status
			});

			const data = await Premium.findOne({
				where: { id: premium.id },
				include: [
					{
						model: User,
						as: "user",
						attributes: [
							"id",
							"breeder",
							"address",
							"phone",
							"createdAt",
							"updatedAt"
						]
					}
				],
				attributes: {
					exclude: ["id", "breeder_id", "createdAt", "updatedAt"]
				}
			});
			res.status(200).send({ status: true, message: "success", data });
		} else {
			res.status(401).send({
				status: false,
				message: "Authorization not Allowed"
			});
		}
	} catch (err) {
		res.status(404).send({ status: false });
	}
};

exports.update = async (req, res) => {
	try {
		if (req.level == "Admin") {
			const { status } = req.body;
			const { id } = req.params;
			const premium = await Premium.update({ status }, { where: { id } });

			const data = await Premium.findOne({
				where: { id },
				include: [
					{
						model: User,
						as: "user",
						attributes: [
							"id",
							"breeder",
							"address",
							"phone",
							"createdAt",
							"updatedAt"
						]
					}
				],
				attributes: {
					exclude: ["breeder_id", "createdAt", "updatedAt"]
				}
			});
			res.status(200).send({ status: true, message: "success", data });
		} else {
			res.status(401).send({
				status: false,
				message: "Authorization not Allowed"
			});
		}
	} catch (err) {
		res.status(404).send({ status: false });
	}
};
