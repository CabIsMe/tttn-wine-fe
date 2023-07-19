'use client'

import axios from"axios"
import authHeader from "../authentication/AuthHeader"
const CLIENT_URL ="http://localhost:8080/client"

const GetCustomerInfo =()=>{
    return axios.get(CLIENT_URL + "/customer-info",{
        headers: authHeader()
    })
}
const UpdateCustomer =async(customer)=>{
    const response = await axios.post(CLIENT_URL + "/update-customer",{
        "full_name":customer.full_name,
        "gender": parseInt(customer.gender),
        "date_of_birth":customer.date_of_birth,
        "address":customer.address,
        "phone_number":customer.phone_number
    },{
        headers: authHeader()
    })
    return response
}

const CustomerService ={
    GetCustomerInfo,
    UpdateCustomer
}

export default CustomerService