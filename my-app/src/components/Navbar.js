import React from 'react'

export default function Navbar() {
  return (
    <div className='flex bg-slate-900 items-center justify-evenly'>
      <div className="h-24 text-white text-5xl text-center leading-[6rem]">
        <i className="fa fa-spotify mr-3"></i>
        Music By Son
      </div>
      <div>
        <button className='text-white bg-slate-600 w-12 h-10'>Sgin</button>
      </div>
    </div>

  )
}
