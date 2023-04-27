import {React,useState} from 'react'
import './Comment.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'

export default function Comment({closeComment,postDetails}) {
  const[comment,setComment]=useState()
  // const [data, setData] = useState([]);
  const makeComment=(text,id)=>{
    fetch("http://localhost:5000/comment", {
            method:"put",
            headers:{
                'Content-Type':'application/json',
                Authorization:"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                text:text,
                postId:id
              })
        }).then(res=>res.json())
        .then((result)=>{
            console.log(result)
        })
  }
  return (
    <div className="darkBg1">
    <div className="centered1">
    <div className='CommentModal'>
       <CloseIcon className='closebtn' onClick={()=>closeComment(false)} />
       <div className="CommentBox">
       <Avatar src={ProfileLogo} className="Avatar"/>
       <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}} type="text" placeholder="Tweet your reply" />
       </div>
       <button className='Replybtn' onClick={()=>{makeComment(comment,postDetails._id)}} >Reply</button>
    </div>

{/* show comment */}

  <div className='ShowComment'>
  <CloseIcon className='closebtn' />
  <div className="CommentBox">
  <Avatar src={ProfileLogo} className="Avatar"/>
  <h3>RAM</h3>
  </div>
  <div className='allcomments'>
  <p>lorem</p>
  </div>
</div>
    </div>
</div>

  )
}
