const express = require('express');
const {sequelize, Size, Color} = require("./models");
require('dotenv').config();

const app = express();

const serverPort = process.env.SERVER_PORT;



app.listen(serverPort,()=>{
    console.log(`server started on port ${serverPort}`);
});

(async () => {
    await sequelize.sync({ force: true }); // WARNING: wipes data
    await Size.bulkCreate([
        { name: 's' },
        { name: 'md' },
        { name: 'lg' },
        { name: 'xl' },
        { name: 'xxl' },
        { name: 'xxxl' },
    ]);
    await Color.bulkCreate([
        { name: 'black' },
        { name: 'white' },
        { name: 'red' },
        { name: 'blue' },
    ]);
})();

app.get('/test',(req,res)=>{
    return res.json('server works');
})

