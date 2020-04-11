// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, setComment] = useState(props)
  console.log("comment", comment.comments[0])

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <ul>
        {comment.comments.map(item => (
            <Comment comment={item} />
        ))}
      </ul>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
