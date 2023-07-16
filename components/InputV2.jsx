export default function Input({
    label,
    type="input",
    placeholder,
    handleChange,
    icon
}) {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 text-white px-3 py-2 focus:outline-none focus:border-blue-500" 
            value={email}
            onChange={handleChange} 
            placeholder={placeholder} required/>
        </div>
    )
}