import React from 'react'
import { Alert } from "flowbite-react";

function Header() {
  return (
    <div className=" my-10 w-full flex flex-col lg:flex-row">
      <img src="img2.jpg" className='m-0 mt-10 slide-in-fwd-center sm:w-full flex-1 lg:w-1/2 lg:p-8 bg-stone-200 lg:ml-2'/>
      <div className="p-8 fade-in-bottom h-fit mt-10 lg:w-1/3 text-justify">
      <h1 className=' text-5xl font-bold font-serif text-yellow-500 text-left'> Maiden's <br/>Farm</h1>
      <br/>
      <p className=" font-normal font-sans "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad commodi autem et sed ex ipsa quam officiis sunt voluptate, porro ducimus corrupti. Quisquam fugit corporis debitis totam nesciunt error optio voluptate ratione maxime itaque odit officia consequuntur similique sit reiciendis nobis, magnam doloribus nemo impedit, sunt qui quibusdam consequatur esse cumque. Tempore, suscipit tenetur porro aspernatur accusamus molestias ipsam quia repudiandae maxime? Obcaecati doloribus laboriosam rem quod, architecto atque.</p><br/>
      <br/>
      <button className=" animate-bounce mt-2 bg-yellow-500 opacity-60 hover:opacity-80 text-white py-3 w-1/2">Enquiry Now</button>
    </div>
   </div>
  )
}

export default Header
