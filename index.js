const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;


const password = require('./generate-password.js');

app.use(express.json());



app.get('/generate', cors(), (req, res)=>{

let {caps, num, char, len} = req.query;

let passtoSend = password(num, char, len, caps);
res.status(200).json({ data : passtoSend}).end();

})






app.listen(PORT, ()=> console.log("up and running bitch"));
