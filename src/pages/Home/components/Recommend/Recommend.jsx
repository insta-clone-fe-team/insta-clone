import React, { useEffect, useState } from "react";
import "./index.css";
import defaultAvatar from "../../../../assets/defualtAvatar.jpg";

const Recommend = ({ data }) => {
  const [listData, setListData] = useState([]);

  const requestData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2&per_page=5", {
      method: "GET",
    });
    const data = await res.json();
    setListData(data.data);
  };

  useEffect(() => {
    requestData();
  }, []);
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
      <Account
        avatar={defaultAvatar}
        name={data.username}
        text="전환"
      ></Account>
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
          <Account
            avatar={item.avatar}
            name={item.last_name}
            text="팔로우"
          ></Account>
        );
      })}
    </div>
  );
};

export default Recommend;
