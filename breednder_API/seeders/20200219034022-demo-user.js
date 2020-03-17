"use strict";
const bcrypt = require("bcrypt");

function hash(pwd) {
  return bcrypt.hashSync(pwd, 10);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return queryInterface.bulkInsert(
        "users",
        [
          {
            email: "admin@breeder.com",
            password: hash("admin"),
            breeder: "admin breeder",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: "Admin",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email: "juan@mail.com",
            password: hash("juan"),
            breeder: "Juan Carlos",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email: "mey@gmail.com",
            password: hash("mey"),
            breeder: "Mey Melisa",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    } catch (err) {
      console.log(err);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
