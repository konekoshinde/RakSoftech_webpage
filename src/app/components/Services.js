import React from 'react'

function Services() {
  return (
    <div className='flex flex-col w-full pb-10 pt-10 mb-10 fade-in-bottom '>
      <h1 className="flex-none  slide-in-fwd-center font-serif ml-5 lg:ml-auto lg:mr-auto tracking-wide text-2xl lg:text-5xl text-center font-thin mt-10 "> A Special Place for Your <br/> Needs</h1>
      <br/>
      <div className=' bg-stone-200 flex flex-col lg:flex-row justify-around p-10 text-normal lg:text-xl gap-y-10 lg:gap-x-10'>
        <div className='relative hover:animate-pulse'>
          <h1 className='absolute font-mono w-1/2 p-5 mt-5 bg-white opacity-70 '>Dine</h1>
          <img src="img10.jpg" width={800} height={200} className=''/>
        </div>
        <div className='relative hover:animate-pulse'>
          <h1 className='absolute font-mono w-1/2 p-5 mt-5 bg-white opacity-70'>Room</h1>
          <img src="img11.png" width={800} height={200} className=''/>
        </div>
        <div className='relative hover:animate-pulse'>
          <h1 className='absolute font-mono w-1/2 p-5 mt-5 bg-white opacity-70'>Pool</h1>
          <img src="img12.jpg" width={800} height={200} className=''/>
        </div>

        
      </div>
    </div>
  )
}

export default Services
