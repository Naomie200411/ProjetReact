interface AppliedProps {
    width: string,
    applied: string,
    capacity: string,
}

const Applied: React.FC<AppliedProps> =  ({width, applied, capacity}) => {
    return (
        <>
            <div className="flex flex-col items-start">  
                <div className=" bg-[#D6DDEB] h-[6px] w-[165px] " >
                    <div className=" bg-greensecondary h-[6px]" style={{ width: `${width}px` }} ></div>
                </div>
                <p className="text-sm text-light"><strong className="text-black">{applied} applied</strong> of {capacity} capacity</p>
            </div>  
        </>
    );
}

export default Applied;
