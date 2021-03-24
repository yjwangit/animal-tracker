const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(express.json());
const pgp = require("pg-promise")({}); 
// This is the path to DB 
var db = pgp("postgres://localhost:5432/animal");

app.get("/species", async (req, res) => {
  try { const species = await db.any("SELECT * FROM species;", [true]); console.log({ species }); res.json(species); } catch (e) { console.log(e); }
});

app.listen(port);//listen to the port