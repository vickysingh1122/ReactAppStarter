const express = require('express');
const db = require('./dbconfig');
const cors = require('cors');
const port = 8081;

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    return res.json("BackEnd side");
})

app.get('/login',(req,res)=>{
const sql = "select * from login";
db.query(sql,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
})
})


app.listen(port,()=>{
    console.log("listioning");
})