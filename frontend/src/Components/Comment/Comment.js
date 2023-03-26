import {React,useState} from 'react'
import './Comment.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'

export default function Comment({closeComment}) {
  return (
    <div className="darkBg1">
    <div className="centered1">
    <div className='CommentModal'>
       <CloseIcon className='closebtn' onClick={()=>closeComment(false)} />
       <div className="CommentBox">
       <Avatar src={ProfileLogo} className="Avatar"/>
       <textarea  type="text" placeholder="Tweet your reply" />
       </div>
       <button className='Replybtn'>Reply</button>
    </div>
    </div>
    </div>
  )
}
