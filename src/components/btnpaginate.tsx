import React from 'react';

interface ButtonPaginateProps {
    name: React.ReactNode;
    dimension: {
        width: string;
        height: string;
        borderRadius: string;
    };
}

const ButtonPaginate: React.FC<ButtonPaginateProps> = ({ name, dimension }) => {
    return (
        <button className="border border-solid border-[#4F4F4F] duration-150 hover:bg-primary hover:text-white focus:text-white f focus:border-none" style={dimension}>
            {name}
        </button>
    );
}

export default ButtonPaginate;
