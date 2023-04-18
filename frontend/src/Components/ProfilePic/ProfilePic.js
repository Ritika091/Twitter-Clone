import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './ProfilePic.css'
import { Avatar } from '@mui/material'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { IconButton } from '@mui/material';
export default function ProfilePic({changeProfile}) {
    const[image,setImage]=useState("");
    const[url,setUrl]=useState("");
    const[bg,setBg]=useState("")
    const[bgurl,setBgurl]=useState("");

    const hiddenFileInput=useRef(null);
    const handleClick=()=>{
        hiddenFileInput.current.click()
    };
    // posting image to cloudinary
    const postDetails=(img)=>{
    const data=new FormData();
    data.append("file",img)
    data.append("upload_preset","TwitterClone")
    data.append("cloud_name","twitterclonecloud")
    fetch("https://api.cloudinary.com/v1_1/twitterclonecloud/image/upload",
    {
      method:"POST",
      body:data
    }).then(res=>res.json())
    .then(data=>{
      console.log('Cloudinary: ',data)
      setUrl(data.url)
    })
     
    .catch(err=>console.log(err))
}

// posting image to cloudinary
const bgpostDetails=(img)=>{
  const data=new FormData();
  data.append("file",img)
  data.append("upload_preset","TwitterClone")
  data.append("cloud_name","twitterclonecloud")
  fetch("https://api.cloudinary.com/v1_1/twitterclonecloud/image/upload",
  {
    method:"POST",
    body:data
  }).then(res=>res.json())
  .then(data=>{
    console.log('Cloudinary: ',data)
    setBgurl(data.url)
  })
   
  .catch(err=>console.log(err))
}


const postPic=()=>{
        fetch("http://localhost:5000/uploadProfilePic",{
          method:"PUT",
          headers:{
            "Content-type":"application/json",
            "Authorization":"Bearer "+ localStorage.getItem("jwt")
          },
          body:JSON.stringify({
            pic:url
          })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            changeProfile()
            window.location.reload();
        })
        .catch(err=>console.log(err))
}

const postBgPic=()=>{
  fetch("http://localhost:5000/uploadBgProfilePic",{
    method:"PUT",
    headers:{
      "Content-type":"application/json",
      "Authorization":"Bearer "+ localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      pic:bgurl
    })
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      changeProfile()
      window.location.reload();
  })
  .catch(err=>console.log(err))
}

useEffect(()=>{
    if(image){
postDetails(image)
    }
},[image]);

useEffect(()=>{
  if(bg){
bgpostDetails(bg)
  }
},[bg]);

useEffect(()=>{
    if(url){
        postPic();
    }
},[url])

useEffect(()=>{
  if(bgurl){
      postBgPic();
  }
},[bgurl])

  return (
    <div className='ProfilePic darkBg '>
        <div className="ChangeProfile centered">
            <div className="ChangeProfHeader">
                <CloseIcon onClick={changeProfile} sx={{cursor:"pointer"}}/>
                <h3>Edit Profile</h3>
                <button className='savebtn'>Save</button>
            </div>
            <div className="BgChange">
            <IconButton   aria-label="upload picture" component="label">
  <input hidden accept="image/*" onChange={(e)=>setBg(e.target.files[0])} type="file" />
  <AddAPhotoOutlinedIcon className='changeBg' sx={[{ color: 'white' },{ fontSize: 35 }]}/>
</IconButton>                
            </div>
            <div className="ProfPicChange">
            <Avatar className='ProfPic '
             src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
            sx={{ width: 130, height: 130 }}
            />
               {/* <IconButton   aria-label="upload picture" component="label"  onChange={(e)=>{setImage(e.target.files[0])}}> */}
  {/* <input hidden accept="image/*" type="file" /> */}
  <AddAPhotoOutlinedIcon className='changeProfile'  onClick={handleClick} sx={[{ color: 'white' },{ fontSize: 35 }]} />
{/* </IconButton>   */}
<input hidden accept="image/*" onChange={(e)=>setImage(e.target.files[0])} ref={hiddenFileInput} type="file" />
            </div>
        </div>
    </div>
  )
}
