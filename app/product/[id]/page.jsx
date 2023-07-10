'use client';

import { useState } from "react";
import {ProductCard} from '../../components'
const productDetail={
    product_name: 'Wine wine',
    inventory: 15,
    cost: 100,
    product_img: "https://vinoteka.vn/assets/components/phpthumbof/cache/081607-1.24622f2ac318dc4ab4fa384fb1762078.jpg",
    desc: "This vintage rates better than any other year for this wine, Our wine experts think this Italian Amarone wine would be a match made in heaven with these dishes. Bon appétit!",
    brand: {
        brand_name: "Tezza"
    },
    category:{
        category_name: "Red wine"
    }
}
const relevantProducts =[
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
export default function Page(
    { params }
) {
    const products = 
    relevantProducts.length > 5 ?
    relevantProducts.slice(0,5) : relevantProducts
    const [amount, setAmount] = useState(1)
    const renderInventory = () => {
        const result = [];
        if (productDetail.inventory > 10){
            productDetail.inventory = 10
        }
        for (let index = 1; index <= productDetail.inventory; index++) {
            result.push(<option key={index}>{index}</option>)
        }
        return result
    };
    function handleAddToCart(){
        console.log(params.id, amount)
    }
    
    return(
        <>
            <section className="text-gray-700 body-font overflow-hidden border-b-2 bg-gradient-to-r from-gray-100 via-white to-gray-100">
                
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-2xl" 
                    src="https://vinoteka.vn/assets/components/phpthumbof/cache/081607-1.24622f2ac318dc4ab4fa384fb1762078.jpg" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetail.brand.brand_name}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetail.product_name}</h1>
                        <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            </a>
                            <a className="ml-2 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                            </a>
                            <a className="ml-2 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            </a>
                        </span>
                        </div>
                        <p className="leading-relaxed">
                            {productDetail.desc}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <h2 className="text-sm title-font text-gray-500 underline tracking-widest">{productDetail.category.category_name}</h2>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Number</span>
                            <div className="relative">
                            <select onChange={(e)=>setAmount(e.target.value)} className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                {
                                renderInventory()
                                }
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">{productDetail.cost + '$'}</span>
                        <button onClick={handleAddToCart} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to cart</button>
                        <button  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex-col justify-between">
                <div className="flex text-2xl font-bold justify-center  my-10">Relevant Products</div>
                <div className="w-[88%]  mx-auto flex justify-between gap-5 ">
                {
                    products.map(product=>
                        <ProductCard key={product.id} productInfo={product} handleClickProduct={() => console.log(product.id)} 
                        handleClickCart={(e)=> console.log(product.id, e)}
                        />
                    )
                }
                
                </div>
            </section>  
        </>
    )
  }