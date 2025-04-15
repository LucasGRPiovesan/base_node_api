import { Model, DataTypes } from "sequelize";
import sequelize from ".";
import Profile from "./Profile"; // Importando a Model Profile

class User extends Model {
  public id!: number;
  public uuid!: string;
  public uuid_profile!: string;
  public name!: string;
  public mail!: string;
  private password!: string;
  public status!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null; // Soft delete
}

// Inicialização do modelo
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
    uuid_profile: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_profile',
        key: 'uuid'
      }
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
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: "CURRENT_TIMESTAMP",
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: "User",
    tableName: "tbl_user",
    timestamps: true,
    paranoid: true,
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

User.belongsTo(Profile, {
  foreignKey: 'uuid_profile',
  targetKey: 'uuid',
  as: 'profile'
});

export default User;
