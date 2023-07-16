'use client';
import useAuth from "@/utils/hooks/useAuth"

export default function Page() {
    const [isAuth, setIsAuth] = useAuth();
    console.log("isAuth", isAuth);
    function handleClick() {
        console.log(123);
        setIsAuth(!isAuth);
    }
    return (
        <>
            <h1>{isAuth.toString()}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    )
}