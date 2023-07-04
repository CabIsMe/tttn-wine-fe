export default function Select({
    text,
    dataSet,
    handleChange,
}) {
    return (
        <div className="flex gap-3 items-center">
            {text}
            <select
                className="min-w-[120px] max-w-[320px] border-2 outline-none p-2 rounded-md"
                onChange={handleChange}
            >
                {dataSet.map(opt => 
                    <option value={opt.value}>{opt.text}</option>    
                )} 
            </select>
        </div>
    )
}