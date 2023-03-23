import { React, useEffect, useState } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ProfileLo from '../../assets/profileLogo.jpg'
import VerifiedIcon from '@mui/icons-material/Verified';
import PostImg from '../../assets/postImg.jfif'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PublishIcon from '@mui/icons-material/Publish';
export default function Post() {

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
    }, [data])

        
                return (
                    <>
                {
                    data.map(posts=>(
                        <div className='Post'>
                        <div className="PostAvatar">
                             <Avatar src={ProfileLo} />
                         </div>
                         <div className="PostBody">
                            <div className="PostHeader">
                                <div className="PostHeaderText">
                                    <h3>{posts.postedBy.name}{"  "}
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
                        <ChatBubbleOutlineOutlinedIcon fontSize='small' className='FooterIcon' />
                        <RepeatOutlinedIcon fontSize='small' className='FooterIcon' />
                        <FavoriteBorderSharpIcon fontSize='small' className='FooterIcon' />
                        <PublishIcon fontSize='small' className='FooterIcon' />
                    </div>
                </div>
            </div>
                    ))
                }   
 

                </>           
                    
    )       
}
