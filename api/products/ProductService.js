'use client'

import axios from"axios"
const CLIENT_URL ="http://localhost:8080/client"

const getAllProducts =()=>{
    return axios.get(CLIENT_URL +"/list-products")
}
const getPromotionalProducts=()=>{
    return axios.get(CLIENT_URL +"/list-promotional-products")
}
const getNewReleaseProducts=()=>{
    return axios.get(CLIENT_URL +"/list-new-products")
}
const getProduct=(productId)=>{
    const response = axios.post(CLIENT_URL + "/get-product",{
        product_id : productId,
    } )
    return response
}
const getProductsByName=(productName)=>{
    const response = axios.post(CLIENT_URL + "/get-product-by-name",{
        product_name: productName,
    } )
    return response
}

const ProductService={
    getAllProducts,
    getProduct,
    getPromotionalProducts,
    getNewReleaseProducts,
    getProductsByName
}

export default ProductService