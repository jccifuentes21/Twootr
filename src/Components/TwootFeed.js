import React from "react";

import Twoot from "./Twoot.js";
import classes from './TwootFeed.module.css'

const TwootFeed = (props) => {
  return (
    <ul className={classes.twootFeed}>
      {props.twoots.map((twoot) => (
        <Twoot
        key={twoot._id}
        content={twoot.content}
        author={twoot.author}
        slug={twoot.authorSlug}
        date={twoot.dateAdded}
        length={twoot.length}
        />
      ))}
    </ul>
  );
};

export default TwootFeed;
