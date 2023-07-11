'use client'
import Link from "next/link";
import { routerPath } from "@/utils/constants/router";
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function Layout({
    children
}) {
    return (
        <div>
            <GoogleOAuthProvider clientId="1016568162484-ap3188q44l6ej258pp69t62vmceh7h59.apps.googleusercontent.com">
                {children}
            </GoogleOAuthProvider>
            </div>
    )
}