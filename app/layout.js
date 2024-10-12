"use client";

import React, {useState, useEffect} from 'react';

// import Navbar from '../components/Navbar';
import Head from 'next/head';
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

const metadata = {
    title: "FromScript",
    description: "everything is possible",
};

const RootLayout = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setIsLoading(false), 5000); // 5 seconds fake load time
        return () => clearTimeout(timer);
    }, []);

    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </Head>
        <body className="flex flex-col min-h-screen w-full">
        {isLoading ? (
            <LoadingScreen/>
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
//
//
// "use client";
//
// import React, {useState, useEffect} from 'react';
// import Navbar from '../components/Navbar';
// import Head from 'next/head';
// import "./globals.css";
//
// const metadata = {
//     title: "FromScript",
//     description: "everything is possible",
// };
//
// const RootLayout = ({children}) => {
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         let timer = setTimeout(() => setIsLoading(false), 5000); // 5 seconds fake load time
//         return () => clearTimeout(timer);
//     }, []);
//
//     return (
//         <>
//             <Head>
//                 <title>{metadata.title}</title>
//                 <meta name="description" content={metadata.description}/>
//             </Head>
//             <div className="flex flex-col min-h-screen h-screen w-full">
//                 <Navbar/>
//                 {isLoading ? (
//                     <div className="flex flex-grow items-center justify-center bg-black text-white">
//                         <div className="loading">
//                             <div className="logo">Logo</div>
//                             <div className="loading-bar" style={{width: '100%'}}>Chargement...</div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex flex-grow bg-gradient-to-r from-blue-500 to-blue-800 text-white">
//                         {children}
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default RootLayout;
