'use client'

import axios from"axios"
import authHeader from "../authentication/AuthHeader"
const CLIENT_URL ="http://localhost:8080/client"

const AddToCard=async(productId, amount)=>{
    const response = await axios.post(CLIENT_URL + "/add-cart",{
        product_id: productId,
        amount: amount
    },
    {
        headers: authHeader()
    }
    )
    return response
}
const RemoveItemsCard=(productId)=>{
    axios.post(CLIENT_URL + "/remove-cart",{
        product_id: productId,
    },{
        headers: authHeader()
    })
}


const CustomerOrderService={
    AddToCard,
    RemoveItemsCard
}

export default CustomerOrderService