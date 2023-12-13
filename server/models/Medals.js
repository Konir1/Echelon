const Sequelize = require("sequelize");
const db = require("../database");

const Medals = db.sequelize.define(
  "medals",
  {
    medal_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    medal_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    medal_description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Medals;
