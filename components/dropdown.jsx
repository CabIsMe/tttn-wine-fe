import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function DropdownComponent({
    setFilter,
    optionValues
}) {
    const [optionDisplay, setOptionDisplay] = useState(false)
    function displayOptions(){
        setOptionDisplay(!optionDisplay)
    }
    function handleFilter(value){
        setFilter(value)
        setOptionDisplay(!optionDisplay)
    }
    const optionRef = useRef(null);
    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (optionRef.current && !optionRef.current.contains(event.target)) {
              setOptionDisplay(false);
            }
          };
      
          document.addEventListener('click', handleClickOutside);
      
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    },[])
    return (
        <div ref={optionRef} className="inline-flex bg-white border rounded-md">
            <span className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
                Filter by
            </span>

            <div className="relative">
                <button onClick={displayOptions}
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {optionDisplay && <div className=" absolute right-0 z-10 min-w-max w-40 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        {optionValues.map(option=>(
                            <div key={option.value} onClick={()=> handleFilter(option.value)}
                                className="flex justify-between px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer">
                                <span>{option.name}</span>
                                <Icon name={option.icon} />
                            </div>
                        ))
                        }
                        
                    </div>
                </div>}
            </div>
        </div>
    );
}