import React from 'react';
import SectionScrollButton from "./SectionScrollButton";

const OpenSourceProjectSection: React.FC = () => {
    return (
        <div className="bg-fond2 w-full flex px-16 py-28 flex-col justify-center items-center gap-12">
            {/* Main Content */}
            <div className="flex-col text-center">
                <h1 className="text-blue-700 text-5xl font-bold font-brockmann leading-tight">
                    Un projet?<br />Un concept?<br />L'idée du siècle?
                </h1>
                <p className="text-blue-500 text-xl font-bold font-brockmann mt-6 leading-7">
                    On veut l’entendre!
                </p>
            </div>
            <SectionScrollButton text='Demander une consultation' className="px-6 py-3 bg-blue-700 text-white text-xl font-bold font-brockmann rounded-full" targetSection='contact'/>
        </div>
    );
};

export default OpenSourceProjectSection;
