'use client'

import axios from"axios"
const CLIENT_URL ="http://localhost:8080/client"

const getAllProducts =()=>{
    return axios.get(CLIENT_URL +"/list-products")
}
const getProduct=(productId)=>{
    const response = axios.post(CLIENT_URL + "/get-product",{
        product_id : productId,
    } )
    return response
}

const ProductService={
    getAllProducts,
    getProduct
}

export default ProductService