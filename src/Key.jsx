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
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div className="w-[100vw] max-w-7xl rounded-xl h-[100vh] max-h-[320px] shadow border border-gray-400 mt-12">
        <div className=" w-[100vw] max-w-[100%] flex flex-col">
          <div className="w-[100vw] max-w-[100%] shadow-2xs bg-gray-300 px-8 py-5 border-b border-gray-400">
            <h1 className="text-black font-semibold text-2xl ">
              Public / Private Key Pairs
            </h1>
          </div>
          <div className="flex flex-col p-5 gap-10">
            {/* private key */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Private key</h1>
              <div className="flex">
                <div className="w-[100vw] max-w-[100%] shadow-xs p-3 border border-gray-300 text-gray-600 ">
                  <p className="text-black tracking-widest">{privkey}</p>
                </div>
                <motion.button
                  initial={{ scale: 1 }}
                  onClick={generateKey}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 text-white font-semibold px-4 cursor-pointer"
                >
                  Random
                </motion.button>
              </div>
            </div>
            {/* public key */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">Public Key</h1>
              <div className="w-[100vw] max-w-[100%] bg-gray-200 shadow-xs p-3 border border-gray-300 text-gray-600 ">
                <p className="text-black tracking-widest">{pubkey}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Key;
