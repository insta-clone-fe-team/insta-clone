import React from "react";
import "./index.css";
import defaultAvatar from "../../../../assets/defualtAvatar.jpg";

const Recommend = () => {
  const listData = [1, 2, 3, 4, 5];
  const Account = ({ avatar, name, text }) => {
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          padding: "8px 16px",
        }}
      >
        <img src={avatar} className="recommend-avatar"></img>
        <div style={{ fontWeight: "bold", fontSize: "14px" }}>{name}</div>
        <div
          style={{
            position: "absolute",
            right: "16px",
            fontSize: "12px",
            color: "#0095f6",
            fontWeight: "bold",
          }}
        >
          {text}
        </div>
      </div>
    );
  };
  return (
    <div className="recommend-list-container">
      <Account avatar={defaultAvatar} name="hayyy" text="전환"></Account>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
          marginTop: "10px",
        }}
      >
        <div style={{ fontSize: "14px", color: "#737373", fontWeight: "bold" }}>
          회원님을 위한 추천
        </div>
        <div style={{ fontSize: "12px", fontWeight: "bold" }}>모두 보기</div>
      </div>
      {listData.map((item) => {
        return (
          <Account avatar={defaultAvatar} name={item} text="팔로우"></Account>
        );
      })}
    </div>
  );
};

export default Recommend;
