import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("tbl_user", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
      uuid_profile: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "tbl_profile",
          key: "uuid",
        },
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: 'CURRENT_TIMESTAMP'
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("tbl_user");
  },
};