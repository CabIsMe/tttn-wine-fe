'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState, useEffect } from "react";
import CustomerOrderService from "@/api/orders/CustomerOrdersService";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import useLoadingAnimation from "@/utils/hooks/useLoadingAnimation";
export default function Page() {
    const [paymentStatus, setPaymentStatus] = useState(false)
    const [showLoading, hideLoading] = useLoadingAnimation();
    const searchParams = useSearchParams()
    useEffect(() => {
        console.log(searchParams.get('paymentId'))    
        console.log(searchParams.get('PayerID'))    
        const paymentId= searchParams.get('paymentId')
        const PayerID= searchParams.get('PayerID')
        CustomerOrderService.GetResultPayment(paymentId, PayerID).then(res=>{
            console.log(res.data)
            if(res.data){
                CustomerOrderService.UpdatePaymentStatus(res.data).then(res2=>{
                  if(res2.data.status==1){
                    setPaymentStatus(true)
                  }
                  else{
                    console.log(res2.data)
                  }
                })
            }
        }).catch(console.error())
    }, []);
  

    return (
      <div className="relative">
      {paymentStatus ? <div className="bg-gray-100 h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-white py-8 px-16 md:mx-auto">{hideLoading()}
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <a
                href="/"
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div> : <>{showLoading()}</>}
      </div>
  );
}