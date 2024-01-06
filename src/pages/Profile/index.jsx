import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import Footer from "../Auth/components/Footer";
import defaultAvatar from "../../assets/defualtAvatar.jpg";
import "./index.css";
import useGetUserProfileByUserName from "../../hooks/useGetUserProfileByUserName";

const Profile = () => {
  const data = useGetUserProfileByUserName();
  const InfoNum = () => {
    return (
      <div style={{ display: "flex", alignItems: "center", padding: "30px 0" }}>
        <div>게시물</div>
        <div>100</div>
      </div>
    );
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBar></SideBar>
      <div
        style={{
          display: "flex",
          backgroundColor: "pink",
          flex: 1,
          flexDirection: "column",
          maxWidth: "935px",
        }}
      >
        <div className="profile-header">
          <img src={defaultAvatar} className="profile-pic"></img>
          <div className="profile-info">
            <div>
              {data.username}
              <button>edit</button>
              <button>story watch</button>
            </div>
            <div style={{ display: "flex" }}>
              <InfoNum></InfoNum>
              <InfoNum></InfoNum>
              <InfoNum></InfoNum>
            </div>
            <div>@{data.username}</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ borderTop: "1px solid black", marginRight: "60px" }}>
            게시물
          </div>
          <div style={{ marginRight: "60px" }}>저장 됨</div>
          <div>태그 됨</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          첫 사진 공유하기
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Profile;
