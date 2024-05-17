// import React from 'react'

import { FeaturedJobs } from "../interfaces/featuresProps"

import React from 'react';

interface ButtonProps {
    bgColor: string;
    textColor: string;
    label: string;
}

interface FeaturedjobsProps {
    job: FeaturedJobs;
    buttons: ButtonProps[];
}

const Featuredjobs: React.FC<FeaturedjobsProps> = ({ job, buttons }) => {
    return (
        <>
            <div className="w-[274px] h-[283px] border border-stroke p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={job.logo} alt="" />
                    </div>
                    <div className="w-[91px] h-[34px] border border-primary flex items-center justify-center">
                        <p className="text-base text-center text-primary"> Fill Time</p>
                    </div>
                </div>

                <div className="flex flex-col items-start mt-4">
                    <p className="text-lg font-semibold text-title"> {job.name} </p>
                    <p className="text-base text-light">
                        {job.subtitle1}
                        <span className="inline-block w-1 h-1 rounded-full bg-[#515B6F] ml-2 mr-2"></span>
                        {job.subtitle2}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="w-[226px] text-light text-base "> {job.text} </p>
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

export default Featuredjobs;
