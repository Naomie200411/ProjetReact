import React from 'react';
import { CompanyProps } from '../interfaces/company_categorieProps';
import { Icon } from '@iconify/react';

import '../index.css';

const Company:React.FC<CompanyProps> = ( {icon, companyName} ) => {
    return (
     <>   
        <div className='p-10 flex flex-col gap-6'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col p-8 border border-[#D6DDEB] bg-white'>
                    <Icon icon={icon} className='w-12 h-12 icon' />
                    <p className='text-sm font-semibold text-title group-hover:text-white group-focus:text-white '> {companyName} </p>

                </div>
            </div>
            
        </div>
        </>
          )
        }

    


export default Company;
