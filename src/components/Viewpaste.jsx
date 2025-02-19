import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Viewpaste = () => {
  const {id}= useParams();
  const allpaste= useSelector((state)=> 
    state.paste.pastes);
  const paste= allpaste.filter((p)=>p._id=== id)[0];
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
      <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>
          {/* {pasteId ? 'Update Your Paste' : 'Create a New Paste'} */}
        </h2>

        <div className='flex flex-col gap-4'>
          <input
            className='p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
            type='text'
            placeholder='Enter the title'
            value={paste.title}
            disabled
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className='p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 resize-none'
            placeholder='Enter content here...'
            value={paste.content}
            disabled
            onChange={(e) => setValue(e.target.value)}
            rows={15}
          />

          {/* <button onClick={createpaste}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition duration-300'>
            {pasteId ? 'Update My Paste' : 'Create My Paste'}
          </button> */}
        </div>
      </div>
    </div>
  );
};



export default Viewpaste