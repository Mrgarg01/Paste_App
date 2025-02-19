import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
  const [seachTerm, setSearchTerm] = useState('');

  const pastes = useSelector((state) => state.paste.pastes);
  console.log((pastes));
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(seachTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  function handelShare(content) {
    let whatAppURl = `whatsapp://send?text=${content}`;
    window.location.href = whatAppURl;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-6 text-white">

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="search"
          placeholder="Search Here..."
          value={seachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded-2xl w-full md:w-[600px] mt-5 border-2 border-gray-600 bg-gray-800 text-white outline-none focus:border-sky-400 transition"
        />
      </div>

      {/* Paste List */}
      <div>
      <h1 className="text-center  font-semibold text-white">All Pastes</h1>      
      <div className="flex flex-col gap-5 w-full md:w-4/5 mx-auto mt-6">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div key={paste?._id} className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{paste.title}</h3>
              {/* Content */}
              <p className="text-gray-300 mb-3">
                {paste.content.length <= 50 ? paste.content : paste.content.substring(0, 50) + "..."}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 justify-between">
                <Link
                  to={`/?pasteId=${paste?._id}`}
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
                  Edit
                </Link>
                <Link
                  to={`/pastes/${paste?._id}`}
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition">
                  View
                </Link>
                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition">
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}
                  className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-800 transition">
                  Copy
                </button>
                <button
                  onClick={() => handelShare(paste?.content)}
                  className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition">
                  Share
                </button>
              </div>
              {/* Created At */}
              <p className="text-gray-400 text-sm mt-2">{paste.createdAt}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Paste;
