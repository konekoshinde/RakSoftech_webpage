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
        <div className="m-2">

        <form onSubmit={handleSubmit} className="flex flex-col w-1/3 p-4 bg-gray-300 border-4 rounded-lg border-gray-500">
          <input 
            type="name"
            placeholder="name"
            className="p-4 bg-gray-50 text-gray-600"
            onChange={(e) =>setClientName(e.target.value)}  
            />
            <br/>
          
          <textarea 
            rows="3"
            placeholder="Message"
            value={message}
            className="p-4 bg-gray-50 text-gray-600"
            onChange={(e) => setMessage(e.target.value)}  
            ></textarea>
            <br/>
          <button type="submit" className=" bg-gray-700 text-gray-200 text-lg font-bold p-4 w-1/2 ">Send Email</button>
        </form>

        </div>
      )
    }