import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs} from '../Context';
export default function Playing() {
    const { song, handleSetSong } = useContext(songs)
    const handleNext = () =>{
        handleSetSong(song.id + 1)
    }
    const handlePre = () =>{
        handleSetSong(song.id - 1)
    }
  return (
    <div>
    <AudioPlayer className='playing-scren' src={song.url} layout="stacked-reverse" 
    showSkipControls={true} 
    showJumpControls={false} 
    onClickNext={handleNext}
    onClickPrevious={handlePre}
    />
    </div>
  )
}
