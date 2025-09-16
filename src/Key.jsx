import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58"
function Key() {
  const [privkey,setprivKey]=useState("")
    const [pubkey,setpubKey]=useState("")

  const generateKey = () => {
    const keypair = Keypair.generate();
    const secretKey = keypair.secretKey;
    const humanreadble=bs58.encode(secretKey)
    setprivKey(humanreadble)
    const publicKey = keypair.publicKey.toBase58();
    setpubKey(publicKey)
  };
  useEffect(()=>{
    generateKey()
  },[])

  return (
    <div className="w-[100vw] min-h-screen flex justify-center z-0">
      <div className="w-[100vw] max-w-7xl rounded-xl h-[100vh] max-h-[320px] shadow border p-2 md:p-0 border-gray-400 mt-12 z-0">
        <div className=" w-full flex flex-col">
          <div className="w-full shadow-2xs bg-gray-300 px-8 py-5 border-b border-gray-400">
            <h1 className="text-black font-semibold text-xl md:text-2xl ">
              Public / Private Key Pairs
            </h1>
          </div>
          <div className="w-full flex flex-col p-1 md:p-5 gap-5 md:gap-10 ">
            {/* private key */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Private key</h1>
              <div className="flex gap-2">
                <div className="flex-1 max-w-full shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
                  <p className="text-black tracking-widest break-words">{privkey}</p>
                </div>
                <motion.button
                  initial={{ scale: 1 }}
                  onClick={generateKey}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-white font-semibold px-1 md:px-4 cursor-pointer rounded-xs"
                >
                  Random
                </motion.button>
              </div>
            </div>
            {/* public key */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Public Key</h1>
              <div className="w-full bg-gray-200 shadow-xs p-3 border border-gray-300 text-gray-600 overflow-x-auto">
                <p className="text-black tracking-widest break-words">{pubkey}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Key;
