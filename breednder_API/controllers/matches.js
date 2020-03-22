const models = require("../models");
const { handler, showHandler } = require("../middleware/matchHandler");
const { Op } = require("sequelize");
const Match = models.match;
const Pet = models.pet;
const Species = models.species;
const User = models.user;

exports.matches = async (req, res) => {
  try {
    const { pet_id, status } = req.params;
    const data = await Match.findAll({
      where: { pet_id, status },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [
        {
          model: Pet,
          as: "pet_liked",
          attributes: ["id", "name", "gender", "age", "about_pet", "photo"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "breeder", "address", "phone"]
            }
          ]
        }
      ]
    });

    res.status(200).send({
      status: true,
      message: "succes",
      data
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({ status: false });
  }
};

exports.show = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.params;
    const match = await Match.findOne({
      where: {
        [Op.or]: [
          { pet_id, pet_id_liked },
          { pet_id: pet_id_liked, pet_id_liked: pet_id }
        ]
      }
    });
    if (match) {
      const pet = await showHandler(pet_id);
      const pet_liked = await showHandler(pet_id_liked);

      res.status(200).send({
        status: true,
        message: "Pet Matched",
        data: {
          id: match.id,
          status: match.status,
          pet,
          pet_liked,
          createAt: match.createdAt,
          updateAt: match.updatedAt
        }
      });
    } else {
      res.status(204).send({ message: "No content" });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.store = async (req, res) => {
  try {
    const { pet_id, pet_id_liked, status } = req.body;
    const match = await Match.findOne({
      where: { pet_id, pet_id_liked }
    });
    const checkMatch = await Match.findOne({
      where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
    });

    if (!match) {
      if (!checkMatch) {
        matched = await Match.create(req.body);
        message = "Pet Match Created";
        id = matched.id;
      } else if (checkMatch.status === "true") {
        message = "Pet Match Already Exist";
        id = checkMatch.id;
      } else {
        matched = await Match.update(
          { status: "true" },
          { where: { id: checkMatch.id } }
        );
        message = "Pet Match Updated";
        id = checkMatch.id;
      }
    } else {
      message = "Pet Match Already Exist";
      id = match.id;
    }

    const data = await handler(id);
    res.status(200).send({
      status: true,
      message,
      data
    });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.update = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const match = await Match.update({ status }, { where: { id } });
    const data = await handler(id);

    res.status(200).send({
      status: true,
      message: "Pet Match Updated",
      data: data
    });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
