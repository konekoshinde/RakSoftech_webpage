import React from 'react'


function Header() {
  return (
    <div className=" my-10 w-full flex flex-row  ">
      <img src="img1.jpg" className='m-10 slide-in-fwd-center'/>
      <div className="p-5 bg-slate-50 mt-96 font-bold text-5xl text-center fade-in-bottom">
      <h1 className='text-sky-800'> Maiden Farm</h1>
      <br/>
      <p className="text-xl font-normal font-mono text-slate-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni sunt officia. Repellat saepe reiciendis esse asperiores quo, quisquam voluptatem. Quidem, odio. Facilis sunt aliquam ex ad enim eius animi dicta deleniti sed non, quis pariatur. Dolore magni tempora dolorem, repudiandae praesentium eveniet, laboriosam iure explicabo natus quisquam tempore et?
      </p>
      <br/>
      <button className='text-2xl text-amber-300 bg-black opacity-50 hover:opacity-100 rounded-lg p-5 heartbeat'>Enquiry Now</button>
    </div>
   </div>
  )
}

export default Header
