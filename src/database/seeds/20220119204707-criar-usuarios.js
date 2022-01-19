const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'johndoe@mail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe Two',
          email: 'johndoetwo@mail.com',
          password_hash: await bcryptjs.hash('123789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe Three',
          email: 'johndoethree@mail.com',
          password_hash: await bcryptjs.hash('456987', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
};
