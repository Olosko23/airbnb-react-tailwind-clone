import React from 'react'
import Logo from './Logo';
import Location from './Location';
import Profile from './Profile';

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-gray-200">
        <div className="flex flex-row justify-between px-2 py-5">
            <Logo />
            <Location />
            <Profile />
        </div>
    </div>
  )
}

export default Navbar