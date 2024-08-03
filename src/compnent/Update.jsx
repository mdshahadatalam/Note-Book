import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { updateNote } from '../features/noteSlice';

export const Update = ({setVisible,editedTitle,editedDescription,editedId,setEditedTitle,setEditedDescription }) => {

  const dispatch = useDispatch()
  const handleEdit = ()=>{
   const updatedValues = {
    id:editedId,
    Title:editedTitle,
    Description:editedDescription,
    createdAt:new Date().toString()
   }
   dispatch(updateNote(updatedValues))
  }
  return (
    <>
    <div className='w-full h-screen bg-[rgba(255,255,255,0.8)] fixed top-0 left-0 flex justify-center items-center'>
      <div className='w-1/3 bg-white shadow-md rounded-md p-5'>
      <div>

       <div className=' relative'>
       <h1 className='font-mono text-black text-3xl text-center mb-2 '> update your notes</h1>
        <div className='absolute top-0 right-3 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>setVisible(false) }>
        <RxCross2 />
        </div>
       </div>


        <input className='w-full rounded-md border border-blue-300 py-2 outline-none ' placeholder='Title'
        value={editedTitle} onChange={(e)=>setEditedTitle(e.target.value) }  />

        <textarea maxLength={400} rows={5} className='w-full rounded-md border border-blue-300 py-2 outline-none mt-3 resize-none' placeholder='Description'
        value={editedDescription} onChange={(e)=> setEditedDescription(e.target.value)} />

        <button  className=' bg-[#333] text-white font-mono text-base rounded-md px-5 py-2 mt-3'
         onClick={handleEdit}>update note</button>
      </div>

      </div>

    </div>
    </>
  )
}
