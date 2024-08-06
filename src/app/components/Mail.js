'use client';

import { useState } from "react";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function MailForm() {
        
      const [clientName, setClientName]=useState("");
      
      const [message, setMessage] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(clientName==="" || message===""){
            throw "please fill the details";
          }
          const result=await axios.post("/api/SendMail", {
            "from":clientName,
            "to":"konekoshinde2004@gmail.com",
            "message":message
          });
          alert(result.data);
        } catch(err) {
          alert(err);
        }
      };

      return (
        <div className="flex flex-col justify-around fade-in lg:flex-row gap-y-10 bg-black text-white p-10"  >
          <ul className="flex flex-col justify-around  text-center ">
            <li className="font-mono text-2xl font-bold mb-10 tracking-widest slide-in-fwd-center text-yellow-500">Contact</li>
            <li>+91 XXXXXXXX00</li>
            <li>+91 XXXXXXXX00</li>
            <li>XXXX@example.com</li>
            <li className=""> <IoLocation className=" text-yellow-500 mr-auto ml-auto text-3xl"/>HQXJ+Q9C, Aundh - Ravet <br/> BRTS Rd, Kavde Nagar, Rahatani, <br/>Pimpri-Chinchwad, Maharashtra 411027</li>
          </ul>

          <div className="text-center mt-auto mb-auto">
            <h1 className="font-bold text-2xl lg:text-5xl lg:mt-24 text-yellow-500 ">Maiden's<br/> Farm
            
            <ul className="mt-10 font-normal flex flex-row text-lg gap-x-2 text-center text-white"> connect with us:
              
              <li className="mt-auto mb-auto"> <FaFacebook className="text-yellow-500" /></li>
              <li className="mt-auto mb-auto"> <FaInstagram className="text-yellow-500"/></li>
              <li className="mt-auto mb-auto"> <FaYoutube className="text-yellow-500"/> </li>
            </ul>
            </h1>
            
          </div>



        <form onSubmit={handleSubmit} className="flex flex-col ml-5 lg:ml-0 ">
          <h1 className=" font-mono text-2xl  font-bold mb-10 tracking-widest slide-in-fwd-center text-yellow-500">Mail us</h1>
          <input 
            type="name"
            placeholder="name"
            className="p-2 rounded-lg bg-slate-100"
            onChange={(e) =>setClientName(e.target.value)}  
            />
            <br/>
          
          <textarea 
            rows="3"
            placeholder="Message"
            value={message}
            className="p-2 rounded-lg bg-slate-100"
            onChange={(e) => setMessage(e.target.value)}  
            ></textarea>
            <br/>
          <button type="submit" className=" heartbeat bg-yellow-500 text-white opacity-50  hover:opacity-80  py-2 w-32 lg:w-1/4 ">Send</button>
        </form>

        </div>
      )
    }