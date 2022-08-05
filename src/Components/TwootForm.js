import React, { useRef, useState } from "react";

import classes from "./TwootForm.module.css";
import UserInfo from "./UserInfo.js";

const TwootForm = (props) => {
  const [user, setUser] = useState("John Doe");
  const [username, setUsername] = useState("john-doe");
  const [isEditing, setIsEditing] = useState(false);
  const twootContent = useRef();

  const postTwootHandler = (event) => {
    event.preventDefault();

    console.log(twootContent.current.value);
    twootContent.current.value = "";
  };

  const startEditingHandler = () =>{
    setIsEditing(true)
  }
  const stopEditingHandler = () =>{
    setIsEditing(false)
  }

  return (
    <>
      <form onSubmit={postTwootHandler} className={classes.twootForm}>
        <div className={classes.userInfo}>
          <img
            className={classes.userIcon}
            src={`https://avatars.dicebear.com/api/bottts/${username}.svg`}
            alt="User icon of a robot generated automatically"
          ></img>
          {!isEditing && (
            <div>
              <span className={classes.user}>{user}</span>
              <span
                className={`${classes.editButton} fa-solid fa-pen-to-square`}
                onClick={startEditingHandler}
              ></span>
            </div>
          )}

          {isEditing && <span
                className={`${classes.editButton} fa-solid fa-pen-to-square`}
                onClick={stopEditingHandler}
              ></span>}

          <span className={classes.username}>@{username}</span>
        </div>
        <label>Compose Twoot</label>
        <input
          placeholder="What are you humming about?"
          ref={twootContent}
        ></input>
        <div className={classes.twootFormFooter}>
          <button type="submit">Twoot</button>
          <span>Length</span>
        </div>
      </form>
    </>
  );
};

export default TwootForm;
