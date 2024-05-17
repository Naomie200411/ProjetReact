
import React from 'react'
import { HeroSectionPropos } from "../interfaces/HeroSectionPropos"
import { Icon } from '@iconify/react';
import Button from './button';


const HeroSection:React.FC<HeroSectionPropos> = ( {icon} ) => {
return (

    <>
      <section className="p-4 pb-8 bg-[url('/img/pattern.png')] bg-white md:hidden">
      <div className="space-y-6">
        <div>
          <h2 className="flex flex-col text-5xl font-semibold">
            {/* Discover more than{' '} */}
            <p>Discover</p>
            <p> more than</p>
            <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h2>
          <img src="../src/assets/images/Vector.svg" alt="" />
        </div>
        <p className='w-[521px]'>
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="p-4 bg-white divide-y-2 ">
          <div className="flex items-center p-2 gap-x-4">
          <Icon icon="material-symbols-light:search" />            <p className="text-[#A8ADB7] text-[16px] ">Job title or keyword</p>
          </div>
          <div className="">
            <div className="flex items-center py-2 gap-x-4 ">
            <Icon icon="mdi:location" />  
                        <select id="country" name="country" autoComplete="country-name" className="block w-full px-1 text-[16px] rounded-md border-0 py-1.5 text-[#25324B]">
                <option className='text-[16px] px-4'>Florence, Italy</option>
                <option className='text-[16px]'>Dakar, Sénégal</option>
                <option className='text-[16px]'>Cotonou, Bénin</option>
            </select>
            </div>
            <Button className="w-full">Search my job</Button>
          </div>
        </div>
        <div className=" text-[#515B6F]">
          <p>Popular :</p>
          <p className="font-medium">
            UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </div>
    </section>

    <section className="hidden p-4 pb-8 md:block md:mt-[82px] bg-white">
      <div className="space-y-6">
        <div>
          <h2 className="flex flex-col font-semibold text-7xl">
            <p>Discover</p>
            <p> more than</p>
            <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h2>
          <img src="../src/assets/images/Vector.svg" alt="" />
        </div>
        <p className='w-[521px] md:text-[20px]'>
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
        <div className="flex p-4 bg-white divide-y-2 w-[852px] ">
          <div className="flex items-center p-2 w-[305.5px]">
          <Icon icon="material-symbols-light:search" />            <p className="text-[#A8ADB7] text-[16px] ">Job title or keyword</p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center py-2 gap-x-4 w-[305.5px]">
            <Icon icon="mdi:location" />              <select id="country" name="country" autoComplete="country-name" className="block w-full px-1 text-[16px] rounded-md border-0 py-1.5 text-[#25324B]">
                <option className='text-[16px] px-4'>Florence, Italy</option>
                <option className='text-[16px]'>Dakar, Sénégal</option>
                <option className='text-[16px]'>Cotonou, Bénin</option>
            </select>
            </div>
            <Button className="w-[209px]">Search my job</Button>
          </div>
        </div>
        <p className="font-medium text-[#515B6F] mt-4">
          Popular UI Designer, UX Researcher, Android, Admin
        </p>
      
      </div>
    </section>
    

    
    </>
  );
}

export default HeroSection;
