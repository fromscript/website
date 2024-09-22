import React from 'react';

const Card = ({ title, description, children }) => {
    return (
        <div className="text-center p-10 rounded-lg shadow-xl max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-lg md:text-xl mb-6">{description}</p>}
            {children}
        </div>
    );
};

export default Card;
