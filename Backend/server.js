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

// app.get('/login',(req,res)=>{
// const sql = "select * from login";
// db.query(sql,(err,data)=>{
//     if(err) return res.json(err);
//     return res.send(data);
// })
// })

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

 try{
  const insertQuery = "INSERT INTO register (`firstname`, `lastname`, `email`, `password`) VALUES (?,?,?,?)";
  const result = await query(insertQuery, [fname, lname, email, password]);
  console.log(result);
  if(result !== undefined && result !== "" ){
    res.status(200).send("User added");
  }else{
    res.status(400).send("Error");

  }

 }catch (err){
  console.log("error" , err);
  res.status(400).send(err);

 }
  // if (!req.body) {
  //   return res.status(400).json({ error: "Invalid request, no JSON data provided" });
  // }
  // db.query(sql, [values], (err, data) => {
  //   if (err) return res.json(err);
  //   return res.json(data);
  // });
});

// app.post('/login',(req,res)=>{
//   const registersql =
// })

app.listen(port, () => {
  console.log("listioning");
});
