const models = require("../models");
const User = models.user;
const Pet = models.pet;
const Message = models.message;
const Macth = models.Macth;

exports.show = async (req, res) => {
  try {
    const id = req.user;
    const user = await User.findOne({
      where: { id },
      include: [
        {
          model: Pet,
          as: "pet",
          attributes: {
            exclude: ["breeder_id", "species_id", "createdAt", "updatedAt"]
          }
        },
        {
          model: Message,
          as: "message",
          attributes: ["id", "message"],
          include: [
            {
              model: User,
              as: "from",
              attributes: ["breeder"]
            }
          ]
        }
      ],
      attributes: {
        exclude: ["id", "password", "email", "createdAt", "updatedAt"]
      }
    });

    const { pet, message, breeder, phone, address, level } = user;
    const firstPet = pet[0].id;
    const data = {
      breeder,
      phone,
      address,
      level,
      firstPet,
      pet,
      message
    };
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    console.log(err);
    res.status(404).send({ status: false });
  }
};

exports.update = async (req, res) => {
  try {
    if (req.user == req.params.id) {
      const { id } = req.params;
      const user = await User.update(req.body, { where: { id } });
      const userData = await User.findOne({
        where: { id },
        attributes: { exclude: ["id", "password", "email", "level"] }
      });
      res
        .status(200)
        .send({ status: true, message: "update success", data: userData });
    } else {
      res.status(401).send({
        status: false,
        data: {}
      });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user;
    if (id == userId) {
      const user = await User.destroy({ where: { id } });
      res
        .status(200)
        .send({ status: true, message: "delete success", data: {} });
    } else {
      res.status(401).send({ status: false, message: "delete failed" });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
