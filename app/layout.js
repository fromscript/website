import Navbar from '../components/Navbar';
import Head from 'next/head';
import "./globals.css";

export const metadata = {
    title: "FromScript",
    description: "everything is possible",
};

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </Head>
        <body className="flex flex-col min-h-screen h-screen w-full">
        <Navbar/>
        <div className="flex flex-grow bg-gradient-to-r from-blue-500 to-blue-800 text-white">
            {children}
        </div>
        </body>
        </html>
    );
};

export default RootLayout;
