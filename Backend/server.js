const express = require("express");
const db = require("./dbconfig");
const cors = require("cors");
const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("BackEnd side");
});

// app.get('/login',(req,res)=>{
// const sql = "select * from login";
// db.query(sql,(err,data)=>{
//     if(err) return res.json(err);
//     return res.json(data);
// })
// })

app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO register (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
  if (!req.body) {
    return res
      .status(400)
      .json({ error: "Invalid request, no JSON data provided" });
  }
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log("listioning");
});
