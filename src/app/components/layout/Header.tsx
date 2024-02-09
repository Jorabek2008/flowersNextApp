"use client"
import React from 'react'
import styles from "../../../styles/navbar.module.css"
import Image from 'next/image'
import {FlowerLogo} from "../../../images/index"

function Header() {
  return (
    <div className='mt-20 max-w-[400px] md:max-w-[1000px] text-center md:text-left lg:max-w-[1200px] mx-auto block md:flex items-center justify-around bg-[#F5F5F5]'>
      <div>
        <p className={`font-[500] text-[14px] ${styles.font} tracking-[2px]`}>Welcome to GreenShop</p>
        <h1 className={`${styles.font} text-[50px] md:text-[70px] font-[900] leading-[70px]`}>Let's Make a <br /> Better <span className='text-[#46A358]'>Planet</span></h1>
        <p className={` ${styles.font} leading-[24px] text-[14px] text-[#727272] mt-[5px]`}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <button className={`bg-[#46A358] text-white text-[16px] font-[700] rounded-[6px] px-[20px] py-[10px] mt-[55px] `}>SHOP NOW</button>
      </div>
      <Image src={FlowerLogo}  alt="flower logo"/>
    </div>
  )
}

export default Header