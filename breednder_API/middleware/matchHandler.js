const models = require("../models");
const Match = models.match;
const Pet = models.pet;
const User = models.user;
const Species = models.species;

exports.handler = async id => {
  try {
    const data = await Match.findOne({
      include: [
        {
          model: Pet,
          as: "pet",
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: Species,
              as: "species",
              attributes: ["id", "name"]
            }
          ],
          attributes: ["id", "name", "gender", "age", "about_pet", "photo"]
        },
        {
          model: Pet,
          as: "pet_liked",
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: Species,
              as: "species",
              attributes: ["id", "name"]
            }
          ],
          attributes: ["id", "name", "gender", "age", "about_pet", "photo"]
        }
      ],
      attributes: { exclude: ["pet_id", "pet_id_liked"] },
      where: { id }
    });

    return data;
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.showHandler = async id => {
  try {
    const pet = await Pet.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "breeder", "address", "phone"]
        },
        {
          model: Species,
          as: "species",
          attributes: ["id", "name"]
        }
      ],
      attributes: {
        exclude: ["breeder_id", "species_id", "createdAt", "updatedAt"]
      }
    });
    return pet;
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
