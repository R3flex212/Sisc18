const { Sequelize, DataTypes } = require("sequelize");

const database = new Sequelize("datepersoane", "root", "", {
  dialect: "mysql",
  host: "127.0.0.1",
  logging: false,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

const formular = database.define("persoane", {
/*  Id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },*/
  nume: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jocAles: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

function resetDatabase() {
  return database
    .sync({ force: true })
    .then(() => {
      return "succes!";
    })
    .catch((reason) => {
      return "eroare";
    });
}

function insertPerson(person) {
  return formular
    .create(person)
    .then(() => {
      return "succes!";
    })
    .catch((err) => {
      console.log(err);
      return "eroare!";
    });
}

module.exports = {
  resetDatabase,
  insertPerson,
};