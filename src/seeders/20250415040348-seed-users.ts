import { QueryInterface, UUIDV4 } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("tbl_user", [
      {
        uuid: 'f0bacbce-0564-4ad9-926c-eca9c5fe33f2',
        uuid_profile: 'fc48da42-00fd-4f49-afb9-f906792ad5b0',
        name: "Lucas",
        mail: "lucas.piovesan.dev@gmail.com",
        password: "123456",
        // created_at: new Date(),
        // updated_at: new Date(),
        // deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("tbl_user", {});
  },
};