'use client';
import useAuth from "@/utils/hooks/useAuth"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const [isAuth, setIsAuth] = useAuth();
    const router = useRouter();
    console.log("isAuth", isAuth);
    function handleClick() {
        console.log(123)
        setIsAuth(!isAuth);
    }
    return (
        <div className="flex flex-col gap-4">
            <h1>{isAuth.toString()}</h1>
            <button onClick={handleClick}>Click</button>
            <a href="/test2">a tag</a>
            <Link href="/test2">Test2 Link</Link>
            <button onClick={() => router.push("/test2")}>Button using Router</button>
        </div>
    )
}