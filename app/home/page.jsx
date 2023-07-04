'use client';
import useNotification from "@/utils/hooks/useNotification"
export default function Page() {
    const notify = useNotification();

    function handleClick() {
        notify({
            text: "hello",
            type: "info", // 'info' | 'danger' | 'error' | 'success'
        })
    }
    return (
        <div>
            {/* <h1 className="text-2xl font-bold">Home</h1>
            <p>Click to navigation on the left</p>
            <button className="bg-green-300" onClick={handleClick}>Click me</button> */}
        </div>
    )
}