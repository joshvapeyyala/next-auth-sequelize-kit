"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db_connection";

class VerificationToken extends Model {
  declare identifier: string;
  declare token: string;
  declare expires: Date;
}

VerificationToken.init(
  {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "verification_tokens",
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ["token"],
      },
    ],
  }
);

export default VerificationToken;
