import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Deital from './components/Deital';
import ListSongs from './components/ListSongs';
import { songs } from './Context';
import DataSong from './Data/songs.json';
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSong[0])
  console.log(song)
  const handleSetSong = (idSong) => {
    const song = DataSong.find(song => song.id === idSong)
    if (!song)
      setSong(DataSong[0])
    else
      setSong(song)
  }
  return (
    <div className='App'>
      <songs.Provider value={{ DataSong, song, handleSetSong }}>
        <Navbar></Navbar>
        <div className='grid grid-cols-3 h-screan-navbar-player bg-slate-700 overflow-hidden'>
          {/*span 1*/}
          <Deital />
          {/*span 2*/}
          <ListSongs />
        </div>
        <Playing></Playing>
      </songs.Provider>
    </div>
  );
}

export default App;
