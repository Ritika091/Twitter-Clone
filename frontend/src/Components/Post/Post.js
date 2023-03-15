import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ProfileLo from '../../assets/profileLogo.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
import PostImg from '../../assets/postImg.jfif'
export default function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='Post'>
        <div className="PostAvatar">
            <Avatar src={ProfileLo}/>
        </div>

    <div className="PostBody">
        <div className="PostHeader">
            <div className="PostHeaderText">
                <h3>mewtru{"  "}
                <span>
                    <VerifiedIcon fontSize="small" color='primary' />
                    @trunarla . Mar 14
                </span>
                </h3>
            </div>
            <div className="PostHeaderDescription">
                <p>One line of code a day, keeps the doctor away 🧐</p>
            </div>
        </div>
        <img src={PostImg} alt="" />
    </div>
    </div>
  )
}
