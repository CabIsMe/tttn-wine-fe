'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomerOrderService from "@/api/orders/CustomerOrdersService";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import RadioGroup from "@/components/Radio";
import CustomerService from "@/api/customer/CustomerService";

export default function Page() {
    const router = useRouter()
    const notify= useNotification()
    const [products, setProducts] = useState([])
    const [customerInfo, setCustomerInfo] = useState(null)
    const [nextStep, setNextStep] = useState(false)
    useEffect(()=>{
      CustomerOrderService.AllProductsInCart().then(res=>{
        if (res.data.status==1){
          console.log(res.data.detail)
          setProducts(res.data.detail)
        }
      })
      CustomerService.GetCustomerInfo().then(res=>{
        if (res.data.status==1){
          // console.log(res.data.detail)
          setCustomerInfo(res.data.detail)
        }
      })
      console.log("customerInfo",customerInfo)
    },[])
    
    function handleClickCheckOut(){
      setNextStep(true)
    }
    function handleCheckOutInfo(data){
      CustomerService.UpdateCustomer(data).then(res=>{
        if (res.data.status==1){
          console.log(res.data.detail)
        }
        else{
          const notification = {
            text: res.data.msg,
          };
          notify(notification);
        }
      })
    }
    
    return (
      <div className="bg-white">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              <div className="h-[400px] overflow-x-hidden overflow-y-auto">
                {products.map(product=>(
                  <ProductDetail key={product.product_id} productDetail={product}/>
                ))}                  
              </div>
              
              
              {/* Additional product items */}
              
              <span onClick={()=>router.push("/")} className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </span>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              {nextStep ? <CustomerInfo info={customerInfo} setInfo={handleCheckOutInfo} /> : <OrderSummary handleClick={handleClickCheckOut} items={products}/>}
            </div>
          </div>
        </div>
      </div>
      )
}

function ProductDetail({
  productDetail,
  handleRemoveItem,
  // amount
}){
  const [amount, setAmount] = useState(productDetail.amount)
  
  const hasPromotion = productDetail.cost < productDetail.product_info.cost

  return(
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 select-none">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24 object-cover" src={productDetail.product_info.product_img} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{productDetail.product_info.product_name}</span>
          <span className="text-red-500 text-xs whitespace-nowrap ">{productDetail.product_info.status}</span>
          <span onClick={handleRemoveItem} className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove</span>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <span className="cursor-pointer"  onClick={()=>{
          amount > 1 && setAmount(amount-1)
        }}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </span>
        <span className="mx-2 px-2 py-1 border ">{amount}</span>
        <span className="cursor-pointer" onClick={()=>setAmount(amount+1)}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </span>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {
        hasPromotion ? 
          (<>
            <span className="line-through text-gray-500 mr-1">{'$'+productDetail.product_info.cost}</span>
            {'$'+productDetail.cost}
          </>):
          (<>
            {'$'+productDetail.cost}
          </>)
        }
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">{'$'+productDetail.cost*productDetail.amount}</span>
    </div>
  )
}

function OrderSummary({
  handleClick,
  items,
}){
  const totalCost = items.reduce((accumulator, item) => accumulator + item.cost*item.amount, 0);
  function handleCheckOut(e){
    e.preventDefault()
    handleClick()
  }
  return(
    <>
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      {items.map(product=>(
        <div key={product.product_id} className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase max-w-[150px] text-black">{product.product_info.product_name}</span>
          <span className="font-semibold text-sm">{'$'+product.cost*product.amount}</span>
        </div>
      ))}
      {/* <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div> */}
      <div className="py-10">
        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
      </div>
      {/* <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{'$'+totalCost}</span>
        </div>
        <button onClick={(e)=>handleCheckOut(e)} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
      </div>
    </>
  )
}

function CustomerInfo({
  info,
  setInfo,
}){
  const [customerInfo, setCustomerInfo] = useState(info)
  function handleCheckOut(e){
    e.preventDefault()
    setInfo(customerInfo)
  }
  return(
    <>
      <h1 className="font-semibold text-2xl border-b pb-8">Private Information</h1>
      <br/>
      <Input
        label="Full Name"
        icon="circle-question"
        placeholder="Your full name"
        type="text"
        handleChange={(e)=>setCustomerInfo({
          ...customerInfo,
          full_name: e.target.value
        })}
        value={customerInfo.full_name}
      />
      <br/>
      <RadioGroup handleRadioChange={(value)=>setCustomerInfo({
        ...customerInfo,
        gender: value
      })} text1="Male" text2="Female" icon="venus-mars" />
      <br/>
      <Input
        label="Date Of Birth"
        icon="cake-candles"
        placeholder="YYYY-MM-DD"
        type="text"
        value={customerInfo.date_of_birth}
      />
      <br/>
      <Textarea
        label="Address"
        icon="location-pin"
        placeholder="...Street, House No"
        type="text"
        value={customerInfo.address}
      />
      <br/>
      <Input
        label="Phone Number"
        icon="mobile-screen"
        placeholder="YYYY-MM-DD"
        type="text"
        value={customerInfo.phone_number}
      />
      <button onClick={(e)=>handleCheckOut(e)} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full mt-10">Checkout</button>
    </>
  )
}