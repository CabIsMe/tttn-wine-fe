'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import CustomerOrderService from "@/api/orders/CustomerOrdersService";




export default function Page() {
  
  const [listOrdered, setListOrdered] = useState([])
  useEffect(()=>{
    CustomerOrderService.GetMyCustomerOrdered().then(res=>{
      if(res.data.status == 1){
        setListOrdered(res.data.detail)
      }else{
        console.log(res.data)
      }
    })
  },[])

  return(
    // <TheOrder/>
    <>
      {listOrdered.length > 0 && <ListOrdered listOrdered={listOrdered}/>}
    </>
  )
}

const OrderStep = ({ title, maxTimeStep, description, icon, onStop }) => (
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        {/* <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg> */}
        <span className={`${onStop ? "text-blue-700 scale-150" : ""}` }><Icon size={`xl`} name={icon}/></span>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div className="mt-3 sm:pr-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{maxTimeStep}</time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  </li>
);

const TheOrder = ({statusOrder, setStatusOrder}) => {
  // const [statusCode, setStatusCode] = useState(statusOrder)

  return(
    <div className="w-full flex flex-col items-center mt-20 scale-90" >
      <ol className="items-center sm:flex my-10">
        <OrderStep
          title={`Wait for confirmation`}
          releaseDate={`2023-10-23`}
          description={`If the order is confirmed, it will be delivered immediately`}
          icon="ellipsis"
          onStop={statusOrder == 1}
        />
        <OrderStep
          title={`Orders are being delivered`}
          releaseDate={`2023-10-23`}
          description={`If the order is confirmed, it will be delivered immediately`}
          icon="truck"
          onStop={statusOrder == 2}
        />
        <OrderStep
          title={`Order complete`}
          releaseDate={`2023-10-23`}
          description={`If the order is confirmed, it will be delivered immediately`}
          icon="hand-holding-dollar"
          onStop={statusOrder == 3}
        />
      </ol>
      <Button text={`Close`} handleClick={()=>setStatusOrder(undefined)}/>
  </div>
  )
};

function ListOrdered({listOrdered}){
  const [statusOrder, setStatusOrder] = useState(undefined)
  const [selectedOrder, setSelectedOrder] = useState(undefined)

  const totalOrderCost = (item)=> {
    const response = item.customer_order_detail_info.reduce((total, item) => {
      return total + (item.amount * item.cost) ;
    }, 0)
    return response+"$"
  };
  const listProduct = (item)=> {
    let str=''
    item.customer_order_detail_info.forEach(item=>{
      str += item.product_info.product_name + "; "
    })
    return str
  };
  function handleClickOrder(value){
    const order =  listOrdered.find(item=> item.customer_order_id==value)
    setStatusOrder(order.status)
    setSelectedOrder(order.customer_order_id)
  }
  return(
    <div className="w-full flex flex-col items-center ">
      <h1 className="w-[60%] text-left mt-5 text-lg font-bold">List Your Purchase</h1>
      <ul role="list" className="divide-y divide-gray-100 w-[60%]">
        {
          listOrdered.map(item=>
            <>
              <OrderedComponent key={item.customer_order_id}
                srcImg={item.customer_order_detail_info[0].product_info.product_img}
                orderId={item.customer_order_id}
                productNames={listProduct(item)}
                total = {totalOrderCost(item)}
                tCreate= {item.t_create}
                handleClick={handleClickOrder}
              />
              {(statusOrder && selectedOrder==item.customer_order_id) && <TheOrder setStatusOrder={setStatusOrder} statusOrder={statusOrder}/>}
            </>
            )
        }
      </ul>
    </div>
  
  )
}

function OrderedComponent({
  srcImg,
  orderId,
  productNames,
  total,
  tCreate,
  handleClick
}){
  return(
    <li onClick={()=>handleClick(orderId)} className="flex justify-between gap-x-6 py-5 hover:bg-slate-200 px-5 my-5">
      <div className="flex min-w-0 gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={srcImg} alt={srcImg}/>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">{orderId}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{productNames}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{total}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{tCreate}</p>
      </div>
    </li>
  )
}
