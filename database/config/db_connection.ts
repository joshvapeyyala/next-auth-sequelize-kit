import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: require('mysql2'),
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ Database Connection has been established successfully."))
  .catch((err: Error) => console.error("❌ Unable to connect to the database:", err));

export default sequelize;
