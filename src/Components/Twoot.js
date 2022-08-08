import React from "react";

import classes from "./Twoot.module.css";

const Twoot = (props) => {
const date = new Date()

const dateArr = props.date.split('-')
const twootDate = new Date(dateArr[0], dateArr[1]-1, dateArr[2])

const differenceInTime = date.getTime() - twootDate.getTime()

let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))


  return (
    <li className={classes.twoot}>
      <div className={classes.twootHeader}>
        <div className={classes.imgAndUser}>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${props.slug}.svg`}
            alt="User icon "
          ></img>
          <p>{props.author}</p>
        </div>
        <p className={classes.username}>@{props.slug}</p>
      </div>
      <div className={classes.twootContent}>
        <p>{props.content}</p>
      </div>
      <div className={classes.twootFooter}>
        {differenceInDays <= 0 && <p>Twooted today.</p>}
        {differenceInDays > 0 && <p>Twooted {differenceInDays} days ago.</p>}
        <div className={classes.actionButtons}>
          <button>
            <span className="fa-solid fa-flag"></span>
          </button>
          <button>
            <span className="fa-solid fa-retweet"></span>
          </button>
          <button>
            <span className="fa-solid fa-heart"></span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Twoot;
