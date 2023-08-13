import Link from "next/link";
import { routerPath } from "@/utils/constants/router";
import Header from "@/layouts/Header";

export default function Layout({
    children
}) {
    return (
        
        <div>
            <Header/>
            {children}</div>
    )
}