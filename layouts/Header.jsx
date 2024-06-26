'use client'
import {assets} from '../utils/constants/logo'
import { MenuComponent, NavBar } from '@/app/components'
import Image from 'next/image'
import logo from "../public/logo.png"
export default function Header({
    children,
}){
    const listBrands=[
      {id: "BR044023", name:"Carlo Rossi"},
      {id: "BR210079", name:"Yellow Tail"},
      {id: "BR530964", name:"Woodbridge Mondavi"},
      {id: "BR556729", name:"Peter Vella"},
      {id: "BR689371", name:"Barefoot Cellars"},
      {id: "BR729998", name:"Franzia"},
      {id: "BR908082", name:"Twin Valley"},
      {id: "BR964479", name:"Sutter Home"},
    ]
    const listCategories=[
      {id: "TW264812", name:"Sparkling Wines"},
      {id: "TW366960", name:"Dessert Wines"},
      {id: "TW667968", name:"Red Wines"},
      {id: "TW791274", name:"Red Wines"},
      {id: "TW868383", name:"White Wines"},
      {id: "TW955788", name:"Rosé Wines"},
    ]
    return(
        <header className="sticky top-0 z-50">
          <div className="flex flex-wrap place-items-top ">
            <section className="relative mx-auto">
                {/* <!-- navbar --> */}
              <nav className="flex justify-between bg-slate-200 text-black w-screen">
                <div className="mx-14 xl:px-12 py-1 flex w-full items-center">
                  <a className="text-3xl font-bold font-heading" href="/">
                    <Image className='w-20' src={logo} alt='logo'/>
                  </a>
                  {/* <!-- Nav Links --> */}
                  <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    {/* <li><a className="hover:text-gray-500" href="#" onClick={()=>{router.push("/")}}>Home</a></li> */}
                    <MenuComponent dropdown={listCategories} nameDisplay="Categories" direction="categories" />
                    <MenuComponent dropdown={listBrands} nameDisplay="Brands" direction="brands" />
                    <MenuComponent nameDisplay="Sale off" direction="sales" />
                  </ul>
                  {/* <!-- Header Icons --> */}
                  {/* <div className="hidden xl:flex items-center space-x-5"> */}
                  <div className="flex items-center space-x-5">
                    {/* <a className="hover:text-gray-500" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </a> */}
                    <NavBar/>
                    
                  </div>
                </div>
                {/* <!-- Responsive navbar --> */}
                <a className="hidden mr-6 items-center" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
                </a>
                <a className="navbar-burger self-center mr-12 hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
              </nav>
              
            </section>
          </div>
          {/* <!-- Does this resource worth a follow? --> */}
          {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10 ">
              <div>
                  <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                      <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
                  </a>
              </div>
          </div> */}
        </header>
      )
}
