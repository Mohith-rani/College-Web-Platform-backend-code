const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marqueeSchema = new Schema({
  first:{
    type:String,
    required:true
  },
  second:{
    type:String,
    required:true,
  },
  endDate:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  mail:{
    type:String,
    required:true
  },
  number:{
    type:String,
    required:true
  },
  post:{
    type:Boolean,
    default: false
  }
},{timestamps : true})

module.exports = mongoose.model('marquee',marqueeSchema);
