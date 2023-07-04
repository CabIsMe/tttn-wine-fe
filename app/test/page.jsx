'use client';
import useAuth from "@/utils/hooks/useAuth"

export default function Page() {
    const [isAuthen, setIsAuthen] = useAuth();
    console.log("isAuth", isAuthen);
    function handleClick() {
        setIsAuthen(!isAuthen);
    }
    return (
        <>
            <h1>{isAuthen.toString()}</h1>

            <button onClick={handleClick}>Click</button>
        </>
    )
}