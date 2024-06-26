'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState,useEffect } from "react";
import AuthService from "@/api/authentication/AuthService";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth"
import axios from 'axios';
import logo from '../../public/logo.png'

import {useGoogleLogin  } from '@react-oauth/google';
import Image from "next/image";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ profile, setProfile ] = useState([]);
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
    function handleLogin(e)
    {
        e.preventDefault()
        AuthService.login(email, password).then(res=>{
            if (res.data.status==1){
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
    
    const login = useGoogleLogin({
        onSuccess: (response) => {
            console.log('response', response)
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    console.log(res.data)
                    console.log('user', response)
                    setProfile(res.data);
                    AuthService.signInGoogle(res.data.email, res.data.id, res.data.name).then(res=>{
                        if(res.data.status==1){
                            router.push("/")
                        }
                        else{
                            console.log(res.data)
                        }
                    })                    
                })
                .catch((err) => console.log(err));
        },
        onError: (error) => console.log('Login Failed:', error)
    });
      
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
                        <form onSubmit={handleLogin}>
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
                            <div className="flex flex-col items-end justify-center text-sm">
                                <span onClick={()=>{router.push("sign_up")}} className="cursor-pointer mx-1 underline">Sign up</span>                 
                                <span className="cursor-pointer mx-1 underline">Forget your password?</span>
                            </div>
                            <button type="submit" className="w-full mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Login</button>
                            
                            <div className="flex items-center my-4">
                                <div className="flex-grow border-b border-gray-400"></div>
                                <span className="text-gray-500 mx-3">Or</span>
                                <div className="flex-grow border-b border-gray-400"></div>
                            </div>
                            
                            <button onClick={()=>login()} type="button" className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none">Login with Google</button>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}