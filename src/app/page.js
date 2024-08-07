'use client';

import { CarouselTransition } from "./components/Carasol";
import Header from "./components/Header";
import MailForm from "./components/Mail";
import Photos from "./components/Photos";
import Services from "./components/Services";

import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <div className="bg-orange-50" >

     <div className="flex flex-row justify-around">
    <h1 className=" font-bold text-4xl lg:m-5 text-yellow-500 ">Maiden's<br/> Farm</h1>
    <div className="hidden lg:block lg:m-10 flex flex-row justify-around  font-bold font-mono ">
        <a href="#Introduction" className="mt-auto mb-auto  hover:bg-yellow-300 text-black p-3 mx-5 ">About</a>
        <a href="#Gallery" className="mt-auto mb-auto  hover:bg-yellow-300 text-black p-3 mx-5">Gallery</a>
        <a href="#Contact" className="mt-auto mb-auto  hover:bg-yellow-300 text-black p-3 mx-5">Contact </a>
        <a href="#TOP" className="mt-auto mb-auto  hover:bg-yellow-300 text-black p-3 mx-5">Go To top</a>
      </div>
    </div> 
      
        

      <a id="TOP">
        <CarouselTransition/>
      </a>
      
      <a id="Introduction">
        <Header/>
      </a>

      <a id="Gallery">
        <Photos/>
      </a>
      
      <a id="Contact">

      <Services/>
      <MailForm/>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.43596413053!2d73.77829561033309!3d18.59945078243651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99df9e40001%3A0x48f7b7540b0d9fa2!2sRAK%20Softech%20Private%20Ltd.!5e0!3m2!1sen!2sin!4v1722502262523!5m2!1sen!2sin" 
      allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full border-0 ">
      </iframe>
      
      </a>

      <div className="w-full h-10 text-white bg-black text-sm text-center">
       <p className="p-2 text-yellow-500"> By Chaitrali Shinde</p>
      </div>
      <WhatsApp/>
      <div className="lg:m-2 flex flex-col lg:gap-y-10 justify-around font-mono w-2/12 h-1/4 lg:w-1/12 fixed bottom-1/4">
        <a href="#Introduction" className="bg-orange-300 my-2 text-black lg:p-1">About</a>
        <a href="#Gallery" className="bg-orange-300 my-2 text-black lg:p-1">Gallery</a>
        <a href="#Contact" className="bg-orange-300 my-2 text-black lg:p-1">Contact </a>
        <a href="#TOP" className="bg-orange-300 my-2 text-black lg:p-1">top</a>
      </div>
    </div>
  );
}
