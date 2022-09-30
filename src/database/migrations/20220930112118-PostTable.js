'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {console.log("@@@@@@@@@@@@");
    await queryInterface.createTable('Posts', {
      
   
      uid:{
        type:Sequelize.INTEGER,
        references: {
          model: 'Esers', // name of Target model
          key: 'uid', // key in Target model that we're referencing
        },
      },

      firstName: {
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};