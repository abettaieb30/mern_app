const mongoose=require('mongoose')
const  connectDB =()=> {

    const originalString = "تــــــــــــــــــم الاتـــــــــصــــــــــــــــــال بقــــــــــــــــــاعــــــــــــــــــدة البـــــــــيــــــــــــــــــانـــــــــــــــــــــــــــات";
    const splitLetters = originalString.split('');
    const reversedArray = splitLetters.reverse();
    const reversedString = reversedArray.join('');




    mongoose.connect(process.env.MONGO_URL,(err)=>err? console.log(err):console.log((reversedString)))
}
module.exports=connectDB