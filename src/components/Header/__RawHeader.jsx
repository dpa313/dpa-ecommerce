import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { TbCategoryFilled } from "react-icons/tb";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import flag from '../../assets/germanyFlag.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Menus from '../../assets/data/menuData'
const Header = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const Menus = ["Clothes and wear","Fashion","Mobile","Computer","Laptop","Other","Gardening","Home interiors","Animal and pets"]

  return (
          <div className='z-50 w-full bg-white shadow-xl'>
              <div className='max-w-[1180px] mx-auto  pt-4 pb-2'>
      {/* ========TOP MENU ITEMS========== */}
                  <div className="top flex justify-between items-center">
                    <h2 className='text-[18px] font-bold text-[#008ECC] italic'>Pothik</h2>
                    <div className="searchBox relative flex items-center">
                      <input 
                            type="text"
                            placeholder='Search products,brands'
                            className='w-[665px] h-[35px] px-3 rounded-full border focus:outline-none '
                      />
                      <div className="searcIcon absolute right-3 text-gray-500 ">
                        <RiSearchLine />
                      </div>
                    </div>
                    <div className="icons flex gap-3 text-[#008ECC]">
                          <div className="userIcon flex flex-col items-center" >
                            <LuUser2 className='text-[20px]'/>
                            <small className='text-[10px] leading-[2]'>Profile</small>
                          </div>
                          <div className="cartItem flex flex-col items-center">
                            <BsCart2 className='text-[20px]'/>
                            <small className='text-[10px] leading-[2]'>My Cart</small>
                          </div>
                    </div>
                  </div>
      {/* =========BOTTOM MENU ITEMS========= */}
                  <div className="flex justify-between mt-3 text-textColor text-[16px]">
                    <ul className='flex gap-3'>
                      <li onClick={()=>setOpenMenu(prev=>!prev)}><Link to="#" className='relative flex items-center gap-2 px-2 py-1 transition ease-in duration-300 hover:bg-[#D9EEF7]'><TbCategoryFilled/> All Category <MdOutlineKeyboardArrowDown /></Link>
                        {openMenu &&               
                                <ul className='absolute top-[110px] w-[295px] h-[365px] py-2 px-4 bg-white  shadow-xl rounded'>
                                  {
                                    Menus.map(menu=>(
                                      <li className='px-2 py-[7px] border-b-[1px] border-gray-100 cursor-pointer hover:bg-[#D9EEF7] last:border-none' key={menu}>{menu}</li>
                                    ))
                                  }
                                </ul>
                        }
                      </li>
                      <li className='px-2 py-1 hover:bg-[#D9EEF7] rounded-sm'>
                        <Link to="/home">Home</Link>
                      </li>
                      <li className='px-2 py-1 hover:bg-[#D9EEF7] rounded-sm'>
                        <Link to="/products">Products</Link>
                      </li>
                      <li className='px-2 py-1 hover:bg-[#D9EEF7] rounded-sm'>
                        <Link to="#">Contact</Link>
                      </li>
                      <li className='px-2 py-1 hover:bg-[#D9EEF7] rounded-sm'>
                        <Link to="#">About</Link>
                        </li>
                    </ul>
                    <ul className='flex gap-3'>
                    <li className='flex items-center'>English,
                      <span className='relative flex items-center cursor-pointer'>USD <MdOutlineKeyboardArrowDown />
                      </span>
                    </li>
                    <li className='flex items-center gap-1'>Ship to 
                      <span className='flex cursor-pointer'>
                        <img src={flag} alt="" className='w-5 h-4' /><MdOutlineKeyboardArrowDown />
                      </span>
                    </li>
                    </ul>
                  </div>
              </div>
          </div>
  )
}

export default Header