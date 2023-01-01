import React from 'react'
import {BsGlobe} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';

const Profile = () => {
  return (
    <div>
    <div className="hidden sm:flex flex-row gap-5 mr-3 justify-between">
        <p className="pt-2.5 font-semibold cursor-pointer hover:scale-105">Become a Host</p>
      <div className="flex flex-row gap-5">
        <button className="cursor-pointer hover:scale-105">
          <BsGlobe size={20}/>
        </button>
        <buton className="rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <div className="flex flex-row gap-2 pt-2 mb-1 cursor-pointer hover:scale-105">
            <AiOutlineMenu size={24}/>
            <FaRegUserCircle size={24}/>
          </div>
        </buton>
      </div>
    </div>
    <div className="flex flex-row sm:hidden">
    <buton className="rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <div className="flex flex-row gap-2 pt-2 mb-1 cursor-pointer hover:scale-105">
            <AiOutlineMenu size={24}/>
            <FaRegUserCircle size={24}/>
          </div>
        </buton>
    </div>
    </div>
  )
}

export default Profile