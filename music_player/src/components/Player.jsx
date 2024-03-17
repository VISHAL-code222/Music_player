import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import "../CSS/Player.css"
import { information } from '../data'

function Player() {

 let[currentsong,setCurrentsong]=useState(0);
 let[isplaying,setIsplaying]=useState(false);



 const Playnewsong=()=>{
    setCurrentsong((prevIndex)=>
         (prevIndex+1)%information.length
    );
 }

 const playPreviousSong = () => {
    setCurrentsong((prevIndex) =>
      prevIndex === 0 ? information.length - 1 : prevIndex - 1
    );
  };


  const toogleplay=()=>{
    setIsplaying(!isplaying)
  }
  const onEnded = () => {
    Playnewsong();
  };




  return (
    <section className='music-start'>
    <h2>NOW-PLAYING:  {information[currentsong].title.toUpperCase()}</h2>
    <ReactPlayer
      className="react-player"
      url={information[currentsong].url}
      playing={isplaying}
      controls={false}
      onEnded={onEnded}
      width={"550px"}
      height={"220px"}
     
      
    />
    <div className='btn'>
      <button onClick={playPreviousSong}     ><img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Actions-go-previous-icon.png" alt="" /></button>
      <button onClick={toogleplay}>{isplaying ? <img src='https://icons.iconarchive.com/icons/graphicloads/100-flat/128/pause-icon.png'/> :<img src='https://icons.iconarchive.com/icons/graphicloads/100-flat/128/play-icon.png'/>}</button>
      <button onClick={Playnewsong}><img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Actions-go-next-icon.png" alt="" /></button>
    </div>
 </section>
  )
}

export default Player
