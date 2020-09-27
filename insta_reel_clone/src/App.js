import React from 'react';

import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <h1>Hye Riya, It works good!</h1>
      
      <div className='app__top'> 
        {/* image at top - logo */}
        {/* Reels text */}
        <img
        className="app__logo"
        src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
        alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {/* Container of app__videos (scrollable contains)*/}
        <VideoCard 
        channel="riyakumarint"
        avatarSrc='https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82410200_491043801830657_5176261217538277376_n.jpg?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_ohc=jwvkUhu0TLkAX8W7-kW&oh=8f2b3205f166c511d6381afd2fcb028e&oe=5F963096'
        song='Test song'
        url='https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/120326782_203749277835195_31477743277590724_n.mp4?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=RPerFQAS0NcAX_EBw3K&oe=5F7327F0&oh=c741c43d5a763be90edfdfcb27e495ed&dl=1'
        likes={959}
        shares={30}
        />
        </div>
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