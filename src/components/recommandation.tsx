import React from 'react';

interface ButtonProps {
    bgColor: string;
    textColor: string;
    label: string;
}

interface RecommandationJobsProps {
    logo: string; 
    name: string; 
    text: string;
    buttons: ButtonProps[];
}

const Recommandationjobs: React.FC<RecommandationJobsProps> = ({ logo, name, text, buttons }) => {
    return (
        <>
            <div className="w-[274px] h-auto border border-stroke p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-auto h-auto px-3 py-1  bg-[#F8F8FD] ">
                        <p className="text-base text-center text-primary">7 Jobs</p>
                    </div>
                </div>
                <p className="mt-4 text-lg font-semibold text-title"> {name} </p>

                <div className="mt-4">
                    <p className="text-base text-light"> {text} </p>
                </div>

                <div className="flex mt-4 space-x-2">
                    {buttons.map((button, index) => (
                        <button key={index} className={`bg-${button.bgColor} text-${button.textColor} rounded-[80px] px-[10px] py-[6px] text-semibold text-sm`}>
                            {button.label}
                        </button>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Recommandationjobs;
