'use client'

import axios from"axios"
const CLIENT_URL ="http://localhost:8080/client"

const getAllProducts =()=>{
    return axios.get(CLIENT_URL +"/list-products")
}

const ProductService={
    getAllProducts,
}

export default ProductService