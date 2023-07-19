'use client'
import { useState } from "react";
import Icon from "./Icon";

export default function RadioGroup({
    handleRadioChange,
    title="Gender",
    text1,
    text2, 
    icon
}){
    const [selectedRadio, setSelectedRadio] = useState('default-radio-1');

    const handleChange = (event) => {
        setSelectedRadio(event.target.id);
        handleRadioChange(event.target.value)
    };

    return (
        <div className="flex items-center justify-between my-2">
            <span>{title}</span>
            <div className="flex items-center ">
                <input
                id="default-radio-1"
                type="radio"
                value="1"
                name="default-radio"
                checked={selectedRadio === 'default-radio-1'}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none"
                >
                {text1}
                </label>
            </div>
            <div className="flex items-center ">
                <input
                id="default-radio-2"
                type="radio"
                value="2"
                name="default-radio"
                checked={selectedRadio === 'default-radio-2'}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                {text2}
                </label>
            </div>
            <Icon name={`${icon} pl-1 pr-2`}/>
        </div>
    );
}