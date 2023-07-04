export default function Button({
    text,
    handleClick,
    color = "blue" // blue | red | green | gray
}) {
    let className = "min-w-[72px] py-2 px-3 rounded-md font-semibold hover:-translate-y-[0.5px]";
    if (color == "blue")
        className += " bg-blue-400 text-white";
    else if (color == "red")
        className += " bg-red-600 text-white";
    else if (color == "green")
        className += " bg-green-400 text-white";
    else if (color == "gray")
        className += " bg-gray-200";

    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}