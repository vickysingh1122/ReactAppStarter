const express = require("express");
const db = require("./dbconfig");
const cors = require("cors");
const util = require("util");
const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

const query = util.promisify(db.query).bind(db);

app.get("/", (req, res) => {
  return res.json("BackEnd side");
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const insertQuery =
      "INSERT INTO register (`firstname`, `lastname`, `email`, `password`) VALUES (?,?,?,?)";
    const result = await query(insertQuery, [fname, lname, email, password]);
    if (result !== undefined && result !== "") {
      const insertLogin = "insert into login (email,password) values (?,?) ";
      const results = await query(insertLogin, [email, password]);
      console.log(results);
      res.status(200).send("User added");
    } else {
      res.status(400).send("Error");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const loginSql = "select * from login where email = ? and password = ? ";
  const loginResult = await query(loginSql, [email, password]);
  console.log(loginResult);
  try {
    if (loginResult !== undefined && loginResult !== "") {
      res.status(200).send("login successfully");
    } else {
      res.status(400).send("login Failed");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log("listioning");
});
