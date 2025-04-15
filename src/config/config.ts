import dotenv from 'dotenv';

dotenv.config();

const config:any = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "base-node-api-db",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    // seederStorage: "sequelize",
    // seederStorageTableName: "sequelize_seeds",
    // migrationStorage: "sequelize",
    // migrationStorageTableName: "sequelize_migrations"
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_TEST_HOST,
    dialect: "mysql",
    // seederStorage: "sequelize",
    // seederStorageTableName: "sequelize_seeds",
    // migrationStorage: "sequelize",
    // migrationStorageTableName: "sequelize_migrations"
  },
  production: {
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD_DATABASE,
    host: process.env.DB_PROD_HOST,
    dialect: "mysql",
    // seederStorage: "sequelize",
    // seederStorageTableName: "sequelize_seeds",
    // migrationStorage: "sequelize",
    // migrationStorageTableName: "sequelize_migrations"
  }
};

export default config;
