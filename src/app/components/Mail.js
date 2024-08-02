'use client';

import { useState } from "react";
import axios from "axios";

export default function MailForm() {
        
      const [clientName, setClientName]=useState("");
      
      const [message, setMessage] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
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
        <div className="bg-yellow-500 p-10 flex flex-row justify-around mb-10 " >
          <ul className="flex flex-col justify-around">
            <li className="font-mono text-3xl tracking-widest slide-in-fwd-center">Contact us</li>
            <li>+91 XXXXXXXX00</li>
            <li>+91 XXXXXXXX00</li>
            <li>XXXX@example.com</li>
            <li>HQXJ+Q9C, Aundh - Ravet BRTS Rd, <br/> Kavde Nagar, Rahatani, Pimpri-Chinchwad, Maharashtra 411027</li>
          </ul>
          
        <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
          <h1 className=" font-mono text-3xl mb-10 tracking-widest slide-in-fwd-center">Mail us</h1>
          <input 
            type="name"
            placeholder="name"
            className="p-5 rounded-lg bg-slate-100"
            onChange={(e) =>setClientName(e.target.value)}  
            />
            <br/>
          
          <textarea 
            rows="3"
            placeholder="Message"
            value={message}
            className="p-5 rounded-lg bg-slate-100"
            onChange={(e) => setMessage(e.target.value)}  
            ></textarea>
            <br/>
          <button type="submit" className="bg-black opacity-60 hover:opacity-80 text-slate-100 font-bold py-2 w-1/4 rounded-xl">Send Email</button>
        </form>

        </div>
      )
    }