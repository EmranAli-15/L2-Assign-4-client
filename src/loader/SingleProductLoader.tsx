
const SingleProductLoader = () => {
    return (
        <div>
            <div className="md:flex justify-center gap-x-10 animation-pulse duration-100">


                <div className="w-[90%] md:w-[50%] h-[250px] md:h-[350px] mx-auto bg-slate-200">
                </div>

                <div className="mt-5 md:mt-0 w-[90%] md:w-[50%] mx-auto flex flex-col justify-between">
                    <div>
                        <h1 className="md:w-full h-[25px] bg-slate-200"></h1>
                        <h1 className="md:w-full h-[60px] bg-slate-200 mt-5"></h1>
                    </div>

                    <h1 className="mt-5 md:mt-0 w-[80px] h-[40px] bg-slate-200"></h1>

                    <div className="mt-5 md:mt-0 flex items-center gap-x-20">
                        <h1 className="w-[90px] h-[40px] bg-slate-200"></h1>
                        <h1 className="w-[80px] h-[40px] bg-slate-200"></h1>
                    </div>

                    <div className="mt-5 md:mt-0">
                        <h1 className="w-[200px] h-[20px] bg-slate-200 mb-5"></h1>
                        <h1 className="w-[80px] h-[10px] bg-slate-200"></h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProductLoader;