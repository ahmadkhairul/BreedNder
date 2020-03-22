const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const User = models.user;
const Pet = models.pet;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        const { breeder, email, level } = user;
        res
          .status(200)
          .send({ status: true, data: { breeder, email, level, token } });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    } else {
      res.status(403).send({ status: false, data: {} });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.register = async (req, res) => {
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const { breeder, email, phone, address, pet } = req.body;
    const { name, gender, age } = pet;
    const species = pet.species.id;
    const level = "user";

    const check = await User.findOne({ where: { email } });
    if (check) {
      res.status(401).send({ status: false, data: {} });
    } else {
      const user = await User.create({
        breeder,
        email,
        password,
        phone,
        address,
        level
      });

      const userId = user.dataValues.id;
      const petReg = await Pet.create({
        name,
        gender,
        species_id: species,
        age,
        breeder_id: userId
      });

      if (user && petReg) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.status(200).send({ status: true, data: { email, level, token } });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.auth = async (req, res) => {
  try {
    const id = req.user;
    const data = await User.findOne({
      where: { id },
      attributes: ["breeder", "email", "level"]
    });
    if (data) {
      res.status(200).send({ status: true, message: "succes", data });
    } else {
      res
        .status(203)
        .send({ status: false, message: "user not found", data: {} });
    }
  } catch (err) {
    res
      .status(401)
      .send({ status: false, message: "Authorization not Allowed" });
  }
};
