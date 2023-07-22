import React, {useState} from 'react';
import HomeBody from './Components/HomeBody';
import "./styles/HomeHeader.css"
import "./styles/Home.css"
import HomeHeader from './Components/HomeHeader';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
      <HomeHeader setInfo={setInfo}/>
      <HomeBody info={info}/>
    </>
  );
}

export default App;