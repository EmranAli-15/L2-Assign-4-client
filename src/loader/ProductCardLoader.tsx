
const ProductCardLoader = () => {
    return (
        <div className="bg-base-100 w-44 md:w-72 mt-5  mx-2 md:mx-0 animate-pulse duration-100">
            <h1 className="h-[150px] md:h-[200px] w-full rounded-t-xl bg-slate-200"></h1>

            <div>
                <h1 className="w-[90%] h-[20px] bg-slate-200 my-5"></h1>
                <h1 className="w-[100px] h-[20px] bg-slate-200"></h1>

                <div className="flex justify-between items-center my-5">
                    <h1 className="h-[15px] w-[100px] bg-slate-200"></h1>
                    <h1 className="h-[20px] w-[50px] bg-slate-200"></h1>
                </div>
            </div>
        </div>
    );
};

export default ProductCardLoader;