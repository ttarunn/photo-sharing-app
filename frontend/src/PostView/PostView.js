import React, { useContext, useEffect, useState } from 'react';
import {BsThreeDots} from 'react-icons/bs'
import { GoHeart } from 'react-icons/go'
import { PiShareFat } from 'react-icons/pi'
import { ThemeContext } from '../App';


function PostData({userData}){
  const theme = useContext(ThemeContext);
  const {author, location, img, likes, date, description} = userData
  
  return <div className={theme === "light" ? 'post-wrapper': "post-wrapper post-wrapper-dark"}>
  <h3 className='land-name'>{author}</h3>

  <p className='land-location'>{location}</p>

  <BsThreeDots className='three-dot'/>

  <img  src={img} alt="post" className='land-img'/>

  <GoHeart className='go-heart'/>

  <PiShareFat className='share-icon'/>

  <p className='post-date'>{date}</p>
  
  <p className='post-like'>{likes} Likes</p>

  <h2 className='post-desc'>{description}</h2>
</div>

}


export default function PostView() {
  const theme = useContext(ThemeContext);

  const [data2, setData2] = useState([]);
  const { REACT_APP_API_SERVER } = process.env
  console.log(REACT_APP_API_SERVER)
  async function getPost(){
    const data0 = await fetch(`${REACT_APP_API_SERVER}/getPosts`);
    const json = await data0.json();
    setData2(json.result)
    console.log(REACT_APP_API_SERVER)
  }
  useEffect( () => {
    getPost()
    // eslint-disable-next-line
  },[]);

  
  return <div className={theme === "light" ? 'postview': "postview postview-dark"}>
    {data2.length > 0 && data2.map(userData => <PostData key={userData._id} userData={userData}/>)}
  </div>
}
