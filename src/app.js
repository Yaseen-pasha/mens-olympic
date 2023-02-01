const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./router/auth.js");
const app = express();

dotenv.config({path:"./config.env"});
require ("./db/conn");
app.use(express.json());

const port = process.env.PORT || 8000;

app.use(router);

app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`);
});