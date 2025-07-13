"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db_connection";

class Session extends Model {
  declare id: string;
  declare sessionToken: string;
  declare userId: string;
  declare expires: Date;
}

Session.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    sessionToken: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "session_token",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "sessions",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ["session_token"],
      },
      {
        fields: ["user_id"],
      },
    ],
  }
);

export default Session;
