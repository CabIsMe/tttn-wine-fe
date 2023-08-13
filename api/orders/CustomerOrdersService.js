'use client'

import axios from"axios"
import authHeader from "../authentication/AuthHeader"
const CLIENT_URL ="http://localhost:8080/client"

const AddToCard=async(productId, amount)=>{
    const response = await axios.post(CLIENT_URL + "/add-cart",{
        product_id: productId,
        amount: parseInt(amount)
    },
    {
        headers: authHeader()
    }
    )
    return response
}
const RemoveItemsCard=(productId)=>{
    return axios.post(CLIENT_URL + "/remove-cart",{
        product_id: productId,
    },{
        headers: authHeader()
    })
}

const AllProductsInCart=()=>{
    return axios.get(CLIENT_URL + "/cart",{
        headers: authHeader()
    })
}

const CreateCustomerOrder = async(customerInfo, customerOrderDetailInfo) =>{
    const response = await axios.post(CLIENT_URL +"/create-customer-order",{
        "full_name": customerInfo.full_name,
        "address": customerInfo.address,
        "phone_number": customerInfo.phone_number,
        "payment_status": customerInfo.payment_status,
        "customer_order_detail_info": customerOrderDetailInfo
    },{
        headers: authHeader()
    })
    return response
}

const CreatePaymentPaypal=async(price, orderId)=>{
    const response = await axios.post("http://localhost:9090/pay", {
        "price": parseFloat(price),
        "currency": "USD",
        "method": "paypal",
        "intent": "sale",
        "description": orderId,
    },
    )
    return response
}



const GetResultPayment= async(paymentId, PayerID)=>{
    const response = await axios.get("http://localhost:9090/pay/success",
    {
        params: {
            paymentId :paymentId,
            PayerID: PayerID
        }
    },
    {
        headers: authHeader()
    })
    return response
}
const UpdatePaymentStatus=async(orderId)=>{
    const response = await axios.post(CLIENT_URL +"/payment/success",{
        order_id: orderId
    },{
        headers: authHeader()
    })
    return response
}
const GetMyCustomerOrdered=async()=>{
    const response = await axios.post(CLIENT_URL +"/list-ordered",{
    },{
        headers: authHeader()
    })
    return response
}

const CustomerOrderService={
    AddToCard,
    RemoveItemsCard,
    AllProductsInCart,
    CreateCustomerOrder,
    CreatePaymentPaypal,
    GetResultPayment,
    UpdatePaymentStatus,
    GetMyCustomerOrdered
}

export default CustomerOrderService