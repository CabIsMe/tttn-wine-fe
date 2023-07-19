import Icon from "@/components/Icon";

export default function Input({
    label,
    type="input",
    placeholder,
    handleChange,
    icon,
    value="",
}) {
    return (
        <label className="w-full max-w-[300px] flex flex-col gap-1 ">
            {label}
            <div className={`w-full rounded-md flex items-center overflow-hidden ${type == "text" && 'border-2'}`}>
                <input 
                    type={type}
                    className="w-full py-1.5 px-2"
                    placeholder={placeholder}
                    onChange={handleChange}
                    defaultValue={value}
                />
                <Icon name={`${icon} pl-1 pr-2`}/>
            </div>
        </label>
    )
}