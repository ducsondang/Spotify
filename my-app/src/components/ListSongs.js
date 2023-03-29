import React, { useContext, useEffect, useState } from 'react'
import { songs } from '../Context'

export default function ListSongs() {
    const { DataSong, handleSetSong, song } = useContext(songs)
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
    }
    useEffect(()=>{
        setidSong(song.id)
    },[song])
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead>
                    <tr className='text-neutral-400'>
                        <th className='w-[10%]'>id</th>
                        <th className='text-left'>title</th>
                        <th className='w-[10%]'>author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSong.map((song, index) => (
                        <tr className={`h-12 hover:bg-slate-500 bg-slate-800 ${idSong === song.id && 'text-cyan-500 bg-slate-500'} text-neutral-400`}
                            key={index}
                            onClick={() => handlePlaySong(song.id)}>
                            <td className='text-center'>{index + 1}</td>
                            <td className='text-left'>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
