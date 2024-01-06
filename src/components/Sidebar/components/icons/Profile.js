import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import defualtAvatar from "../../../../assets/defualtAvatar.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };
  return (
    <a>
      <div className="menu-single-wrap" onClick={handleClick}>
        <img
          src={defualtAvatar}
          style={{ width: "24px", height: "24px", borderRadius: "50%" }}
        ></img>
        <span className="sidebar-profile-text">프로필</span>
      </div>
    </a>
  );
};

export default Profile;
