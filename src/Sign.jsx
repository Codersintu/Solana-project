import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { messageAtom, PrivateKeyAtom, SignatureAtom } from './recoil/atom'
import {motion } from "motion/react"
import nacl from "tweetnacl";
import bs58 from "bs58"

function Sign() {
      const privkey=useRecoilValue(PrivateKeyAtom)
      const [values,setValue]=useState('')
      const signature=useRecoilValue(SignatureAtom)
      const setSignature=useSetRecoilState(SignatureAtom)
      const messageatom=useRecoilValue(messageAtom)
      const setmessage=useSetRecoilState(messageAtom)

      const generateSignKey=(e)=>{
        e.preventDefault();
       const message = new TextEncoder().encode(values);
       setmessage(message)
         const secretKeyUint8 = bs58.decode(privkey);
      const signature = nacl.sign.detached(messageatom, secretKeyUint8);
      setSignature(bs58.encode(signature))
      }
  return (
    <div className="w-full flex flex-col p-1 md:p-5 gap-5 md:gap-10 ">
        <div className="">
       <h1>Message</h1>
       <textarea onChange={(e)=>setValue(e.target.value)} className='w-full border border-gray-300 p-2' ></textarea>
       </div>
       <div className="">
        <h1>Private Key</h1>
        <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
            <p className="text-black tracking-widest break-words">{privkey}</p>
        </div>
       </div>
       <div className="w-full">
         <motion.button
                  onClick={generateSignKey}
                  className="bg-cyan-500 w-full text-white font-semibold px-2 py-3 md:px-4 md:py-3 cursor-pointer rounded-xs"
                >
                  Create Sign...
        </motion.button>
       </div>
       <div className="">
        <h1>Message Signature</h1>
        <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
            <p className="text-black tracking-widest break-words">{signature}</p>
        </div>
       </div>
    </div>
  )
}

export default Sign