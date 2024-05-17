import React from 'react'
import { CategoryProps } from '../interfaces/categoryProps';
import { Icon } from '@iconify/react';


const Category:React.FC<CategoryProps> = ( {icon, categoryName, jobsNumber} ) => {
  return (
    <> 
        <div className='bg-white w-[274px] h-[214px] flex flex-col items-start border border-[#D6DDEB] p-8 cursor-pointer group hover:bg-primary focus:bg-primary '>
            <Icon icon={icon}  className='w-12 h-12 icon' />
            <div className='mt-8'>
             <p className='text-2xl font-semibold text-title group-hover:text-white group-focus:text-white '> {categoryName} </p>
             <div className='flex items-center mt-3 '>
              <p className='text-lg text-light group-hover:text-white group-focus:text-white '> {jobsNumber} jobs available</p> 
              <Icon icon="formkit:arrowright"  className='ml-4 arrow'  />
             </div>
            </div>
        </div> 
    </>
  )
}

export default Category
