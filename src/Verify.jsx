import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageAtom, PublicKeyAtom, SignatureAtom, successAtom } from "./recoil/atom";
import nacl from "tweetnacl";
import bs58 from "bs58"
import { Keypair } from "@solana/web3.js";

function Verify() {
  const messageatom = useRecoilValue(messageAtom);
  console.log("me",messageatom)
  const setValue=useSetRecoilState(messageAtom)
  const signature = useRecoilValue(SignatureAtom);
  const publicKey=useRecoilValue(PublicKeyAtom)
  const meesagetext = new TextDecoder().decode(messageatom);
  const setdone=useSetRecoilState(successAtom)

  const verifySignKey = () => {
    if (!publicKey || !signature || !messageatom) {
      console.log("Missing data");
      return;
    }
  const verify=  nacl.sign.detached.verify(messageatom, signature, publicKey.toBytes());
   if (verify === true) {
    setdone(true)
   }else{
     setdone(false)
   }
   console.log(verify)
   
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
          <p className="text-black tracking-widest break-words">{publicKey}</p>
        </div>
      </div>

      <div className="">
        <h1>Message Signature</h1>
        <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
          <p className="text-black tracking-widest break-words">{signature instanceof Uint8Array ? bs58.encode(signature) : "No signature key"}</p>
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
