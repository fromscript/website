import React from 'react';

const CardFlip = ({ frontCard, backCard, flipTrigger }) => {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Cube Container */}
            <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out transform ${
                    flipTrigger ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
                {/* Front Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden flex justify-center items-center"
                    style={{ transform: 'rotateY(0deg)' }}
                >
                    {frontCard}
                </div>

                {/* Back Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden flex justify-center items-center"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    {backCard}
                </div>
            </div>
        </div>
    );
};

export default CardFlip;
