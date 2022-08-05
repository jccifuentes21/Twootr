import React from "react";

import classes from "./Twoot.module.css";

const Twoot = (props) => {
  return (
    <li className={classes.twoot}>
      <div className={classes.twootHeader}>
        <div className={classes.imgAndUser}>
          <img src={`https://avatars.dicebear.com/api/bottts/${props.slug}.svg`}></img>
          <p>{props.author}</p>
        </div>
        <p className={classes.username}>@{props.slug}</p>
      </div>
      <div className={classes.twootContent}>
        <p>{props.content}</p>
      </div>
      <div className={classes.twootFooter}>
        <p>Twooted on {props.date}</p>
        <div className={classes.actionButtons}>
          <button><span className="fa-solid fa-flag"></span></button>
          <button><span className="fa-solid fa-retweet"></span></button>
          <button><span className="fa-solid fa-heart"></span></button>
        </div>
      </div>
    </li>
  );
};

export default Twoot;
