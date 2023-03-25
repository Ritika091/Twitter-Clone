import React,{useState,useEffect} from 'react'
import './Profile.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import twitterprofile from '../../assets/twitterprofile.webp'
import { Avatar } from '@mui/material'
import ProfImg from '../../assets/profileLogo.jpg'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import {
    TwitterTweetEmbed,
  } from "react-twitter-embed"

export default function ProfileOption() {
  const[pic,setPic]=useState("")
  useEffect(()=>{
    fetch("http://localhost:5000/myposts",{
      headers:{
        'Content-Type':'application/json',
        'Authorization':"Bearer "+localStorage.getItem("jwt")
      }
    })
    .then(res=>res.json())
    .then((result)=>{
      setPic(result)
      console.log(pic)
    })
  },[])

  return (
    <div className='ProfileOption'>
        <div className="ProfileHeader">
            <h2>Ritika Saxena</h2>
            <p>49 Tweets</p>
            <KeyboardBackspaceIcon className='Arrow'/>
        </div>
        <div className="ProfileImg">
            <img src={twitterprofile} alt=""  className='banner'/>
            <button className='Editbtn'>Edit profile</button>
            <Avatar className='ProfPic'
             alt="Remy Sharp"
            src={ProfImg}
            sx={{ width: 130, height: 130 }}
            />
            </div>

            <div className="ProfileContent">
            <h2>Ritika Saxena</h2>
           <p>@ritikasaxena09</p>
           <br />
           <p>Life does not get better by chance. It gets better by change🙂</p>
            <br />
            <div className="Prof">
                <CakeOutlinedIcon/>
                <p>Born November 9, 2002</p>
                <CalendarMonthOutlinedIcon/>
                <p>Joined May 2020</p>
            </div>

            <div className="Following">
                <p><span>102 </span>Following</p>
                <p><span>21 </span>Followers</p>
            </div>

            <div className="ProfNav">
               <ul>
                <li>Tweets</li>
                <li>Replies</li>
                <li>Media</li>
                <li>Likes</li>
               </ul>
            </div>
            </div>


            <div className="ProfileContainer">
                  <TwitterTweetEmbed tweetId={"166684587878455458"}/>
                {/* <img src={pics.img} alt="" /> */}
            </div>
    </div>
  )
}
