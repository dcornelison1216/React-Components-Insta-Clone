//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(dummyData)
  // console.log("data", data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      <Post post={data[0]}/>
      <Post post={data[1]}/>
    </div>
  );
};

export default PostsPage;
