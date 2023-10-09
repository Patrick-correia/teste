import {Sequelize} from 'sequelize'
import sequelize from "../config/db.js";


const emplooye = sequelize.define("emplooye",{
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true, // NOT NULL UNIQUE,
        autoIncrement: true,
    },
    email: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
})

export default emplooye;
