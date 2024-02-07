"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {Logo} from "../../../images/index"
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import styles from "../../../styles/navbar.module.css"

function Navbar() {
  const pageLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Plant Care",
      link: "/plant",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ]

  const [show, setShow] = useState(false)
  return (
    <div className={`fixed top-0 left-0 z-[1000] w-full bg-white py-[16px] ${styles.z}`}>
      <div className="max-w-[660px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex items-center justify-between">
        <Image src={Logo} alt='logo' />
        <ul className='hidden md:flex items-center gap-[30px]'>
          {pageLink.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link} className='relative group'>
                  {item.name}
                  <span className="absolute bottom-[-10px] left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            )
          })}
        </ul>
        
        <div className="hidden items-center gap-[20px] md:flex">
          <IoSearch size={25} className='text-[#3D3D3D] hover:text-black cursor-pointer' />
          <div className='relative cursor-pointer'>
            <FiShoppingCart size={25} className='text-[#3D3D3D] hover:text-black' />
            <span className="absolute top-0 right-0 inline-flex items-center px-1 py-1 text-[9px] font-bold leading-none text-green-100 transform translate-x-1/2 -translate-y-1/2 bg-[#46A358] rounded-full">
              0
            </span>
          </div>
          <button className='flex items-center font-[500] text-white bg-[#46A358] px-[20px] py-[10px] rounded-[6px]'>
            <MdLogin size={25} className='text-white' />
            <p>Login</p>
          </button>
        </div>
        <FaBars size={25} className='block md:hidden cursor-pointer text-[#3D3D3D] hover:text-black' onClick={() => setShow(true)} />
      </div>


      <div className={`w-[400px] ${styles.z} bg-white h-[100vh] absolute transition-all top-0 ${show ? 'right-0' : 'right-[-400px]'} md:hidden`}>
        <IoClose size={25} className='block md:hidden mt-6 ml-auto cursor-pointer mr-4 text-[#3D3D3D] hover:text-black' onClick={() => setShow(false)} />
          <ul className='text-center mt-10 '>
            {pageLink.map((item, index) => {
              return (
                <li key={index} className="mt-6">
                  <Link href={item.link} className='relative group'>
                    {item.name}
                    <span className="absolute bottom-[-10px] left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-[20px] mt-8 justify-center">
            <IoSearch size={20} className='text-[#3D3D3D] hover:text-black cursor-pointer' />
            <div className='relative cursor-pointer'>
              <FiShoppingCart size={20} className='text-[#3D3D3D] hover:text-black' />
              <span className="absolute top-0 right-0 inline-flex items-center px-1 py-1 text-[9px] font-bold leading-none text-green-100 transform translate-x-1/2 -translate-y-1/2 bg-[#46A358] rounded-full">
                0
              </span>
            </div>
            <button className='flex items-center font-[500] text-white bg-[#46A358] px-[10px] py-[5px] rounded-[6px]'>
              <MdLogin size={20} className='text-white' />
              <p>Login</p>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar