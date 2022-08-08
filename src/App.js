import React, { useState } from "react";

import "./App.css";

import axios from "axios";

import Header from "./Components/Header.js";
import TwootForm from "./Components/TwootForm.js";
import TwootFeed from "./Components/TwootFeed.js";

function App() {
  const [twoots, setTwoots] = useState([]);

  axios.get("http://localhost:8080/twoots").then((serverTwoots) => {
    setTwoots(serverTwoots.data);
  });

  const updateTwootFeed = () => {
    axios.get("http://localhost:8080/twoots").then((serverTwoots) => {
      setTwoots(serverTwoots.data);
    });
  };

  return (
    <>
      <Header />
      <TwootForm updateFeed={updateTwootFeed} />
      <TwootFeed twoots={twoots} />
    </>
  );
}

export default App;
