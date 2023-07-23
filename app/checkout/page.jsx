'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState, useEffect } from "react";
import CustomerOrderService from "@/api/orders/CustomerOrdersService";

export default function Page() {
    const [paymentStatus, setPaymentStatus] = useState(false)

    useEffect(() => {
        CustomerOrderService.GetResultPayment().then(res=>{
            setPaymentStatus(true)
        }).catch(error=>{
            if(error.response){
                console.log(error.response.data)
            }
        })
    }, []);
  

    return (
        <div>
        {paymentStatus === 'Payment successful' ? (
            <div>
            <h1>Payment Successful</h1>
            {/* Hiển thị các thông tin khác về thanh toán nếu cần */}
            </div>
        ) : (
            <div>
            <h1>Payment Approval Failed</h1>
            {/* Hiển thị thông báo lỗi nếu cần */}
            </div>
        )}
        </div>
    )
}