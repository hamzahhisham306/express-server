"use strict";

const mongoose=require('mongoose');

const info=new mongoose.Schema({
    name:String,
    gender:String,


});


const SaveInfo=mongoose.model('infos', info);

module.exports=SaveInfo;