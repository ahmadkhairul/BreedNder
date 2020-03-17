const models = require("../models");
const Species = models.species;

exports.index = async (req, res) => {
  try {
    const species = await Species.findAll();
    res
      .status(200)
      .send({ status: true, message: "get success", data: species });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.store = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const { name } = req.body;
      const check = await Species.findOne({ where: { name } });
      if (check) {
        res.status(203).send({ status: false, message: "species exist" });
      } else {
        const species = await Species.create(req.body);
        res.status(200).send({ status: true, message: "store success" });
      }
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

exports.destroy = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const { id } = req.params;
      const species = await Species.destroy({ where: { id } });
      res.status(200).send({ status: true, message: "delete success" });
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
