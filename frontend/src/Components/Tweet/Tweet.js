import React, { useState,useEffect } from 'react'
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'
import './Tweet.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import {useNavigate} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export default function Tweet() {
  const [body,setBody]=useState("")
  const [image,setImage]=useState("")
  const [url,setUrl] = useState("")
  const [userphoto,setUserphoto] = useState("")
const navigate=useNavigate();
  

useEffect(()=>{
  fetch(`http://localhost:5000/user/${JSON.parse(localStorage.getItem("user"))?._id}`,{
    headers:{
      'Content-Type':'application/json',
      'Authorization':"Bearer "+localStorage.getItem("jwt")
    }
  })
  .then(res=>res.json())
  .then((result)=>{
    console.log(result)
    setUserphoto(result.user.Photo)
  })
},[])


  useEffect(()=>{
    // saving post to mongodb
    if(url){
    fetch("http://localhost:5000/createPost",{
      method:"post",
      headers:{
        "Content-type":"application/json",
        "Authorization":"Bearer "+ localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        body:body,
        pic:url
      })
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  },[url])

  // posting image to cloudinary
  const postDetails=()=>{
    console.log(body,image)
    const data=new FormData();
    data.append("file",image)
    data.append("upload_preset","TwitterClone")
    data.append("cloud_name","twitterclonecloud")
    fetch("https://api.cloudinary.com/v1_1/twitterclonecloud/image/upload",
    {
      method:"POST",
      body:data
    }).then(res=>res.json())
    .then(data=>setUrl(data.url))
    .catch(err=>console.log(err))
}

  const loadFile = (e) => {
    let output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };
  return (
    <div className='Tweet'>        
            <div className="Tweet_input">
                <Avatar src={userphoto?userphoto:""}/>
                <textarea value={body} onChange={(e)=>{
                  setBody(e.target.value)
                }} type="text" placeholder="What's happening?" />
            </div>
            
          <img
            id="output"
            // alt=""
          />
          <label for="file-upload" className='CustomFile'>
          <InsertPhotoIcon color="primary" className='tweetpic'/>
          </label>
            <input type="file" accept='image/*' id='file-upload' onChange={e=>{
              loadFile(e)
              setImage(e.target.files[0])
            }}/>

           <button className='Tweetbtn' onClick={()=>{
            postDetails();
          navigate('/');
          }}>Tweet</button>
           
           {/* <button className='cancelTweet'> */}
            <ClearIcon className='cancelTweet' onClick={()=>{navigate('/'); }}/>
            {/* </button> */}
          
        
    </div>
  )
}
