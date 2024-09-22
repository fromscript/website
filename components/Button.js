import React from 'react';

const Button = ({ text, onClick, type = 'button', className = '', ...props }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-white text-blue-700 py-2 px-6 rounded-md font-medium hover:bg-blue-50 transition-colors ${className}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
