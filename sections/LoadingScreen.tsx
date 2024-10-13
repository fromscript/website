import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type LoadingScreenProps = {
    onLoadingComplete: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    onLoadingComplete(); // Call the callback when loading completes
                    return 100;
                }
                return Math.min(oldProgress + 5, 100);
            });
        }, 100);
        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <section id="loading" className="flex flex-col items-center justify-center h-screen bg-fond3">
            <Image
                priority
                src="logos/H_bleu.svg"
                height={238}
                width={554}
                alt="FromScript Technologie"
            />
            <div className="relative w-1/2 mt-8 h-2 bg-white">
                <div
                    className="absolute top-0 left-0 h-full bg-blue-500 transition-all ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="flex justify-between w-1/2 text-white mt-2">
                <p>Chargement...</p>
                <p>{progress}%</p>
            </div>
        </section>
    );
};

export default LoadingScreen;
