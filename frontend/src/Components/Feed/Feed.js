import React from 'react'
import Post from '../Post/Post'
import Tweet from '../Tweet/Tweet'
import './Feed.css'


export default function Feed() {
  return (
    <div className='Feed'>
        <div className="Feed_header">
            <h2>Home</h2>
            <div className="subFeed_header">
            <h3>For you</h3>
            <h3>Following</h3>
            </div>
        </div>

        {/* Tweet box */}
        <Tweet/>

        {/* Post */}
        <Post/>
    </div>
  )
}
