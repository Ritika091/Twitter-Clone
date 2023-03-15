import React from 'react'
import Feed from '../Feed/Feed'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../Widgets/Widget'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
        <Sidebar/>
        <Feed/>
        <Widget/>
    </div>
  )
}
