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
        res.status(200).send({ status: true, data: { email, token } });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    } else {
      res.status(401).send({ status: false, data: {} });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.register = async (req, res) => {
  try {
    const password = await bcrypt.hashSync(req.body.password, 10);
    const { breeder, email, phone, address, pet } = req.body;
    const { name, gender } = pet;
    const species = pet.species.id;
    const age = pet.age.name;
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
        res
          .status(200)
          .send({ status: true, message: "success", data: { email, token } });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["id", "password", "email", "level"] }
    });
    res.status(200).send({ status: true, message: "success", data: user });
  } catch (err) {
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
      res.status(200).send({ status: true, message: "delete success", data: {} });
    } else {
      res.status(401).send({ status: false, message: "delete failed" });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
