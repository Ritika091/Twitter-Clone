import React from 'react'
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'
import './Tweet.css'

export default function Tweet() {
  return (
    <div className='Tweet'>
        <form action="">
            <div className="Tweet_input">
                <Avatar src={ProfileLogo}/>
                {/* <input type="text" placeholder="What's happening?" /> */}
                <textarea type="text" placeholder="What's happening?" />
            </div>
            <button className='Tweetbtn'>Tweet</button>
        </form>
    </div>
  )
}
