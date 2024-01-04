import React from "react";
import defualtAvatar from "../../../../assets/defualtAvatar.jpg";

const Profile = () => {
  return (
    <a>
      <div className="menu-single-wrap">
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
