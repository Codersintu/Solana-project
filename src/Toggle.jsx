import React, { useContext, useState } from 'react'
import {motion} from "motion/react"
function Toggle() {
   const [on,setOn]=useState(false)
    
  return (
    <div className=''>
        <div onClick={()=>{setOn(!on)}} className="bg-green-600 w-[50px] cursor-pointer  h-[25px] rounded-xs flex flex-col justify-center">
            <motion.div transition={{ duration:0.3 , ease:"easeInOut" }}  animate={{x: !on ? 0:24 }}  className="bg-white w-[20px] h-[20px] rounded-xs mx-0.5"></motion.div>
        </div>
    </div>
  )
}

export default Toggle