import React, { useState } from "react";

import "./App.css";

import Header from "./Components/Header.js";
import UserInfo from "./Components/UserInfo.js";
import TwootForm from "./Components/TwootForm.js";
import TwootFeed from "./Components/TwootFeed.js";

const DUMMY_TWOOTS = [
  {
    _id: "JRmne2RXYn",
    author: "Henry David Thoreau",
    content:
      "Many men go fishing all of their lives without knowing that it is not fish they are after.",
    tags: ["sports", "competition"],
    authorSlug: "henry-david-thoreau",
    length: 90,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08",
  },
  {
    _id: "0Ny0rPtnM3",
    author: "Vince Lombardi",
    content: "Winners never quit and quitters never win.",
    tags: ["sports", "competition"],
    authorSlug: "vince-lombardi",
    length: 42,
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08",
  },
];

function App() {

  const [twoots, setTwoots] = useState(DUMMY_TWOOTS);

  

  return (
    <>
      <Header />
      <UserInfo />
      <TwootForm />
      <TwootFeed twoots={twoots} />
    </>
  );
}

export default App;
