import React from "react";

const CommentList = ({ comments }) => {
  return (
    <>
      <div>Comments</div>

      {comments.map((comment, key) => (
        <div
          className="comment"
          key={comment.postedBy + ":" + comment.text + "-" + key}
        >
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentList;
