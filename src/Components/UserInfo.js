import React from "react";

import classes from "./UserInfo.module.css";


const UserInfo = (props) =>{
  return (
    <div className={classes.userInfo}>
      <img
        className={classes.userIcon}
        src="https://avatars.dicebear.com/api/bottts/something.svg"
        alt="User icon of a robot generated automatically"
      ></img>
      <div className={classes.user}>
        <strong>John</strong> Doe
      </div>
      <div className={classes.username}>@JohnDoe</div>
    </div>
  );
}

export default UserInfo