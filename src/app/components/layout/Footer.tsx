import { Calling, Cart, Facebook, Flower05, Flower1, Flower2, Flower3, Instagram, Linkedin, Location, Logo, Messages, Twitter, Union } from '@/images'
import Image from 'next/image'
import React from 'react'

function Footer() {
  const footerLink = [
    {
      h3: 'My Account',
      ul1: 'My Account',
      ul2: 'Our stores',
      ul3: 'Contaxt us',
      ul4: 'Career',
      ul5: 'Specials',
    },
    {
      h3: 'Help & Guide',
      ul1: 'Help Center',
      ul2: 'How to Buy',
      ul3: 'Shopping & Delivery',
      ul4: 'Product Policy',
      ul5: 'How to Return',
    },
    {
      h3: 'Categories',
      ul1: 'House Plants',
      ul2: 'Potter Plants',
      ul3: 'Seeds',
      ul4: 'Small Plants',
      ul5: 'Accessories',
    },
  ]
  return (
    <div className='max-w-[1200px] mx-auto bg-[#FBFBFB]'>
      <div className="flex items-center flex-wrap justify-around">
        <div className="block relative w-[204px] text-center md:text-left">
          <Image src={Flower05} className="absolute top-[45px] left-[35%] md:left-0" alt="logo" />
          <Image src={Flower1} className="absolute top-0 left-[35%] md:left-0" alt="logo" />
          <h3 className={`mt-24 text-[17px] font-[700]`}>Garden Care</h3>
          <p className='text-[14px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="block w-[204px] text-center md:text-left">
          <Image src={Flower2} className="mx-auto md:mx-0" alt="logo" />
          <h3 className={`mt-2 text-[17px] font-[700]`}>Plant Renovation</h3>
          <p className='text-[14px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="block w-[204px] text-center md:text-left">
          <Image src={Flower3} className="mx-auto md:mx-0" alt="logo" />
          <h3 className={`mt-2 text-[17px] font-[700]`}>Watering Graden</h3>
          <p className='text-[14px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="w-[360px] text-center md:text-left">
          <h3 className={`mt-2 text-[17px] font-[700]`}>Would you like to join newsletters?</h3>
          <div className="block sm:flex items-center mt-2">
            <input type="text" placeholder='enter your email address...' className="flex-[4] py-[10px] px-[5px]" />
            <button className="flex-[2] bg-[#46A358] text-white text-[18px] font-[700] py-[10px] px-4 rounded-tr-[6px] rounded-br-[6px]">Join</button>
          </div>
          <p className='text-[14px] text-[#727272] mt-4'>We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around py-8">
        <Image src={Logo} alt="logo" className='mx-auto mt-4' />
        <div className="flex items-center gap-[10px] w-[220px] mt-4 mx-auto">
          <Image src={Location} alt="location img" />
          <p className='text-[14px] text-[#727272]'>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex items-center gap-[10px] w-[220px] mt-4 mx-auto">
          <Image src={Messages} alt="message img" />
          <p className='text-[14px] text-[#727272]'>contact@greenshop.com</p>
        </div>
        <div className="flex items-center gap-[10px] w-[220px] mt-4 mx-auto">
          <Image src={Calling} alt="call img" />
          <p className='text-[14px] text-[#727272]'>+88 01911 717 490</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around gap-4">
        {footerLink.map((item, id) => (
          <ul key={id}>
            <li className='text-[18px] font-[700]'>{item.h3}</li>
            <li className='text-[14px] text-[#3D3D3D] cursor-pointer mt-2'>{item.ul1}</li>
            <li className='text-[14px] text-[#3D3D3D] cursor-pointer mt-2'>{item.ul2}</li>
            <li className='text-[14px] text-[#3D3D3D] cursor-pointer mt-2'>{item.ul3}</li>
            <li className='text-[14px] text-[#3D3D3D] cursor-pointer mt-2'>{item.ul4}</li>
            <li className='text-[14px] text-[#3D3D3D] cursor-pointer mt-2'>{item.ul5}</li>
          </ul>
        ))}
        <div className='text-center md:text-left'>
          <h3 className='text-[18px] font-[700] mt-4'>Social Media</h3>
          <div className="flex items-center gap-3 mt-4 mb-6 justify-center md:justify-start">
            <div className="py-2 border-[#46A358] border-[1px] px-1">
              <Image src={Facebook} alt="logo" />
            </div>
            <div className="py-2 border-[#46A358] border-[1px] px-1">
              <Image src={Instagram} alt="logo" />
            </div>
            <div className="py-[10px] border-[#46A358] border-[1px] px-1">
              <Image src={Twitter} alt="logo" />
            </div>
            <div className="py-2 border-[#46A358] border-[1px] px-1">
              <Image src={Linkedin} alt="logo" />
            </div>
            <div className="py-[9px] border-[#46A358] border-[1px] px-1">
              <Image src={Union} alt="logo" />
            </div>
          </div>
          <h3 className='text-[18px] font-[700] mb-4'>We accept</h3>
          <Image src={Cart} alt="logo" />
        </div>
      </div>
    </div> 
  )
}

export default Footer