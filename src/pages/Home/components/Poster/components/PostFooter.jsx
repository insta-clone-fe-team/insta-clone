import React, { useState } from "react";
import UnLike from "./UnLike";
import Like from "./Like";
import Comment from "./Comment";
import Share from "./Share";
import Save from "./Save";

const PostFooter = ({ username, likes }) => {
  const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(true);

  // const handleLike = () => {
  //   if (liked) {
  //     setLiked(false);
  //     setLikes(likes - 1);
  //   } else {
  //     setLiked(true);
  //     setLikes(likes + 1);
  //   }
  // };
  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <>
      <div
        className="icon-section"
        style={{
          paddingBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <button
            onClick={handleLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {!liked ? <UnLike /> : <Like />}
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Comment />
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Share />
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Save />
          </button>
        </div>
      </div>

      <div className="bottom-section">
        <div className="likes-text" style={{ fontWeight: "700" }}>
          좋아요 {likes + liked} 개
        </div>
        <div
          className="user-text"
          style={{ fontWeight: "600", marginTop: "8px", marginBottom: "8px" }}
        >
          {username} {""}{" "}
          <span style={{ fontWeight: "400" }}>post caption</span>
        </div>
        <button
          className="view-more"
          style={{
            background: "none",
            border: "none",
            fontSize: "14px",
            color: "#a8a8a8",
          }}
        >
          댓글 모두 보기
        </button>
        <div>
          <input
            placeholder="댓글 달기..."
            vari
            style={{ border: "none", fontSize: "14px" }}
          />
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "14px",
              fontWeight: "600",
              color: "#0095f6",
            }}
          >
            게시
          </button>
        </div>
      </div>
    </>
  );
};

export default PostFooter;
