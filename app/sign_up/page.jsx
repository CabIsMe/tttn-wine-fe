'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState,useEffect } from "react";
import AuthService from "@/api/authentication/AuthService";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth"
import axios from 'axios';
import Image from "next/image";
import logo from '../../public/logo.png'
export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [errorInput, setErrorInput] = useState("")
    const router = useRouter()
    // useEffect(
    //     () => {
    //         console.log("authenticate", authenticate)
    //         if (user) {
                
    //         }
    //     },
    //     [ user ]
    // );
    function handleRegisterAccount(e)
    {
        e.preventDefault()
        // Validate:
        if (password.length < 6 || password ==""){
            setErrorInput("Password empty or length less than 6")
            return
        }
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            setErrorInput("Email invalid")
            return
        }
        if(fullName == ""){
            setErrorInput("Full Name not empty")
            return
        }
        AuthService.register(email, password, fullName).then(res=>{
            if (res.data.status==1){
                console.log(res.data)
                router.push("/login")
            }else{
                if(typeof res.data.detail == "string"){
                    setErrorInput(res.data.detail)
                }
                else{
                    setErrorInput(res.data.msg)
                }
            }
        })
    }
    
    const login = ()=>{

    }
      
    return (
        <div className="flex h-full w-full justify-center items-center ">
            <div className="h-full relative">
                <img style={{transform:"rotateY(180deg)"}} src="https://www.walshandsons.com.au/wp-content/uploads/2022/05/Syrah-Hero_1.jpg" alt="img"/>
                <div className="absolute z-10 h-full right-0 -top-10 w-[650px] break-words backdrop-blur-sm flex justify-center items-center mx-auto rounded py-6">
                    <div className="text-lg w-[300px]">
                        <div className="flex w-full justify-center items-center">
                            <span className="w-[200px]"><Image src={logo} alt="logo"/></span>
                        </div>
                        <center><h2 className="text-2xl font-bold mb-6">Login</h2></center>
                        <form onSubmit={handleRegisterAccount}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter your email" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 font-medium">Full Name</label>
                                <input type="text" id="email" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} 
                                placeholder="Enter your full name" required/>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                                <input type="password" id="password" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" required/>
                            </div>
                            <strong className="text-red-600 text-base ">{errorInput}</strong>
                            <div className="flex flex-col items-end justify-center text-sm">
                                <span onClick={()=>{router.push("sign_up")}} className="cursor-pointer mx-1 underline text-gray-200">You have an account?</span>                 
                            </div>
                            <button type="submit" className="w-full mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Sign up</button>
                            
                            
                            
                        </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}