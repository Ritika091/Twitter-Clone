import React from 'react'
import logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption'
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import ProfileLo from '../../assets/profileLogo.jpg'
import LogoutIcon from '@mui/icons-material/Logout';
import tweet from '../../assets/tweet.png'

export default function Sidebar() {
  return (
    <>
    <div className='Sidebar'>
        <img className='twitlogo' src={logo} alt="" />
        <Link to="/" style={{textDecoration: "none", color:"black"}}>  <SidebarOption active Icon={HomeIcon} text="Home"/></Link> 
        <SidebarOption Icon={TagIcon} text="Explore"/> 
        {/* <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>  */}
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/> 
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/> 
       <Link to="/profile" style={{textDecoration: "none", color:"black"}}> <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/></Link> 
        <SidebarOption Icon={MoreHorizIcon } text="More"/>  
        <Link to="/logout" style={{textDecoration: "none", color:"black"}}><SidebarOption Icon={LogoutIcon } text="Logout"/></Link> 

        <button className='tweet'>Tweet</button>  

        <div className="ProfLogOut">
         <Avatar src={ProfileLo}/>
         <div>
          <h4>Ritika Saxena</h4>
          <p>@ritikasaxena09</p>
         </div>
         <MoreHorizIcon style={{cursor:"pointer"}}/>
         
          </div>     
    </div>

    <div className="RespSidebar">
    <div className="Nav">
    <Link to="/" style={{textDecoration: "none", color:"black"}}>  <HomeIcon className='BottomLogo'/></Link>
    <Link to="/createPost" style={{textDecoration: "none", color:"black"}}>  <img className='tweetIcon' src={tweet} alt="" /></Link> 
      <Link to="/profile" style={{textDecoration: "none", color:"black"}}>   <PersonOutlineOutlinedIcon className='BottomLogo'/></Link>
    <Link to="/message"  style={{textDecoration: "none", color:"black"}}>< MailOutlineIcon className='BottomLogo'/></Link>

      <Link to="/logout" style={{textDecoration: "none", color:"black"}}> <LogoutIcon className='BottomLogo'/></Link>

    </div>
    </div>
    </>
  )
}
