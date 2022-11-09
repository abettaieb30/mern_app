



const Post=require ('../Models/postModel')



// @desc add new post 
// @route GET /api/posts/addPost
// @access PRIVATE-user
const addPost =async(req,res) => {
    try {
const userId=req.userId 
const {title,desc,image}=req.body 
const newPost= await Post.create({title,desc,image,owner:userId})
res.json(newPost)
    
} catch (error) {
    res.status(500).json({msg:`something went wrong ${error}`})

}
}

// @desc get posts 
// @route GET /api/posts/getPost
// @access public
const getPost =async(req,res) =>{
    try {
        const posts= await Post.find ({}).populate('owner','-password -__v -_id')
         res.json(posts)
    } catch (error) {
        
    }

}


module.exports= {addPost,getPost}








 