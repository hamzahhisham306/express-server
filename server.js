'use strict';


const express=require('express');
require('dotenv').config();
const cors=require('cors');

const app=express();
app.use(cors());



app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
});

app.post('/person',(req,res)=>{
 const name=req.query.name;
 const age=req.query.age;
 const gender=req.query.gender;
 const agePluse=Number(age)+5;
 const info={
    name:name,
    gender:gender,
    age:agePluse
 }

 res.status(200).send(`${agePluse}`);
})

function start(port ){
    app.listen(port,()=>{
        console.log('Go Live...')
    })
}

module.exports={
    app:app,
    start:start
}
