import React, { useState } from 'react';

const Input = ({
                   label,
                   type = 'text',
                   name,
                   value,
                   onChange,
                   placeholder = '',
                   required = false,
                   className = '',
                   ...props
               }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative z-0 w-full group ${className}`}>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(value !== '')}
                required={required}
                className={`
          block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 text-white
          appearance-none focus:outline-none focus:ring-0 focus:border-blue-800 peer
          transition-all duration-300 ease-in-out
        `}
                placeholder={placeholder}
                {...props}
            />
            <label
                htmlFor={name}
                className={`
          absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
          ${isFocused || value ? 'text-blue-800' : 'text-white'}
        `}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
