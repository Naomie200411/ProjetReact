import React from 'react';

interface FilterTypeProps {
    label: string;
    count: number;
}

const FilterType: React.FC<FilterTypeProps> = ({ label, count }) => {
    return (
        <div className="inline-flex items-center justify-start gap-4">
            <input type="checkbox" className="w-6 h-6 border-2 rounded border-light" />
            <div className="text-base font-normal leading-relaxed text-light ">{label} ({count})</div>
        </div>
    );
}

interface FilterProps {
    labelText:string,
    filterTypes: FilterTypeProps[];
}

const Filter: React.FC<FilterProps> = ({labelText, filterTypes }) => {
    return (
        <div className="w-[234px] h-[254px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="inline-flex items-center justify-between">
                <div className="text-base font-bold leading-normal text-title ">{labelText}</div>
            </div>
            {filterTypes.map((type, index) => (
                <FilterType key={index} label={type.label} count={type.count} />
            ))}
        </div>
    );
}

export default Filter;
