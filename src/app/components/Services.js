import React from 'react'

function Services() {
  return (
    <div className='flex flex-col bg-blue-950 w-full  text-white mb-10 fade-in-bottom'>
      <h1 className="slide-in-fwd-center bg-black font-mono text-white w-1/3 h-50 mt-10 ml-auto mr-auto font-bold text-5xl text-center p-10"> Our services</h1>
      <p className='text-center mt-5'>Lorem ipsum dolor sit amet.</p>
      <div className='flex flex-row justify-around p-10 '>
        <li className=' hover:border-2 mr-10 font-mono p-10 bg-slate-50 text-black border-yellow-600  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio.</li>
        <li className=' hover:border-2 mr-10 font-mono p-10 bg-slate-50 text-black border-yellow-600  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio.</li>
        <li className=' hover:border-2 mr-10 font-mono p-10 bg-slate-50 text-black border-yellow-600  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, optio.</li>
        
      </div>
    </div>
  )
}

export default Services
