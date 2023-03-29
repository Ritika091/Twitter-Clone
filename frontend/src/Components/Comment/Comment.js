import {React,useState} from 'react'
import './Comment.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'

export default function Comment({closeComment}) {
  const[comment,setComment]=useState()
  const [data, setData] = useState([]);
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
            const newData=data.map((posts)=>{
                if(posts._id==result._id){
                    return result
                }
                else{
                    return posts
                }
            })
            setData(newData)
            console.log(result)
        })
  }
  return (
    
    <div className="darkBg1">
      {/* {data.map((posts)=>( */}
    <div className="centered1">
    <div className='CommentModal'>
       <CloseIcon className='closebtn' onClick={()=>closeComment(false)} />
       <div className="CommentBox">
       <Avatar src={ProfileLogo} className="Avatar"/>
       <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}} type="text" placeholder="Tweet your reply" />
       </div>
       <button className='Replybtn' onClick={()=>{makeComment(comment,posts._id)}} >Reply</button>
    </div>
    </div>
    
  {/* ))} */}
</div>

  )
}
