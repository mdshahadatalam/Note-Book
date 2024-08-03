import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../features/noteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

export const Home = () => {

  const [Title,setTitle]=useState(" ");
  const [Description,setDescription] = useState(" ");
  const dispatch = useDispatch();
  const handleAddNote =(e)=>{
    e.preventDefault();

    if(Title !== " " && Description !== " "){
      const newNote={
        id: Date.now().toString(32),
        Title,
        Description,
        createdAt:new Date().toString(),
      }
      setTitle("")
      setDescription("")
      dispatch(addNote(newNote));
      toast.success("successful added ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        
        });
      
    } else{
      toast.error(" Please fill up the fields", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        
        });
    }
    
  };
  
  return (
    <>
    <Helmet>
      <title> Home</title>
    </Helmet>
    <ToastContainer/>
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-1/ shadow-md rounded-md px-4 py-5 box-border  bg-amber-500'>
      <div>
        <h1 className='font-mono text-black text-3xl text-center mb-2 '> Add Your Notes</h1>
        <input className='w-full rounded-md border border-blue-300 py-2 outline-none ' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={Title} />
        <textarea maxLength={400} rows={5} className='w-full rounded-md border border-blue-300 py-2 outline-none mt-3 resize-none' placeholder='Description' onChange={(e)=>setDescription(e.target.value)} value={Description} />
        <button onClick={handleAddNote} className=' bg-[#333] text-white font-mono text-base rounded-md px-5 py-2 mt-3'>Save note</button>
      </div>

      </div>

    </div>
    </>
  )
}
