import Link from "next/link";
import { routerPath } from "@/utils/constants/router";

export default function Layout({
    children
}) {
    return (
        <div>{children}</div>
    )
}