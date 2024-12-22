'use client'
import { useState , useEffect } from "react";

export default function Home() {
  const [count , setCount] = useState(0)

   useEffect (() => {
    alert('If you want to run this code? Click Ok!')
}, [])
  return (
    <div className="flex  items-center justify-center flex-col h-screen mx-auto" style={{ backgroundImage: `url('/download.jpeg')` }}>
    
      <h1 className="text-black text-4xl underline font-playwrite">Co<span className="text-white">unt</span>er</h1>
      <div className=" w-[400px] h-[150px] backdrop-blur-sm rounded-sm shadow-md flex items-center gap-[70px] justify-center flex-row ">
      <button className="text-4xl text-black hover:text-white " onClick={() => setCount(count - 1) } >  -  </button>
      {count}

      <button  className="text-4xl text-black hover:text-white" onClick={() => setCount(count + 1) } >  +  </button>
      </div>
    </div>
  );
}
