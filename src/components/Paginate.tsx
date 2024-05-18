/*import ButtonPaginate from "./btnpaginate.js"
function Paginate() {
    return (
      <>
        <div className=" space-x-3 flex w-[312px] items-center ">
          <a href="" className=""><ButtonPaginate name={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 m-auto" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"/></svg>} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          <a href="" className=""><ButtonPaginate name={"1"} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          <a href="" className=""><ButtonPaginate name={"2"} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          <a href="" className=""><ButtonPaginate name={"3"} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          <div className=""><svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] " viewBox="0 0 24 24"><path fill="#4f4f4f" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"/></svg></div>
          <a href="" className=""><ButtonPaginate name={"10"} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          <a href="" className=""><ButtonPaginate name={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 m-auto" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"/></svg>} dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} /></a>
          
        </div>
      </>  
    )
}

export default <Paginate></Paginate>*/

import React from 'react';
import ButtonPaginate from "./btnpaginate.js";

interface PaginateProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Paginate: React.FC<PaginateProps> = ({ setCurrentPage }) => {
    return (
        <div className="space-x-3 flex w-[312px] items-center">
            <button onClick={() => setCurrentPage('Page1')} className="">
                <ButtonPaginate 
                    name={"1"} 
                    dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} 
                />
            </button>
            <button onClick={() => setCurrentPage('Page2')} className="">
                <ButtonPaginate 
                    name={"2"} 
                    dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} 
                />
            </button>
            <button onClick={() => setCurrentPage('Page4')} className="">
                <ButtonPaginate 
                    name={"3"} 
                    dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} 
                />
            </button>
            <button onClick={() => setCurrentPage('Page3')} className="">
                <ButtonPaginate 
                    name={"4"} 
                    dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} 
                />
            </button>
            <button onClick={() => setCurrentPage('Page10')} className="">
                <ButtonPaginate 
                    name={"10"} 
                    dimension={{ width: "36px", height: "36px", borderRadius: "4px"}} 
                />
            </button>
        </div>
    );
};

export default Paginate;



