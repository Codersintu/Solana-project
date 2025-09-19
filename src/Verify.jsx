import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageAtom, PublicKeyAtom, SignatureAtom, successAtom } from "./recoil/atom";
import nacl from "tweetnacl";
import bs58 from "bs58"

function Verify() {
  const messageatom = useRecoilValue(messageAtom);
  const setValue=useSetRecoilState(messageAtom)
  const publickey = useRecoilValue(PublicKeyAtom);
  const signature = useRecoilValue(SignatureAtom);
  const meesagetext= new TextDecoder().decode(messageatom)
  const setdone=useSetRecoilState(successAtom)

  const verifySignKey = () => {
    const messageUint8 = new TextEncoder().encode(messageatom); 
    const signatureUint8 = bs58.decode(signature);
    const publicKeyUint8 = bs58.decode(publickey);

  const verify=  nacl.sign.detached.verify(messageUint8, signatureUint8, publicKeyUint8);
   if (verify === true) {
    setdone(true)
   }else{
     setdone(false)
   }
   
  };
  return (
    <div className="w-full flex flex-col p-1 md:p-5 gap-5 md:gap-10 ">
      <div className="">
        <h1>Message</h1>
        <textarea
        // onChange={(e)=>setValue(e.target.value)}
          className="w-full border border-gray-300 p-2"
        >
          {meesagetext}
        </textarea>
      </div>
      <div className="">
        <h1>Public Key</h1>
        <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
          <p className="text-black tracking-widest break-words">{publickey}</p>
        </div>
      </div>

      <div className="">
        <h1>Message Signature</h1>
        <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
          <p className="text-black tracking-widest break-words">{signature}</p>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={verifySignKey}
          className="bg-cyan-500 w-full text-white font-semibold px-2 py-3 md:px-4 md:py-3 cursor-pointer rounded-xs"
        >
          Verify...
        </button>
      </div>
    </div>
  );
}

export default Verify;
