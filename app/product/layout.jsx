import Link from "next/link";
import { routerPath } from "@/utils/constants/router";
import { NavBar } from "../page";

export default function Layout({
    children
}) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}