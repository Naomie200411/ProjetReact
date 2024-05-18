import React from 'react';
import { CompanyProps } from '../interfaces/company_categorieProps';
import { Icon } from '@iconify/react';

import '../index.css';

const Company_Categorie:React.FC<CompanyProps> = ( {icon, companyName} ) => {
    return (
     <>   
        <div className='p-10 flex flex-col '>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col p-8 border border-[#D6DDEB] bg-white items-start justify-start  w-[200px] h-[120px]'>
                    <Icon icon={icon} className='w-10 h-10 icon' />
                    <p className='text-sm font-semibold text-title group-hover:text-white group-focus:text-white '> {companyName} </p>

                </div>
            </div>
            
        </div>
        </>
          )
        }

    


export default Company_Categorie;
