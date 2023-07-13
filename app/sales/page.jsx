'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import { NavBar, FilterProduct, ListProduct, SectionHeading } from "../components";
import useAuth from "@/utils/hooks/useAuth"

export default function Page() {

    const [authenticate] = useAuth()
    return (
        < >
         <NavBar isAuthenticate={authenticate}/>
        <FilterProduct/>
        <ListProduct typeListProducts='promotional-products'/>   
        </>
    )
}