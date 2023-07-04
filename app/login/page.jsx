'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { useState } from "react";
import AuthService from "@/api/authentication/AuthService";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth"
export default function Page() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [_, setAuthenticate] = useAuth()
    function handleLogin(e)
    {
        e.preventDefault()
        AuthService.login(email, password).then(res=>{
            setAuthenticate(true)
            console.log(res.data)
            router.push("/")
        }).catch(error=>{
            if(error.response){
                console.log(err.response)
            }
        })
    }
    return (
        <div className="flex h-screen w-full justify-center items-center ">
            <div className="h-full relative">
                <img src="https://www.walshandsons.com.au/wp-content/uploads/2022/05/Syrah-Hero_1.jpg" alt="img"/>
                <div className="absolute z-10 h-full top-0 min-w-[500px] backdrop-blur flex justify-center items-center mx-auto rounded py-6">
                    <div className="text-lg">
                        <div className="flex w-full justify-center items-center">
                            <img src={assets.logo} alt="logo" width="300px"/>
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
                                <input type="password" id="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" required/>
                            </div>
                            <span className="cursor-pointer">Forget your password</span>
                            <button type="submit" className="w-full mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Login</button>
                            
                            <div className="flex items-center my-4">
                                <div className="flex-grow border-b border-gray-400"></div>
                                <span className="text-gray-500 mx-3">Or</span>
                                <div className="flex-grow border-b border-gray-400"></div>
                            </div>
                            
                            <button type="button" className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none">Login with Google</button>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}