const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");
app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
utils.resetDatabase();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//var jocAles = document.getElementById("jocAles").value;
app.post("/", (req, res) => {
  let Dbnume = String(req.body.nume);
  let Dbemail = String(req.body.email);
  let Dbjocales = String(req.body.jocAles);
  const persoanaInserata = {
    nume: Dbnume,
    email: Dbemail,
    jocAles: Dbjocales,
  };
  res.status(200).send(`Ai fost inregistrat/a cu succes, ${Dbnume}!`);
  utils.insertPerson(persoanaInserata);
});

app.listen(3306, () => {
  console.log("Server started on port 3306");
});