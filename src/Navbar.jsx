import React, { Component, useState } from "react";
import solana from "./assets/solana.png";
import hame from "./assets/hame.png";
import cancel from "./assets/cancel.png"
import {AnimatePresence, motion} from "framer-motion"
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="w-full h-[70px]  sticky top-0 z-[999] shadow-2xs flex items-center border-b border-b-gray-500">
      <div className="w-full md:mx-[80px] mx-3">
        <div className="flex justify-between items-center">
          {/* left side widget */}
           <Link to='/'>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-gray-700 md:w-auto w-[50px] p-1 rounded-xl flex items-center">
              <img className="md:w-[40px]" src={solana} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className=" md:block hidden text-xl font-bold tracking-wider text-shadow-md text-shadow-cyan-400">
                SOLANA
              </h1>
              <p className="text-gray-600 dark:text-gray-300 md:block hidden text-[8px] md:text-xs">
                Blockchain Demo: Public / Private Keys & Signing
              </p>
            </div>
          </div>
          </Link>
          {/* right side widget */}
          <div className="flex items-center gap-7">
            <div className="md:block hidden">
              <ul className="flex items-center gap-7">
                <Link to='/keys'>
                <li className="cursor-pointer">Keys</li>
                </Link>
                 <Link to='/signature'>
                <li className="cursor-pointer">Signatures</li>
                </Link>
                <li className="cursor-pointer">Transaction</li>
                <li className="cursor-pointer">Blockchain</li>
              </ul>
            </div>
            <div onClick={() => setOpen(!open)} className="md:hidden block">
              {open ==false ? <img className="w-[30px]" src={hame} alt="" /> : <img className="w-[30px]" src={cancel}/>}
            </div>
            <Toggle/>
          </div>
        </div>

      </div>
       
    </div>
    <AnimatePresence>

    {open==true ? 
     <motion.div initial={{x:-400,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-400,opacity:1}} transition={{duration:0.4,ease:"easeInOut"}} className="md:hidden block bg-gray-200 w-[100vw] max-w-[100%] mt-[0px] h-[270px] px-4 py-4 z-[999]">
          <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-4  md:block">
            <Link to='/keys'>
            <li onClick={()=>setOpen(false)} className="text-xm font-semibold w-[100vw] bg-white p-2">Keys</li>
            </Link>
            <Link to='/signature'>
            <li onClick={()=>setOpen(false)} className="text-xm font-semibold w-[100vw] bg-white p-2">Signatures</li>
            </Link>
            <li className="text-xm font-semibold w-[100vw] bg-white p-2">Transaction</li>
            <li className="text-xm font-semibold w-[100vw] bg-white p-2">Blockchain</li>
          </ul>
          <p className="text-xs font-semibold">
                Blockchain Demo: Public / Private Keys & Signing
          </p>
          </div>
        </motion.div>
        :null}
        </AnimatePresence>
        </>

  );
}

export default Navbar;
