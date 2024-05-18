// import React from 'react'

import { FeaturedJobs1 } from "../interfaces/featuresProps1"

import React from 'react';

interface ButtonProps {
    bgColor: string;
    textColor: string;
    label: string;
}

interface FeaturedjobsProps1 {
    job: FeaturedJobs1;
    buttons: ButtonProps[];
}

const Featuredjobs1: React.FC<FeaturedjobsProps1> = ({ job, buttons }) => {
    return (
        <>
            <div className="w-[274px] h-[283px] border border-stroke p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={job.logo} alt="" />
                    </div>
                    <div className="w-[91px] h-[34px] bg-[#F8F8FD] flex items-center justify-center">
                        <p className="text-base text-center text-primary">3 Jobs</p>
                    </div>
                </div>

                <div className="flex flex-col items-start mt-4">
                    <p className="text-lg font-semibold text-title"> {job.name} </p>
                   
                </div>

                <div className="mt-4">
                    <p className="w-[226px] text-light text-base "> {job.text} </p>
                </div>

                <div className="flex mt-4 space-x-2">
                    {buttons.map((button, index) => (
                        <button key={index} className={`bg-${button.bgColor} text-${button.textColor} border-${button.borderColor} rounded-[80px] px-[10px] py-[6px] text-semibold text-sm`}>
                            {button.label}
                        </button>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Featuredjobs1;
