import React from 'react'
import {FaAirbnb} from 'react-icons/fa';

const Logo = () => {
  return (
    <div>
      <div className="hidden sm:flex flex-row gap-2 ml-5 hover:scale-105 cursor-pointer">
        <p className="pt-1">
          <FaAirbnb size={30} color="pink"/>
        </p>
        <p className="text-xl font-semibold pt-1 text-pink-300">
          airbnb
        </p>
      </div>
      <div className="ml-3">
        <p className="flex sm:hidden pt-1">
          <FaAirbnb size={35} color="pink"/>
        </p>
      </div>
    </div>
  )
}

export default Logo