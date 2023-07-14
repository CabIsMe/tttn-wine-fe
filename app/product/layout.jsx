import Link from "next/link";
import { routerPath } from "@/utils/constants/router";
import { NavBar } from "../components";
import useAuth from "@/utils/hooks/useAuth";

export default function Layout({
    children
}) {
    return (
        <>
            {children}
        </>
    )
}