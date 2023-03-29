import React, { useContext } from 'react'
import { songs } from '../Context'

export default function Deital() {
    const {song} = useContext(songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold'>
                Now playing
            </h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <div className='flex items-center justify-center mt-16'>
                <img className='w-[240px]' src={song.links.images[0].url} alt=''></img>
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt=''></img>
                <span className='text-white font-bold text-3xl'>{song.author}</span>
            </div>
        </div>
    )
}
