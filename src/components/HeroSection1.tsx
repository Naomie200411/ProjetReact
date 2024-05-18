
import React from 'react'
import { HeroSectionPropos } from "../interfaces/HeroSectionPropos"
import { Icon } from '@iconify/react';
import Button from './button';


const HeroSection1:React.FC<HeroSectionPropos> = ( {icon} ) => {
return (

    <>
      <section className="p-4 pb-8  bg-white md:hidden w-[629px] justify-center items-center">
      <div className="space-y-6">
        <div>
          <h2 className="flex flex-col text-5xl font-semibold">
            {/* Discover more than{' '} */}
            <p>Find your</p>
            <span className="text-[#26A4FF]">dream companies</span>
          </h2>
          <img src="../src/assets/images/Vector.svg" alt="" />
        </div>
        <p className='w-[521px]'>
        Find the dream companies you dream work for
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

    <section className="  flex bg-white justify-center items-center">
      <div className="space-y-6">
        <div>
          <h2 className="flex gap-2  font-semibold text-5xl">
          <p>Find your</p>
          <div className='flex flex-col'>
          <span className="text-[#26A4FF]">dream companies</span>
          <img src="../src/assets/images/Vector.svg" alt="" className='w-80'/>

          </div>
          </h2>
        </div>
       <div className='flex justify-center items-center'>
       <p className='w-[521px] md:text-[20px]'>
        Find the dream companies you dream work for
        </p>
       </div>
        <div className="flex p-4 bg-white w-[852px] ">
          <div className="flex items-center p-2 w-[305.5px]">
          <Icon icon="material-symbols-light:search" />            <p className="text-[#A8ADB7] text-[16px] ">Job title or keyword</p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center py-2 gap-x-4 w-[305.5px]">
            <Icon icon="mdi:location" />            
              <select id="country" name="country" autoComplete="country-name" className="block w-full px-1 text-[16px] rounded-md border-0 py-1.5 text-[#25324B]">
                <option className='text-[16px] px-4'>Florence, Italy</option>
                <option className='text-[16px]'>Dakar, Sénégal</option>
                <option className='text-[16px]'>Cotonou, Bénin</option>
            </select>
            </div>
            <Button className="w-[209px]">Search</Button>
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

export default HeroSection1;
