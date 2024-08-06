import React, { useState } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IconContext } from "react-icons";


function Photos() {
  const [i,setI]=useState(0);
  const pics=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img8.jpg","img9.jpg"]
  return (
    <div className=' mb-10 flex flex-row lg:px-32 '>
          <button onClick={()=>setI( (i!==0)?(i-1):7)} className='heartbeat hover:bg-yellow-500 rounded-full p-2 h-20 mt-auto mb-auto'>

          <IconContext.Provider value={{ size: "2.5rem" }}>
            <div>
              <GrLinkPrevious />
            </div>
          </IconContext.Provider>

          </button>
          <div className='flex flex-col lg:flex-row p-2 lg:p-12 bg-white gap-x-10'>
          <img src={pics[i]} className='  w-full ml-auto mr-auto lg:h-96 lg:w-96  lg:flex-1 lg:p-5 bg-stone-200' />

          <div className='animate-pulse flex flex-col text-justify lg:w-1/3 w-full '>
            <h1 className='text-left font-serif lg:text-4xl text-2xl tracking-wide'>Lorem, ipsum.</h1>
            <br/>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, magni illo aperiam consequatur sint maxime mollitia autem ipsum voluptatibus quod odio, cumque pariatur quas magnam!</p>
            <br/>
            <br/>
            <br/>
            <button className=" mt-2 heartbeat bg-yellow-500 opacity-60 hover:opacity-80 text-white py-3 w-1/2">Find More</button>
          </div>

          </div>
          <button onClick={()=>setI((i+1)%8)} className='heartbeat lg:hover:bg-yellow-500 rounded-full p-2 h-20 mt-auto mb-auto'>
          <IconContext.Provider value={{ size: "2.5rem" }}>
            <div>
              <GrLinkNext />
            </div>
          </IconContext.Provider>

          </button>
        
    </div>
  )
}

export default Photos
