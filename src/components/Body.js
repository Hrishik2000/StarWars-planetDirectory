import React from 'react'
import CardContainer from './CardContainer'


const Body = () => {

  return (

    <div className='bg-black'>
      {/* <img className='h-full w-full absolute' src='https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg'></img> */}
      <div className=' flex flex-col '>
      <h1 className='text-white font-bold text-4xl mx-auto my-6  '>Star Wars Planets Directory</h1>


      <CardContainer/>
      </div>
      
    </div>
  )
}

export default Body