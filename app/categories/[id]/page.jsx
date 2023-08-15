'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import "react-multi-carousel/lib/styles.css";
import { NavBar, SectionHeading, FilterProduct, ListProduct } from "../../components";
import Header from "@/layouts/Header";
const listCategories=[
    {id: "TW264812", name:"Sparkling Wines"},
    {id: "TW366960", name:"Dessert Wines"},
    {id: "TW667968", name:"Red Wines"},
    {id: "TW791274", name:"Red Wines"},
    {id: "TW868383", name:"White Wines"},
    {id: "TW955788", name:"Rosé Wines"},
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
  const categoryId = params.id
  const categoryName = listCategories.find(item=> item.id==categoryId).name
  return (
    <>
      <Header/>
      <FilterProduct SearchProduct={FilterProducts}/>
      <SectionHeading title={categoryName} />
      <ListProduct typeListProducts={`category-${categoryId}`}/>
    </>
  )
}
