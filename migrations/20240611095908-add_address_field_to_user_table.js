'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Users' , 'address' , {
    type:Sequelize.STRING,
    allowNull : false,
    defaultValue : null,
   });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Users' , 'address');
  }
};
