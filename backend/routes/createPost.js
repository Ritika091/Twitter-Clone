const express=require('express');
const router=express.Router()
const mongoose=require('mongoose');
const requirelogin = require('../middlewares/requirelogin');
const POST=mongoose.model("POST")

// create tweet
router.post("/createPost",requirelogin,(req,res)=>{
    const {body,pic}=req.body;
    if(!body && !pic){
        return res.status(422).json({error:"Please add all the fields"})
    }
    req.user
   const posts=new POST({
    body,
    photo:pic,
    postedBy:req.user
   })
   posts.save().then((result)=>{
    return res.json({post:result})
   }).catch(err=>console.log(err))
})
// router.get("/createTweet",requirelogin,(req,res)=>{
//     console.log("hello auth")
// })

module.exports=router