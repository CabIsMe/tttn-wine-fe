'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import "react-multi-carousel/lib/styles.css";
import { NavBar, SectionHeading, FilterProduct, ListProduct } from "../../components";
import Header from "@/layouts/Header";
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
export default function Home({
    params
}) {
  const [dataProducts, setDataProducts] = useState("all")
  function FilterProducts(name){
    console.log(name)
    if(!name){
      setDataProducts("all")
    }
    else{
      setDataProducts(name)
    }
  }
  const brandId = params.id
  const brandName = listBrands.find(item=> item.id==brandId).name
  return (
    <>
      <Header/>
      <FilterProduct SearchProduct={FilterProducts}/>
      <SectionHeading title={brandName} />
      <ListProduct typeListProducts={`brand-${brandId}`}/>
    </>
  )
}
