import React from "react";

import classes from './Header.module.css'

const Header = (props) =>{
  return (
    <div className={classes.header}>
      <h1>Twootr</h1>
      <button><strong>Write</strong> a new Twoot</button>
    </div>
  );
}

export default Header