 
 
 const express= require('express');
const { addPost,getPost } = require('../Controllers/postController');
 const router = express.Router();
 
 
 const middleware=require ('../Middleware/authMiddleware')



/////////////////////////////////////////////////////////////////////////////
router.post('/addPost',middleware,addPost)
router.get('/getPost' ,getPost)

/////////////////////////////////////////////////////////////////////////////

module.exports=router;