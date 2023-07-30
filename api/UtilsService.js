'use client'

import axios from"axios"
import authHeader from "./authentication/AuthHeader"
const CLIENT_URL ="http://localhost:8080/client"

const GetCurrentPromotion=()=>{
    return axios.get(CLIENT_URL +"/get-promotion-by-date",{
        headers: authHeader()
    })
}

const UtilsService ={
    GetCurrentPromotion
}

export default UtilsService