'use client';
import useLoadingAnimation from "@/utils/hooks/useLoadingAnimation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Icon from '../components/Icon'
import useAuth from "@/utils/hooks/useAuth"

import Carousel from "react-multi-carousel";
import { NavBar, SectionHeading, FilterProduct, ListProduct } from "./components";
import "react-multi-carousel/lib/styles.css";export default function Home({
}) {
  const [authenticate] = useAuth()
  return (
    <>
      <NavBar isAuthenticate={authenticate}/>
      <FilterProduct/>
      <ListProduct typeListProducts="all"/>
      <SectionHeading title="NEW RELEASE" />
      <ListProduct typeListProducts="new-release"/>
      <SectionHeading title="BRANDS" />
      <Slideshow/>
    </>
  )
}



// const products =[
//   {id: 1, product_name:"Wine1", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/092121-1.1c7d8cfea75f219576db460999053e55.jpg"},
//   {id: 2, product_name:"Wine2", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/010704-1.40470121fa34a4bd0978a6ca95883141.jpg"},
//   {id: 3, product_name:"Wine3", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/092104-1.1fdcf7cee862d06e0d6917c56993a1d1.jpg"},
//   {id: 4, product_name:"Wine5", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/140102-1.c22ed4484512fc30baf93c21ab67b41c.jpg"},
//   {id: 5, product_name:"Wine6", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/branco.3f76a6ad51bebf72eb01c183eb5eab7c.jpg"},
//   {id: 6, product_name:"Wine7", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/101209-1.e54f2d59c23d6f85552e907931da87aa.jpg"},
//   {id: 7, product_name:"Wine8", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/071404-1.ef9a88d0bffa9ce2b020e099057e2bc0.jpg"},
//   {id: 9, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/hors-serie-n1.28a5fe7147bbffb01560bda7c771f136.jpg"},
//   {id: 8, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/052020-11.f3e140263d07e0bbed1c14f4810ee7b1.jpg"},
//   {id: 10, product_name:"Wine9", cost:25, brand:"Altos Las Hormigas", product_img:"https://vinoteka.vn/assets/components/phpthumbof/cache/081607-1.24622f2ac318dc4ab4fa384fb1762078.jpg"},
// ]







function Slideshow() {
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

  return (
    <div className="w-screen flex justify-center">
      <div className="w-10/12 bg-white">
        <Carousel responsive={responsive}>
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