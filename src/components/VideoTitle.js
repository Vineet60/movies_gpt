import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-blue-300 text-white  p-4 px-12 text-xl font-bold bg-opacity-50 rounded-lg hover:bg-opacity-40'>▶️Play</button>
            <button className='bg-blue-300 text-white  m-3 p-4 px-12 text-xl font-bold bg-opacity-50 rounded-lg hover:bg-opacity-40'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle