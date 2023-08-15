'use client'

import Icon from '@/components/Icon';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from '@/layouts/Header'
import DropdownComponent from "@/components/dropdown";
import ProductService from "@/api/products/ProductService";
import AuthService from '@/api/authentication/AuthService';
import CustomerOrderService from '@/api/orders/CustomerOrdersService';
import useNotification from '@/utils/hooks/useNotification';
import Image from 'next/image'
import newBanner from '../public/new1.png'
import '../public/css/style.css'
export function NavBar({
}){
  const [isChecked, setIsChecked] = useState({
    isLoaded : false,
    isLogin: false
  })
  useEffect(()=>{
    console.log(123)
    setIsChecked({
      isLoaded: true,
      isLogin: false
    })
    
    const token = localStorage.getItem('token')
    if(token){
      setIsChecked({
        isLoaded: true,
        isLogin: true
      })
    }
    
  },[localStorage.getItem('token')])
  return(
      <>
        {
          isChecked.isLoaded &&
          <div>
            {isChecked.isLogin? 
              <div className='flex justify-between min-w-[70px]'>
                <Cart direction="/cart"/>
                <PersonalMenu />
              </div> : 
              <div className='flex justify-between min-w-[110px]'>
                <AnonymousPage direction="login" nameDisplay="Login"/>
                <AnonymousPage direction="signup" nameDisplay="Sign up"/>
              </div>
            }
          </div>
        }
      </>
  )
}


export function ListProduct({
  typeListProducts,

}){
  const router = useRouter();
  const notify = useNotification();
  
  function clickProduct(productId){
    console.log(123)
    router.push(`/product/${productId}`)
  }

  function handleClickCart(productId, e){
    e.stopPropagation()
    CustomerOrderService.AddToCard(productId, 1).then(res=>{
      if(res.data.status==1){
        const notification = {
          text: "The product has been added to cart",
          type: "success"
        };
        notify(notification);
      }
      else if(res.data.status >= 1000){
        const notification = {
          text: "The login session has expired.",
          type: "info"
        };
        notify(notification);
        router.push("/login")
      }
      else{
        console.log(123)
        console.log(res.data.detail)
        const notification = {
          text: res.data.detail,
        };
        notify(notification);
      }
    })
    console.log(productId)
  }

  const [products, setProducts] = useState([])
  useEffect(()=>{
    if(typeListProducts == 'all'){
      ProductService.getAllProducts().then(res=>{
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
    }
    else if(typeListProducts == 'new-release'){
      ProductService.getNewReleaseProducts().then(res=>{
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
    }
    else if(typeListProducts == 'promotional-products'){
      ProductService.getPromotionalProducts().then(res=>{
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
    }
    else if(typeListProducts == 'top-selling'){
      ProductService.getTopSellingProducts().then(res=>{
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
    }
    else if(typeListProducts.startsWith('brand-')){
      let str=typeListProducts.split('-')[1]
      ProductService.getProductsByBrand(str).then(res=>{
          console.log(res.data)
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail.listData)
        }
      })
    }
    else if(typeListProducts.startsWith('category-')){
      let str=typeListProducts.split('-')[1]
      ProductService.getProductsByCategory(str).then(res=>{
          console.log(res.data)
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail.listData)
        }
      })
    }
    else{
      ProductService.getProductsByName(typeListProducts).then(res=>{
        console.log(res.data)
        if(res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
    }
  },[typeListProducts])

  return(
    <>
      
      <div className="w-full flex justify-center py-16">
        <div className="w-[88%] grid grid-cols-5 gap-4">
          {
            products.map(product=>
              <ProductCard key={product.product_id} 
                productInfo={product} 
                handleClickProduct={() => clickProduct(product.product_id)} 
                handleClickCart={(e)=> handleClickCart(product.product_id, e)}
              />
              )
          }
        </div>
      </div>
    </>
  )
}

export function FilterProduct({
  FilterProduct,
  SearchProduct
}){
  const [searchInput, setSearchInput] = useState(null)

  function handleFilter(type){
    FilterProduct(type)

  } 
  const [bgIndex, setBgIndex] = useState(0);
  const listBgs = [
    'bg.png',
    'bg2.png',
    'bg3.png',
    'bg4.png',
    'bg5.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % listBgs.length);
    }, 5000); // Thay đổi ảnh mỗi 5 giây

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options=[
    {name: "Cost", value:"cost-up", icon:"arrow-up-short-wide"},
    {name: "Rate", value:"rate-up", icon:"arrow-up-short-wide"},
    {name: "Release", value:"release-up", icon:"arrow-up-short-wide"}
  ]
  
  return(
    // bg-gray-100 ${listBgs[bgIndex]} '../public/bg.png'
    <div className="w-screen min-h-[100vh] bg-cover 
    flex justify-center items-end mb-12 bg">
      <div className="space-y-10 py-8">
        <div className="flex items-center p-6 space-x-6 bg-white opacity-90 text-[16px]
        text-gray-600 rounded-xl shadow-lg hover:shadow-xl transform scale-95 hover:scale-100 transition duration-700">
          <DropdownComponent setFilter={handleFilter} optionValues={options} />
          <form className="flex items-center">
            <div className="flex  p-4 w-72 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input onChange={(e)=> {
                SearchProduct(e.target.value)
              }} className=" border-b-2 outline-none" type="text"  placeholder="Article name or keyword..." />
            </div>
            
          </form>
        </div>
      </div>
    </div>

  )
}

export function PersonalMenu({
}){
    const router=  useRouter()
    
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
            <span className="flex items-center hover:cursor-pointer hover:text-gray-500"
             onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
                {/* <a className="hover:text-gray-500" href="#" >{nameDisplay}</a> */}
            {/* </li> */}
            {isDropdownOpen && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className="absolute min-w-max py-2 bg-white border rounded shadow-lg">
                <PersonalMenuComponent handleClick={()=>{
                  router.push("info")
                }} nameDisplay="My Account"/>
                <PersonalMenuComponent handleClick={()=>{
                  router.push("purchase")
                }} nameDisplay="My Purchase"/>
                <PersonalMenuComponent handleClick={()=>{
                  AuthService.logout()
                }} nameDisplay="Log out"/>
                
            </div>
            )}
        </div>
    )
}
export function PersonalMenuComponent({
    handleClick,
    nameDisplay
}){
    
    return(
        <span onClick={handleClick} className="cursor-pointer block px-4 py-1 text-gray-800 hover:bg-gray-200 text-xs">
            {nameDisplay}
        </span>
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
    function handleRedirect(id){
      const pathUrl = nameDisplay.toLowerCase()
      router.push(`/${pathUrl}/${id}`)
    }
    return(
        <div className="relative">
            <li className="hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="hover:text-gray-500 cursor-pointer" onClick={()=>{router.push(direction)}}>{nameDisplay}</span>
            </li>
            {isDropdownOpen && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className="absolute min-w-max w-28 py-2 bg-white border rounded shadow-lg">
                    {dropdown.map(data=>(
                        <span key={data.id} onClick={()=>handleRedirect(data.id)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
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
    {direction}
){
    const router= useRouter()
    return(
        <div className="flex items-center hover:text-gray-500" onClick={()=>router.push(direction)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
            </span>
        </div>
    )
}

export function ProductCard({
    productInfo,
    handleClickProduct,
    handleClickCart
  }){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    return(
      <div onClick={handleClickProduct} className="relative w-[85%] bg-white duration-500 group hover:drop-shadow-lg overflow-hidden py-10">
              
              <div onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} className='scale-75 relative'>
                <img src={isHovering ? productInfo.brand_info.brand_img : productInfo.product_img}
                      alt="Product" className={`transition-transform duration-1000 ease-in-out transform w-full h-60 ${
                        isHovering ? 'scale-105 object-fit' : 'scale-100 object-cover'
                      }`}/>
                {productInfo.is_new == 1 && <div className='absolute w-[50px] bottom-0 right-0 '><Image src={newBanner} alt='banner'/></div> } 
              </div>
              <div className="px-4 py-3 w-full">
                  <span className="text-gray-400 mr-3 uppercase text-xs">{productInfo.category_info.category_name}</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">{productInfo.product_name}</p>
                  <div className="flex items-center">
                      {productInfo.promotion_detail_info == null ? 
                      <>
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{productInfo.cost}$</p>
                    
                      </> :
                      <>
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{productInfo.discounted_cost === undefined 
                          ? (productInfo.cost*(1-productInfo.promotion_detail_info.discount_percentage)) //productInfo.cost 
                          : productInfo.discounted_cost}$</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">{productInfo.cost}$</p>
                        </del>
                        <div className='absolute top-0 right-0 p-3 bg-gray-200 rounded-bl-xl' >{productInfo.promotion_detail_info.discount_percentage*100}%</div>
                      </>}
                      
                  </div>
              </div>
              <div className="absolute right-5 bottom-5 text-transparent group-hover:text-[#74b9ff]">
                <span onClick={handleClickCart} className="hover:text-[#0984e3] cursor-pointer">
                    <Icon name="cart-plus" size="xl" />
                </span>
              </div>
              <div className='absolute text-xs left-5 break-words w-20'>{"frequency" in productInfo && productInfo.frequency +" units sold in 30 days"}</div>
      </div>
    )
  }

export function SectionHeading({title}){
    return(
      <div className="w-screen flex justify-center items-center my-16">
        <div className="flex items-center w-10/12">
          <hr className="flex-grow border-gray-300"/>
          <h2 className="px-4 text-xl font-bold">{title}</h2>
          <hr className="flex-grow border-gray-300"/>
        </div>
      </div>
    )
  }

export function Slideshow({
    listData
}) {
    const images = [
      'https://wineshop.vn/public/uploaded/product_brand/francis-ford.png',
      'https://wineshop.vn/public/uploaded/product_brand/home-korta.jpg',
      'https://wineshop.vn/public/uploaded/product_brand/product_brand_13.jpg',
      'https://wineshop.vn/public/uploaded/product_brand/san-mazano.jpg',
      'https://wineshop.vn/public/uploaded/product_brand/product_brand_7.png',
      'https://wineshop.vn/public/uploaded/product_brand/product_brand_9.png',
      'https://wineshop.vn/public/uploaded/product_brand/product_brand_16.png',
      'https://wineshop.vn/public/uploaded/product_brand/product_brand_15.png'
      // Add more image URLs as needed
    ];
  
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    
    function CustomButtonGroup({ next, previous }){
        return (
          <div className="carousel-button-group">
            <button  onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
          </div>
        );
      };
    return (
      <div className="w-screen flex justify-center">
        <div className="w-10/12 bg-white">
          <Carousel responsive={responsive} customButtonGroup={<CustomButtonGroup />}>
            {images.map((imageUrl, index) => (
              <div className="h-[350px] flex justify-around items-center px-6" key={index}>
                <img src={imageUrl} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }