import React from 'react'


function Header() {
  return (
    <div className=" mb-10 flex flex-row ">
    <div className=" mt-10 ml-14 fade-in-left">
      <img src="front.png" width={800}/>
    </div>
    <div className=" bg-black text-white w-1/3 h-50 mt-60 font-bold text-5xl p-10 fade-in-right">
      <h1 > IT Consulting & Services</h1>
      <br/>
      <p className="text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi eius placeat, ipsum sit officia quia tempora in itaque corrupti.</p>
    </div>
  </div>
  )
}

export default Header
