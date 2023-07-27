const express = require("express");
const app = express();
const router = require("./router/router");

app.set("views","./views");
app.set("view engine","ejs");

app.use("/",router);

app.listen("3000",()=>{console.log("3000 연결 성공")});

