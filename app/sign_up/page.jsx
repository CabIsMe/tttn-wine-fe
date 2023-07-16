'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState,useEffect } from "react";
import AuthService from "@/api/authentication/AuthService";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth"
import axios from 'axios';

import {useGoogleLogin  } from '@react-oauth/google';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [_, setAuthenticate] = useAuth()
    const [errorInput, setErrorInput] = useState("123")
    const router = useRouter()
    useEffect(
        () => {
            
        },
        []
    );
    function handleSignUp(e)
    {
        e.preventDefault()
        AuthService.login(email, password).then(res=>{
            if (res.data.status==1){
                setAuthenticate(true)
                console.log(res.data)
                router.push("/")
            }else{
                if (res.data.detail==''){
                    setErrorInput("Account does not exist")
                }
                else{
                    setErrorInput("Incorrect account or password")
                }
            }
        }).catch(error=>{
            if(error.response){
                console.log(err.response)
            }
        })
    }
    
    
      
    return (
        <div className="flex h-full w-full justify-center items-center ">
            <div className="h-full relative">
                <img style={{transform:"rotateY(180deg)"}} src="https://www.walshandsons.com.au/wp-content/uploads/2022/05/Syrah-Hero_1.jpg" alt="img"/>
                <div className="absolute z-10 h-full right-0 -top-10 w-[650px] break-words backdrop-blur-sm flex justify-center items-center mx-auto rounded py-6">
                    <div className="text-lg w-[300px]">
                        <div className="flex w-full justify-center items-center">
                            <img src={assets.logo} alt="logo" width="300px"/>
                        </div>
                        <center><h2 className="text-2xl font-bold mb-6">Sign up</h2></center>
                        <form onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Enter your email" required/>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                                <input type="password" id="password" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" required/>
                            </div>
                            <strong className="text-red-600 text-base ">{errorInput}</strong>
                            
                            <button type="submit" className="w-full mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Login</button>
                            
                            
                            
                        </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}