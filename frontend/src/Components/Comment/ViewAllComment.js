import {React,useState} from 'react'
import './Comment.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material'
import ProfileLogo from '../../assets/profileLogo.jpg'

export default function ViewAllComment({closeViewAllComment,postDetails}) {
  const[item,setItem]=useState([]);
//   const [data, setData] = useState([]);
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
          const updatedData= data.map((posts)=>{
            if(posts._id===result._id){
              return result;
            }
            else{
              return posts;
            }
          })
          setData(updatedData);
            console.log(result)
        })
  }
  return (
    <div className="darkBg1">
    <div className="centered1">
    <div className='CommentModal'>
       <CloseIcon className='closebtn' onClick={()=>closeViewAllComment(false)} />
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
