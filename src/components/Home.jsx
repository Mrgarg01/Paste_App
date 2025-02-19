import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get('pasteId');
  const dispatch = useDispatch();

  const allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allpaste.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allpaste]);

  function createpaste() {
    if (title.trim().length === 0 || value.trim().length === 0) {
      toast.error("Empty Title or Content");
      return;
    }

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: (new Date()),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }

    // Reset fields after creation/update
    setTitle('');
    setValue('');
    setSearchParam({});
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-white'>
      <div className='bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <h2 className='text-2xl font-semibold text-white mb-4 text-center'>
          {pasteId ? 'Update Your Paste' : 'Create a New Paste'}
        </h2>

        <div className='flex flex-col gap-4'>
          {/* Title Input */}
          <input
            className='p-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400'
            type='text'
            placeholder='Enter the title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Content Textarea */}
          <textarea
            className='p-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none'
            placeholder='Enter content here...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={10}
          />

          {/* Create / Update Button */}
          <button 
            onClick={createpaste}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-xl transition duration-300'>
            {pasteId ? 'Update My Paste' : 'Create My Paste'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
