const express=require('express');
const bodyparser=require('body-parser');
const dotenv=require('dotenv');


dotenv.config();
const connectMongodb = require('./init/mongodb');



connectMongodb();

const app= express()

app.use(express.json({limit:"500mb"}));
app.use(bodyparser.urlencoded({limit:"500mb",extended:true}));

module.exports=app;

