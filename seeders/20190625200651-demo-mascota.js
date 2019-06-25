'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mascotas', [
      {
        raza: 'chihuahua',
        precio: '200',
        tamaño: 'chico',
        color: 'negro',
        sexo: 'macho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Pug',
        precio: '2000',
        tamaño: 'chico',
        color: 'cafe',
        sexo: 'macho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Husky',
        precio: '10000',
        tamaño: 'grande',
        color: 'blanco',
        sexo: 'macho',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Maltes',
        precio: '100',
        tamaño: 'mediano',
        color: 'blanco',
        sexo: 'macho',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mascotas', null, {});
  }
};
