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

const CustomerOrderService={
    AddToCard,
    RemoveItemsCard,
    AllProductsInCart,
    CreateCustomerOrder
}

export default CustomerOrderService