'use client';
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);
export default function useAuth() {
    const [isAuth, setIsAuth] = useContext(AuthContext);
    return [isAuth, setIsAuth];
}

export function AuthProvider({
    children
}) {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
            {children}
        </AuthContext.Provider>
    )
}