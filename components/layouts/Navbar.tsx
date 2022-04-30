import React from 'react'
import Link from "next/link";
import { Hamburger } from '~/public/icons/Hamburger';

/** This Navbar will show up when size window
 * More then 768px
 */
const Navbar = () => {
  return (
    <div className="w-full h-14">
      <div className="px-4 max-w-7xl h-full mx-auto md:px-20">
        <div className="flex flex-row h-full items-center justify-between">
          <div className='flex flex-row items-center'>
            <Link href='/'>
            <h1 className="text-orange font-bold text-xl font-bebas">
              janganmales
            </h1>
          </Link>
          <div className="hidden md:flex flex-row items-center">
            <Link href='/'>
              <span className="text-orange font-normal text-sm mx-4">
                Tutorial
              </span>
            </Link>
            <Link href='/'>
              <span className="text-orange font-normal text-sm mx-4">
                Blogs
              </span>
            </Link>
            <Link href='/'>
              <span className="text-orange font-normal text-sm mx-4">
                Mentoring
              </span>
            </Link>
          </div>
          </div>
          <div className="hidden md:flex">
            <Link href='/'>
              <h1 className="text-orange font-normal text-sm">
                Login
              </h1>
            </Link>
          </div>
          <div className='flex md:hidden'>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
