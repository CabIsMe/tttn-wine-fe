import Link from "next/link";
import { routerPath } from "@/utils/constants/router";
import Header from "@/layouts/Header";
export default function Layout({
    children
}) {
    return (
        // <div className="flex h-screen">
        //     <aside className="w-60 py-4 px-3 flex flex-col gap-4 border-r-2 bg-blue-400">
        //         <Link className="h-6 px-3 bg-white rounded-md" href={routerPath.home}>Home</Link>
        //         <Link className="h-6 px-3 bg-white rounded-md" href={routerPath.customers}>Customer</Link>
        //         <Link className="h-6 px-3 bg-white rounded-md" href={routerPath.productCategories}>Product Categories</Link>
        //         <Link className="h-6 px-3 bg-white rounded-md" href={routerPath.products}>Products</Link>
        //         <Link className="h-6 px-3 bg-white rounded-md" href={"/"}>Log out</Link>
        //     </aside>
            
        // </div>
        <>
            <Header/>
            {children}
        </>
    )
}