'use client';
import useNotification from "@/utils/hooks/useNotification"
import { assets } from "@/utils/constants/logo";
import {FilterProduct, ListProduct, SectionHeading } from "../components";
import useAuth from "@/utils/hooks/useAuth"
import Header from "@/layouts/Header";
export default function Page() {

    const [authenticate] = useAuth()
    return (
        < >
            <FilterProduct/>
            <ListProduct typeListProducts='promotional-products'/>   
        </>
    )
}