import React, { useRef, useState } from "react";

import classes from "./TwootForm.module.css";
import axios from "axios";

const TwootForm = (props) => {
  const [user, setUser] = useState("John Doe");
  const [username, setUsername] = useState("john-doe");
  const [isEditing, setIsEditing] = useState(false);
  const [twootLength, setTwootLength] = useState(140);
  const twootContent = useRef();
  const date = new Date();
  const currentDate = date.toISOString().split("T")[0];
  const [twootLengthValid, setTwootLengthValid] = useState(true)

  const postTwootHandler = (event) => {
    event.preventDefault();

    const newTwoot = {
      author: user,
      content: twootContent.current.value,
      authorSlug: username,
      dateAdded: currentDate,
    };

    

    axios.post("/twoot", { newTwoot }).then((newData) => {
      props.updateFeed();
    });

    twootContent.current.value = "";
    setTwootLength(0)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const usernameChangeHandler = (event) => {
    let user = event.target.value;
    setUser(user);

    let username = user.replaceAll(" ", "-");

    setUsername(username.toLowerCase());
  };

  const twootLengthHandler = (event) => {
    const length = event.target.value.length;
    setTwootLength(140-length);

    if(length < 141 && length >= 0){
      setTwootLengthValid(true)
    } else setTwootLengthValid(false)
  };

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

          {isEditing && (
            <div>
              <input
                className={classes.usernameInput}
                onChange={usernameChangeHandler}
              ></input>
              <span
                className={`${classes.editButton} fa-solid fa-circle-check`}
                onClick={stopEditingHandler}
              ></span>
            </div>
          )}

          <span className={classes.username}>@{username}</span>
        </div>
        <label>Compose Twoot</label>
        <input
          id="twoot-input" 
          onChange={twootLengthHandler}
          className={`${classes.twootInput} ${!twootLengthValid && classes.invalid}`}
          placeholder="What are you humming about?"
          ref={twootContent}
          required
        ></input>
        <div className={classes.twootFormFooter}>
          <button className={`${classes.twootFormFooterButton} ${!twootLengthValid && classes.invalidButton}`} type="submit" disabled={!twootLengthValid}>Twoot</button>
          <span className={`${!twootLengthValid && classes.invalid}`}>{twootLength > 140 ? '-'+ twootLength : twootLength}</span>
        </div>
      </form>
    </>
  );
};

export default TwootForm;
