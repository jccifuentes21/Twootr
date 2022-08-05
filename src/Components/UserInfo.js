import React, { useState } from "react";

import classes from "./UserInfo.module.css";

const UserInfo = (props) => {
  const [user, setUser] = useState("John Doe");
  const [username, setUsername] = useState("john-doe");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={classes.userInfo}>
      <img
        className={classes.userIcon}
        src={`https://avatars.dicebear.com/api/bottts/${username}.svg`}
        alt="User icon of a robot generated automatically"
      ></img>
      <div>
        <span className={classes.user}>{user}</span>
        <span
          className={`${classes.editButton} fa-solid fa-pen-to-square`}
        ></span>
      </div>
      <span className={classes.username}>@{username}</span>
    </div>
  );
};

export default UserInfo;
