const express = require('express');
require('dotenv').config();

const app = express();

const serverPort = process.env.SERVER_PORT;



app.listen(serverPort,()=>{
    console.log(`server started on port ${serverPort}`);
});

app.get('/test',(req,res)=>{
    return res.json('server works');
})

