'use client';

import { useState } from "react";
import Image from "next/image";
import axios from "axios";


export default function WhatsApp() {
    async function handleclick(){
            let url = `https://web.whatsapp.com/send/?phone=${process.env.NUMBER}`;
            url += `&text=${encodeURI("hello")}&app_absent=0`;
            window.open(url);  
        
    }

    return (
        <div>
            <button onClick={()=>handleclick()} className="absolute bottom-5 right-5">
                <img src="whatsapp-873316_640.png" width={50} height={100} />
            </button>
            

        
        </div>
    )
}