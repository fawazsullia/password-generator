const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()


const password = require('./generate-password.js');

app.use(express.json());



app.get('/generate', cors(), (req, res)=>{

let {caps, num, char, len} = req.query;

let passtoSend = password(num, char, len, caps);
res.status(200).json({ data : passtoSend}).end();

})






app.listen(process.env.PORT, ()=> console.log("up and running bitch"));
