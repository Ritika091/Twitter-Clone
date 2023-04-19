import { React, useEffect, useState } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ProfileLo from '../../assets/profileLogo.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
// import PostImg from '../../assets/postImg.jfif'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comment from '../Comment/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';

// import ViewAllComment from '../Comment/ViewAllComment';
import { Link } from 'react-router-dom';
export default function Post() {
    var picLink="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
    const[openComment, setOpenComment]=useState(false);
    const[openViewAllComment,setOpenViewAllComment] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetching all the posts
        fetch("http://localhost:5000/allposts", {
            headers: {
                'Content-Type':'application/json',
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result =>{ setData(result);
                console.log(result);
            })
            .catch(err => console.log(err))
    }, [])


     // show and hide comments
     const toggleComment=()=>{
        if(openViewAllComment){
            setOpenViewAllComment(false);
        }
        else{
            setOpenViewAllComment(true);
        }
    }


    const likePost= (id) =>{
        fetch("http://localhost:5000/like", {
            method:"put",
            headers:{
                'Content-Type':'application/json',
                Authorization:"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
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


    
    const unlikePost= (id) =>{
        fetch("http://localhost:5000/unlike", {
            method:"put",
            headers:{
                'Content-Type':'application/json',
                'Authorization':"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
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
                    <>
                    <section className='ProfPost1'>
                    
                {
                    data.map(posts=>(
                        <div className='Post'>
                        <div className="PostAvatar">
                             <Avatar src={posts.postedBy.Photo? posts.postedBy.Photo: picLink}/>
                         </div>
                         <div className="PostBody">
                            <div className="PostHeader">
                                <div className="PostHeaderText">
                                <h3>
                                   <Link to={JSON.parse(localStorage.getItem("user"))._id===posts.postedBy._id ? "/profile" : `profile/${posts.postedBy._id}`}>{posts.postedBy.name}{"  "}</Link>
                                  
                                        <span>
                                        <VerifiedIcon fontSize="small" color='primary' />
                                        {posts.postedBy.userName}
                                            {/* @trunarla . Mar 14 */}
                                        </span>
                                    </h3>
                                    </div>
                            <div className="PostHeaderDescription">
                                <p>{posts.body}</p>
                            </div>
                        </div>
                        <img src={posts.photo} alt="" />
            
                    <div className="PostFooter">
                        <ChatBubbleOutlineOutlinedIcon fontSize='small' className='FooterIcon' onClick={()=>{setOpenComment(true)}} />
                        <p className='commentP' onClick={()=>{toggleComment()}}>View all comments</p>
                        <RepeatOutlinedIcon fontSize='small' className='FooterIcon' />
                        {
                            posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id)
                            ?
                            ( <FavoriteIcon fontSize='small' className='FooterIcon'  sx={{ color: '#f91880' }}  onClick={()=>{unlikePost(posts._id)}} />)
                            :
                            (<FavoriteBorderSharpIcon fontSize='small' className='FooterIcon' onClick={()=>{likePost(posts._id)}}/>)
                        }
                        <p className='like'>{posts.likes.length}</p>
                        {/* <PublishIcon fontSize='small' className='FooterIcon' />    */}
                        <IosShareIcon fontSize='small' className='FooterIcon' />          
                    </div>
                </div>
                {openComment && <Comment postDetails={posts} closeComment={setOpenComment}/> }
                {openViewAllComment && <Comment postDetails={posts} closeViewAllComment={setOpenViewAllComment}/> }
            </div>
                    ))
                }   
                </section>
 

                </>           
                    
    )       
}
