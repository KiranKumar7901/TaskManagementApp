import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const InputData = ({inputDiv,setInputDiv}) => {
  return (
    <>
    <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
    <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className='w-2/6 bg-gray-900 p-4 rounded'>
            <div className='flex justify-end'>
                <button className='text-xl' onClick={()=>setInputDiv("hidden")}><IoCloseSharp /></button>
            </div>
            <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full bg-gray-700 my-3' />
            <textarea name="desc" placeholder='Desc' cols="30" rows="10" className='px-3 py-2 rounded w-full bg-gray-700 my-3'></textarea>
            <button className='px-3 py-2 bg-blue-400 rounded text-black font-semibold'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default InputData
