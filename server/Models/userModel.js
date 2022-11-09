

const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

       name:{
         type:String, 
         required: true
        },
    userName:{
        type:String, 
        required: true
       },
       password:{
        type:String, 
        minLength: 6,
       },
    email:{required: true,
        unique:true, 
        type :String,
        match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          
    }
       
    
})
module.exports=mongoose.model('user',userSchema)




















