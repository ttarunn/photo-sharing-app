import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiShareFat } from "react-icons/pi";
import { ThemeContext } from "../App";

function PostData({ userData }) {
  const { REACT_APP_API_SERVER } = process.env;

  const theme = useContext(ThemeContext);
  const { author, location, img, date, description, _id } = userData;
  const [like, setLike] = useState(false);

  const [dbLike, setDbLike] = useState(userData.likes);

  function likeCount() {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  }
  async function likeUpdate() {
    const data = await fetch(`${REACT_APP_API_SERVER}/likesinc/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const newLikes = await data.json();
    setDbLike(newLikes.data.likes + 1);
  }
  async function likeUpdateDec() {
    const data = await fetch(`${REACT_APP_API_SERVER}/likesdec/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const newLikes = await data.json();
    setDbLike(newLikes.data.likes - 1);
  }

  return (
    <div
      className={
        theme === "light" ? "post-wrapper" : "post-wrapper post-wrapper-dark"
      }
    >
      <h3 className="post-name">{author}</h3>

      <p className="post-location">{location}</p>

      <BsThreeDots className="three-dot" />

      <img src={img} alt="post" className="post-img" />

      {like ? (
        <GoHeartFill
          className="go-heart like"
          onClick={() => {
            likeCount(); 
            likeUpdateDec();
          }}
        />
      ) : (
        <GoHeart className="go-heart" onClick={() => {likeCount(); likeUpdate()}} />
      )}

      <PiShareFat className="share-icon" />

      <p className="post-date">{date}</p>

      <p className="post-like">{dbLike} Likes</p>

      <h2 className="post-desc">{description}</h2>
    </div>
  );
}

export default function PostView() {
  const theme = useContext(ThemeContext);

  const [data2, setData2] = useState([]);
  const { REACT_APP_API_SERVER } = process.env;

  async function getPost() {
    const data0 = await fetch(`${REACT_APP_API_SERVER}/getPosts`);
    const json = await data0.json();
    setData2(json.result);
  }
  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  if(data2.length === 0){
    return <div className={`${theme === "light" ? "shimmer" : "shimmer-dark"}`}>Wait Api Will Take Time to fetch data from server...</div>
  }
  return (
    <div className={theme === "light" ? "postview" : "postview postview-dark"}>
      {data2.length > 0 &&
        data2.map((userData) => (
          <PostData key={userData._id} userData={userData} />
        ))}
    </div>
  );
}
