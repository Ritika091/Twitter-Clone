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

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <img className='twitlogo' src={logo} alt="" />
        <SidebarOption active Icon={HomeIcon} text="Home"/> 
        <SidebarOption Icon={TagIcon} text="Explore"/> 
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/> 
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/> 
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/> 
        <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/> 
        <SidebarOption Icon={MoreHorizIcon } text="More"/>  

        <button className='tweet'>Tweet</button>       
    </div>
  )
}
