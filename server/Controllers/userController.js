const User=require ('../Models/userModel')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

// @desc register new user & return token 
// @route POST /api/users/register
// @access public
const register= async(req,res)=>{
    try { 
        const {name,userName,password,email}=req.body

    const hashedPassword=  await bcrypt.hash(password,10)

    const newUser= await User.create({name,userName,password:hashedPassword,email})

    const token = jwt.sign({id:newUser._id,email:newUser.email},process.env.JWT_SECRET)
  
    res.json({msg:'user created',newUser,token})
      
    }
    catch(error){
         res.status(500).json({msg:`something went wrong ${error}`})
        }
}
//////////////////////////////////////////////////////////
// @desc  new user can login & return token 
// @route POST /api/users/login
// @access public

const login= async(req,res)=>{
    try {
        const {password,email}=req.body
        const existUser= await User.findOne({email})
        if (!existUser) return  res.status(404).json({msg:`you should register first!!!!!!!! `})
       const verifyPassword =await   bcrypt.compare(password,existUser.password)
       if (!verifyPassword) return  res.status(401).json({msg:`wrong password!!!!!!! `})
       
    const token = jwt.sign({id:existUser._id,email:existUser.email},process.env.JWT_SECRET)
    res.json({token})
    storage.setItem("token" , token); 
   }
    catch(error){
         res.status(500).json({msg:`something went wrong ${error}`})
        }
}
// @desc takes token & return user info 
// @route GET /api/users/loaduser
// @access PRIVATE-user
const LoadUserinfo= async(req,res)=>{
try {
 const user = await User.findById(req.userId)
 ///console.log('USer',user)
 res.json(user)
} catch (error) {
    
    res.status(500).json({msg:`something went wrong ${error}`})
       
}
}

const getUsers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.json({users})
    } catch (error) {
        
    }
}
module.exports={register,login,LoadUserinfo,getUsers }