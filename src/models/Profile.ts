import { Model, DataTypes } from "sequelize";
import sequelize from ".";

class Profile extends Model {
  public id!: number;
  public uuid!: string;
  public profile!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null; // Soft delete
}

// Inicialização do modelo
Profile.init(
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
    profile: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: "CURRENT_TIMESTAMP",
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize: sequelize,
    modelName: "Profile",
    tableName: "tbl_profile",
    timestamps: true,
    paranoid: true,
    deletedAt: "deleted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Profile;
