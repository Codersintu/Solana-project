import React, { useState } from 'react'
import Sign from './Sign'
import Verify from './Verify'
import { useRecoilValue } from 'recoil'
import { successAtom } from './recoil/atom'

function Signature() {
    const [show,setshow]=useState(false)
    const done=useRecoilValue(successAtom)

  return (
    <div className="w-[100vw] min-h-screen flex justify-center z-0 ">
      <div className={`w-[100vw] max-w-7xl rounded-xl h-full shadow border md:p-0 border-gray-400 mt-12 z-0 ${done===true ? "bg-green-300" :"bg-white"}`}>
        <div className=" w-full  flex flex-col">
          <div className="w-full relative shadow-2xs rounded-t-xl bg-gray-300 px-8 py-5">
            <h1 className="text-black mb-7 font-semibold text-xl md:text-2xl ">
              Signatures
            </h1>
            <div className="absolute left-0 flex bottom-0 ml-6">
              <button onClick={()=>setshow(false)} className={`py-2 px-4 ${show===false ?"bg-white":"bg-gray-300"} text-blue-600 rounded-xs cursor-pointer`}>Sign</button>
              <button onClick={()=>setshow(!show)} className={`py-2 px-4 ${show===true ?"bg-white":"bg-gray-300"} text-blue-600 rounded-xs cursor-pointer`}>Verify</button>
            </div>
          </div>
          {show === false ? <Sign/>:<Verify/>}
         
        </div>
      </div>
    </div>
  )
}

export default Signature