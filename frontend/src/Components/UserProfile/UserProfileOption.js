import React,{useState,useEffect} from 'react'
import '../Profile/Profile.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import twitterprofile from '../../assets/twitterprofile.webp'
import { Avatar } from '@mui/material'
import ProfImg from '../../assets/profileLogo.jpg'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import {
    TwitterTweetEmbed,
  } from "react-twitter-embed"

  import ProfileLo from '../../assets/profileLogo.jpg'
  import PostImg from '../../assets/postImg.jfif'
  import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
  import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
  import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
  import PublishIcon from '@mui/icons-material/Publish';
  import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';


export default function UserProfileOption() {
    const {userid} =useParams();
    console.log(userid)
    const[user,setUser]=useState("");
    const[posts,setPosts]=useState([]);
  
  useEffect(()=>{
    fetch(`http://localhost:5000/user/${userid}`,{
      headers:{
        'Content-Type':'application/json',
        'Authorization':"Bearer "+localStorage.getItem("jwt")
      },
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
      setUser(result.user)
      setPosts(result.post)
    })
  },[])

  return (
    <div className='ProfileOption'>
        <div className="ProfileHeader">
            <h2>{user.name}</h2>
            <p>{posts.length} Tweets</p>
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
            <h2>{user.name}</h2>
            <p>@{user.userName}</p>
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

            
            {posts.map(data=>(
              <div className='Post'>
              <div className="PostAvatar">
                   <Avatar src={ProfileLo}/>
               </div>
               <div className="PostBody">
                  <div className="PostHeader">
                      <div className="PostHeaderText">
                          <h3>{user.name}{"  "}
                              <span> 
                              @{user.userName}
                                  {/* @trunarla . Mar 14 */}
                              </span>
                          </h3>
                          </div>
                  <div className="PostHeaderDescription">
                      <p>{data.body}</p>
                  </div>
              </div>
              <img src={data.photo} alt="" />
  
          <div className="PostFooter">
              <ChatBubbleOutlineOutlinedIcon fontSize='small' className='FooterIcon' />
              <RepeatOutlinedIcon fontSize='small' className='FooterIcon' />
                    <FavoriteIcon fontSize='small' className='FooterIcon'  sx={{ color: '#f91880' }}  />
              <PublishIcon fontSize='small' className='FooterIcon' />             
          </div>
      </div>
  </div>

             ))} 
    </div>
  )
}
