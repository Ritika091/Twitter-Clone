const express=require('express');
const router=express.Router()
const mongoose=require('mongoose')
const USER= mongoose.model('USER')
const bcrypt=require('bcrypt')
const cors=require('cors');
router.use(cors());
router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    const{name,userName,email,password}=req.body;
    if(!name|| !email|| !userName || !password){
        return res.status(422).json({error:"Some fields are missing"})
    }
    USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists"})
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const user=new USER({
                name,
                email,
                userName,
                password:hashedPassword
            })
        
            user.save()
            .then(user=>{res.json({message:"Saved successfully"})})
            .catch(err=>{console.log(err)})
        })   
    })   })


    router.post("/signin",(req,res)=>{
        const {email,password}=req.body;
        if(!email||!password){
        return res.status(422).json({error:"Some fields are missing"})
        }
        USER.findOne({email:email}).then((savedUser)=>{
            if(!savedUser){
                return res.status(422).json({error:"User dosen't exists"})
            }
         bcrypt.compare(password,savedUser.password).then((isMatching)=>{
            if(isMatching){
                return res.status(200).json({message:'Logged in succcesfully'});
            }else{
            return res.status(422).json({error:"Password doesn't match"});
            }
         }).catch(err=>console.log(err));
        }) 
    })



    

module.exports=router;