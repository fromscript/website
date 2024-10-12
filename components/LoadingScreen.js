import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../public/logos/icone_couleur.svg';  // Adjust the import path as necessary

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(oldProgress + 20, 100);  // Simulating loading progress
            });
        }, 1000);  // Simulate loading progress
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-fond3">
            <Image
                priority
                src="logos/H_couleur.svg"
                height={238}
                width={554}
                alt="Follow us on Twitter"
            />
            <div className="relative w-3/4 h-4 bg-white">
                <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-white mt-2">Chargement... {progress}%</p>
        </div>
    );
};

export default LoadingScreen;
