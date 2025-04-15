import { QueryInterface, UUIDV4 } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("tbl_profile", [
      {
        uuid: 'fc48da42-00fd-4f49-afb9-f906792ad5b0',
        profile: "Admin",
        description: "Administrator profile with full access",
        // created_at: new Date(),
        // updated_at: new Date(),
        // deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("tbl_profile", {});
  },
};