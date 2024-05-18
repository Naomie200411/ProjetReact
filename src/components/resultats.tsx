import React from 'react';
import { ResultatPropos } from '../interfaces/resultatsProps.tsx';

import '../index.css';

const Resultat:React.FC<ResultatPropos> = ( {image, ResultName, job} ) => {
    return (
     <>   
        <div className='p-10 flex flex-col '>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col p-8 border border-[#D6DDEB] bg-white items-center justify-between  w-[200px] h-[120px]'>
                    <img src={image} alt="" className='w-7 h-7'/>

                    <p className='text-sm font-semibold text-title group-hover:text-white group-focus:text-white '> {ResultName} </p>
                        <div className='flex items-center justify-center bg-[#F8F8FD]'>
                        <span className=' text-[#4640DE]'> {job} </span>

                        </div>
                </div>
            </div>
            
        </div>
        </>
          )
        }

    


export default Resultat;
