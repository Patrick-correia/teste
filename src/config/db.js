import {Sequelize} from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;


console.log(dbHost)
console.log(dbUser)
console.log(dbPass)
console.log(dbName)

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
	dialect: "mysql",
	host: dbHost,
});

export default sequelize;