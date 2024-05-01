const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const dataSchema = Schema({
  category:{
    type:String,
    required:true
  },
  text:{
   type:String
   
  },
  heading:{
    type:String
    
   },
  dispUrl:{
    type:String,
    required:true

  },
  fileType:{
    type:String,
    required:true
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


},{timestamps :true})

module.exports = mongoose.model('circulars',dataSchema);