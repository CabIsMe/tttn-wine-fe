'use client'

import Icon from '@/components/Icon';
import { useRouter } from 'next/navigation'
import { useState } from 'react';



export function PersonalMenu({
}){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };
    return(
        <div className="relative">
            {/* <li className="hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
            <a className="flex items-center hover:cursor-pointer hover:text-gray-500" href="#" 
             onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
                {/* <a className="hover:text-gray-500" href="#" >{nameDisplay}</a> */}
            {/* </li> */}
            {isDropdownOpen && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className="absolute min-w-max py-2 bg-white border rounded shadow-lg">
                <PersonalMenuComponent direction="info" nameDisplay="Information"/>
                <PersonalMenuComponent direction="login" nameDisplay="Log out"/>
                
            </div>
            )}
        </div>
    )
}
export function PersonalMenuComponent({
    direction,
    nameDisplay
}){
    const router=  useRouter()
    return(
        <a onClick={()=> router.push(direction)} href="#" className="block px-4 py-1 text-gray-800 hover:bg-gray-200 text-xs">
            {nameDisplay}
        </a>
    )
}
export function MenuComponent({
    direction,
    nameDisplay,
    dropdown
}){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        dropdown && setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };
    const router=  useRouter()
    return(
        <div className="relative">
            <li className="hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="hover:text-gray-500 cursor-pointer" onClick={()=>{router.push(direction)}}>{nameDisplay}</span>
            </li>
            {isDropdownOpen && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className="absolute min-w-max w-28 py-2 bg-white border rounded shadow-lg">
                    {dropdown.map(data=>(
                        <span key={data.id} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                            {data.name}
                        </span>
                    ))}
            </div>
            )}
        </div>
    )
}

export function AnonymousPage({
    direction,
    nameDisplay,
}){
    const router=  useRouter()
    return(
        <div className="hover:cursor-pointer hover:border-black hover:border-b-2">
            <span className="hover:text-gray-600 cursor-pointer"  onClick={()=>{router.push(direction)}}>{nameDisplay}</span>
        </div>
    )
}

export function Cart(
    direction
){
    const router= useRouter()
    return(
        <a className="flex items-center hover:text-gray-500" href="#" onClick={()=>{router.push(direction)}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
            </span>
        </a>
    )
}

export function ProductCard({
    productInfo,
    handleClickProduct,
    handleClickCart
  }){
    return(
      <div onClick={handleClickProduct} className="relative w-[90%] bg-white shadow-md rounded-xl duration-500 group 
      hover:scale-105 hover:shadow-xl">
              <img src={productInfo.product_img}
                      alt="Product" className="w-full h-60 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-full">
                  <span className="text-gray-400 mr-3 uppercase text-xs">{productInfo.brand}</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">{productInfo.product_name}</p>
                  <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">{productInfo.cost}$</p>
                      <del>
                          <p className="text-sm text-gray-600 cursor-auto ml-2">{productInfo.cost + 100}$</p>
                      </del>
                      
                  </div>
              </div>
              <div className="absolute right-5 bottom-5 text-transparent group-hover:text-[#74b9ff]">
                <span onClick={handleClickCart} className="hover:text-[#0984e3] cursor-pointer">
                    <Icon name="cart-plus" size="xl" />
                </span>
              </div>
      </div>
    )
  }