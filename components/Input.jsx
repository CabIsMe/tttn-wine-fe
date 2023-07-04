import Icon from "@/components/Icon";

export default function Input({
    label,
    type="input",
    placeholder,
    handleChange,
    icon
}) {
    return (
        <label className="w-full max-w-[300px] flex flex-col gap-1 ">
            {label}
            <div className="w-full border-2 rounded-md flex items-center overflow-hidden">
                <input 
                    type={type}
                    className="w-full py-1.5 px-2"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <Icon name={`${icon} pl-1 pr-2`}/>
            </div>
        </label>
    )
}