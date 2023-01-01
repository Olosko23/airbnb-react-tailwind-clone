import React from 'react'
import { IoSearchCircleSharp } from 'react-icons/io5';

const Location = () => {
  return (
    <div>
    <div className="hidden sm:flex">
      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <button className="border-solid flex flex-row gap-2 rounded px-2 py-1">
          <p className="hover:scale-105 font-semibold">Anywhere</p>
          <p>|</p>
          <p className="hover:scale-105 font-semibold">Any week</p>
          <p>|</p>
          <p className="hover:scale-105">
          <div className="flex flex-row gap-2 font-semibold">
            Add Guests
            <p className=""> <IoSearchCircleSharp size={25} color="pink"/></p>
          </div>
          </p>
        </button>
      </div>
    </div>
    <div className="flex flex-row sm:hidden">
        <div className="">
          <label className="flex flex-row">
            <input className="rounded-xl h-10" type="text" placeholder="  Where to..." />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Location