import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hye Riya, It works good!</h1>
      
      <div className='app__top'> 
        {/* image at top - logo */}
        {/* Reels text */}
        <img
        className="app__logo"
        src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
        alt=""
        />
      </div>

      <div className="app__videos">
        {/* Container of app__videos (scrollable contains)*/}</div>
    </div>
  );
}

export default App;


/* IG Reels Clone built with React
Deploy using Firebase 
Videos are stored in Firebase 
Using Firebase
CSS Tricks + Hacks
How the Tik tok style Vertical Snapping Word
Material UI
React Ticker... (For scrolling ticker) 
You'll learn REACT HOOKS */