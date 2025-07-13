"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db_connection";

class Account extends Model {
  declare id: string;
  declare userId: string;
  declare type: string;
  declare provider: string;
  declare providerAccountId: string;
  declare refresh_token?: string | null;
  declare access_token?: string | null;
  declare expires_at?: number | null;
  declare token_type?: string | null;
  declare scope?: string | null;
  declare id_token?: string | null;
  declare session_state?: string | null;
}

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    providerAccountId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "provider_account_id",
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    access_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    expires_at: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    token_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scope: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    session_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "accounts",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        fields: ["user_id"],
      },
      {
        unique: true,
        fields: ["provider", "provider_account_id"],
      },
    ],
  }
);

export default Account;
