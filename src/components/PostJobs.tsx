

const PostJobs = () => {
    return (
        <>
           <div className="custom-div w-auto md:w-[1300px] md:h-[414px]">
                <div className="mt-[88px] md:mt-0 px-[16px] md:px-[70px] md:flex absolute">
                    <div className='md:mt-[93px]'>
                        <p className="font-semibold text-[36px] md:text-5xl md:w-[364px] text-white text-center md:text-start">Start posting jobs today</p>
                        <p className="mt-6 font-medium text-center text-white md:text-start">Start posting jobs for only $10.</p>
                        <button className="px-[106px] md:px-6 py-[12px] font-bold bg-white focus:outline-none text-primary hover:bg-white/50 flex items-center justify-center mt-4 mx-auto md:mx-0" 
                        type='submit'
                        >
                            <p>Sign Up For Free</p>
                        </button> 
                    </div>

                    <div className="md:ml-[124px] md:mt-[70px] mt-[46px] ">
                        <img src="../src/assets/images/Dashboard-Company.png" alt="#" />
                    </div>
                      
                </div>
            
           </div>

        </>
    );
}

export default PostJobs;
