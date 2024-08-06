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
      
      <CarouselTransition/>
      <Header/>
      <Photos/>
      <Services/>
      <MailForm/>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.43596413053!2d73.77829561033309!3d18.59945078243651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99df9e40001%3A0x48f7b7540b0d9fa2!2sRAK%20Softech%20Private%20Ltd.!5e0!3m2!1sen!2sin!4v1722502262523!5m2!1sen!2sin" 
       allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full border-0 ">
      </iframe>
      
      <div className="w-full h-10 text-white bg-black text-sm text-center">
       <p className="p-2 text-yellow-500"> By Chaitrali Shinde</p>
      </div>
      <WhatsApp/>
    </div>
  );
}
