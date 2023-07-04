'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";

export default function Page() {


    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 py-6">
            <div className="flex w-full justify-center items-center">
                <img src={assets.logo} alt="logo" width="300px"/>
            </div>
            <center><h2 className="text-2xl font-bold mb-6">Create Account</h2></center>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                            <input type="email"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                            <input type="password"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your password" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">Re-Password</label>
                            <input type="password"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your password" required/>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium">Full name</label>
                            <input type="email"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">Phone number</label>
                            <input type="password"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your password" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">Address</label>
                            <input type="password"  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your password" required/>
                        </div>
                    </div>
                </div>
                
                
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Create Account</button>
                
            </form>
        </div>
    )
}