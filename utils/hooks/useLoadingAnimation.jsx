'use client';
import Icon from "@/components/Icon";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export default function useLoadingAnimation() {
    const setIsShow = useContext(LoadingContext);

    function show() {
        setIsShow?.(true);
    }

    function hide() {
        setIsShow?.(false);
    }

    return ([
        show,
        hide,
    ]); 
}

export function LoadingProvider({
    children,
}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <LoadingContext.Provider value={setIsShow}>
            {children}
            {isShow && <Spinner />}
        </LoadingContext.Provider>
    );
}

function Spinner() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 flex flex-col items-center
            px-10 py-5 bg-gray-400 text-black">
            <div className="animate-spin ">
                <Icon name="fan" size="2xl" />
            </div>
            <div>
                Loading...
            </div>
        </div>
    )
}