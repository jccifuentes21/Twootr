import React from "react";

import classes from './Header.module.css'

const buttonClickHandler = () =>{
  document.getElementById('twoot-input').focus()
}

const Header = (props) =>{
  return (
    <div className={classes.header}>
      <h1>Twootr</h1>
      <button onClick={buttonClickHandler}><strong>Write</strong> a new Twoot</button>
    </div>
  );
}

export default Header