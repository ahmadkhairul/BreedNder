"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "John",
          gender: "Male",
          species_id: 1,
          age: "Teen",
          breeder_id: 2,
          about_pet: "Pet ini suka minum air selokan",
          photo: "1.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Martha",
          gender: "Male",
          species_id: 1,
          age: "Adult",
          breeder_id: 3,
          about_pet: "Pet ini suka minum air selokan",
          photo: "2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bruno",
          gender: "Female",
          species_id: 2,
          age: "Adult",
          breeder_id: 3,
          about_pet: "Pet ini suka minum air selokan",
          photo: "3.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Martha",
          gender: "Female",
          species_id: 2,
          age: "Adult",
          breeder_id: 2,
          about_pet: "Pet ini suka minum air selokan",
          photo: "4.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Pets', null, {});
  
  }
};
