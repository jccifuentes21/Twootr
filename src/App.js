import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.js';
import UserInfo from './Components/UserInfo.js';
import TwootForm from './Components/TwootForm.js';
import TwootFeed from './Components/TwootFeed.js'

function App() {
  return (
    <>
      <Header/>
      <UserInfo/>
      <TwootForm/>
      <TwootFeed/>
    </>
  );
}

export default App;
