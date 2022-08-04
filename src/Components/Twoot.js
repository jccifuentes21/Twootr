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
          <button>Flag</button>
          <button>Retweet</button>
          <button>Like</button>
        </div>
      </div>
    </li>
  );
};

export default Twoot;
