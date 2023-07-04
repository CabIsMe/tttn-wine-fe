'use client';
import useLoadingAnimation from "@/utils/hooks/useLoadingAnimation";
import { useRouter } from "next/navigation";
import { useState } from "react"
import Icon from '../components/Icon'
import {PersonalMenu, AnonymousPage, Cart, ProductCard} from './components'
import Header from '@/layouts/Header'
import useAuth from "@/utils/hooks/useAuth"
import DropdownComponent from "@/components/dropdown";
export default function Home({
}) {
  const [authenticate] = useAuth()
  return (
    <>
      <NavBar isAuthenticate={authenticate}/>
      <ListProduct/>
    </>
  )
}

export function NavBar({
  isAuthenticate
}){
  
  return(
    <Header children={
      isAuthenticate ? 
      <>
        <Cart direction="cart"/>
        <PersonalMenu />
      </>
      : 
      <>
        <AnonymousPage direction="login" nameDisplay="Login"/>
        <AnonymousPage direction="signup" nameDisplay="Sign up"/>
      </>
      }
      />
  )
}

const products =[
  {id: 1, product_name:"Wine1", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/092121-1.1c7d8cfea75f219576db460999053e55.jpg"},
  {id: 2, product_name:"Wine2", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/010704-1.40470121fa34a4bd0978a6ca95883141.jpg"},
  {id: 3, product_name:"Wine3", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/092104-1.1fdcf7cee862d06e0d6917c56993a1d1.jpg"},
  {id: 4, product_name:"Wine5", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/140102-1.c22ed4484512fc30baf93c21ab67b41c.jpg"},
  {id: 5, product_name:"Wine6", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/branco.3f76a6ad51bebf72eb01c183eb5eab7c.jpg"},
  {id: 6, product_name:"Wine7", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/101209-1.e54f2d59c23d6f85552e907931da87aa.jpg"},
  {id: 7, product_name:"Wine8", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/071404-1.ef9a88d0bffa9ce2b020e099057e2bc0.jpg"},
  {id: 9, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/hors-serie-n1.28a5fe7147bbffb01560bda7c771f136.jpg"},
  {id: 8, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/052020-11.f3e140263d07e0bbed1c14f4810ee7b1.jpg"},
  {id: 10, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/081607-1.24622f2ac318dc4ab4fa384fb1762078.jpg"},
]

function ListProduct({

}){
  const router = useRouter();
  function handleClickProduct(productId){
    console.log(123)

    router.push(`/product/${productId}`)
  }
  function handleClickCart(productId, e){
    e.stopPropagation()
    console.log(productId)
  }
  return(
    <>
      <FilterProduct/>
      <div className="w-full flex justify-center py-16 pb-28">
        <div className="w-[88%] grid grid-cols-5 gap-4">
          {
            products.map(product=>
              <ProductCard key={product.id} productInfo={product} handleClickProduct={() => handleClickProduct(product.id)} 
              handleClickCart={(e)=> handleClickCart(product.id, e)}
              />
              )
          }
          
        </div>
      </div>
    </>
  )
}



function FilterProduct({
  FilterProduct,
  SearchProduct
}){
  const [searchInput, setSearchInput] = useState(null)

  function handleFilter(type){
    console.log(type)
    FilterProduct(type)

  } 
  function handleSearch(e){
    e.preventDefault()
    console.log(searchInput)
    SearchProduct(searchInput)
  }

  const options=[
    {name: "Cost", value:"cost-up", icon:"arrow-up-short-wide"},
    {name: "Rate", value:"rate-up", icon:"arrow-up-short-wide"},
    {name: "Release", value:"release-up", icon:"arrow-up-short-wide"}
  ]
  return(
    // bg-gray-100 
    <div className="w-screen min-h-[100vh] bg-[url('../public/bg2.png')]
      flex justify-center items-end ">
      <div className="space-y-10 py-8">
        <div className="flex items-center p-6 space-x-6 bg-white opacity-90 text-[16px]
        text-gray-600 rounded-xl shadow-lg hover:shadow-xl transform scale-95 hover:scale-100 transition duration-700">
          <DropdownComponent setFilter={handleFilter} optionValues={options} />
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="flex  p-4 w-72 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input onChange={(e)=> setSearchInput(e.target.value)} className=" border-b-2 outline-none" type="text" placeholder="Article name or keyword..." />
            </div>
            <div className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}


function LoginForm() {
  const [showLoading, hideLoading] = useLoadingAnimation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      showLoading();
      setTimeout(() => {
        hideLoading();
        router.push("home");
      }, 1000);
    } 
    catch(error) {

    } 
  } 
  return (
    <form
      classNameNameName="mt-10 mx-auto w-[480px] py-4 px-6 flex flex-col gap-4 rounded-md border-2"
      action="post"
      onSubmit={handleSubmitLogin}
    >
      <h1 classNameNameName="text-2xl font-bold text-center">Login</h1>
      <input classNameNameName="h-8 px-2 rounded-md border-2" type="text" />
      <input classNameNameName="h-8 px-2 rounded-md border-2" type="text" />
      <button classNameNameName="h-9 bg-blue-400 font-bold text-white rounded-md">Login</button>
    </form>
  )
}