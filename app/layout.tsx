"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import Head from 'next/head';
import LoadingScreen from '../sections/LoadingScreen'; // Adjust this path if necessary
import "./globals.css";

type RootLayoutProps = {
    children: ReactNode;
};

const metadata = {
    title: "FromScript",
    description: "everything is possible",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 5000); // 5 seconds fake load time
        return () => clearTimeout(timer);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </Head>
        <body className="flex flex-col min-h-screen w-full">
        {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
            <div className="flex flex-col flex-grow">
                <div className="flex flex-grow">
                    {children}
                </div>
            </div>
        )}
        </body>
        </html>
    );
};

export default RootLayout;
