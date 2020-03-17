"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "premia",
      [
        {
          no_rek: 122122,
          proof_of_transfer: "transfer.jpg",
          breeder_id: 1,
          status: "Free"
        },
        {
          no_rek: 122221,
          proof_of_transfer: "transfer.jpg",
          breeder_id: 2,
          status: "Premium"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
