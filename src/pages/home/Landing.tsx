import { NavLink } from 'react-router-dom';
import landing from '../../assets/landing.png'
import { useGetAllCategoryQuery } from '../../redux/features/category/categoryApi';
import Products from "./products/Products";
import Customer from '../Customer/Customer';

const Landing = () => {

    const { data, isLoading } = useGetAllCategoryQuery(undefined);


    let content
    if (!isLoading && data) {
        content = <div className='flex items-center gap-x-5'>
            {
                data.data.map((item: any) => {
                    return <div key={item._id}>
                        <NavLink to={`/category-products/${item.category}`}>
                            <div className='md:h-[100px] md:w-[100px] h-[70px] w-[70px]'>
                                <img className='w-full h-full rounded-full' src={item.image} alt={item.category} />
                            </div>
                            <h1 className="text-[16px] md:text-lg font-semibold text-[#597D35]">
                                {
                                    item.category.length > 8 ? <p>{item.category.slice(0, 8)}..</p> : <p>{item.category}</p>
                                }
                            </h1>
                        </NavLink>
                    </div>
                })
            }
        </div>
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="flex justify-center">
                <img className="md:h-[85vh] md:w-[85vw]" src={landing} alt="Banner Image" />
            </div>

            <div className='my-20'>
                <h1 className="ml-2 md:ml-0 text-3xl md:text-4xl font-serif md:my-10 font-semibold text-[#597D35]">Category</h1>
                <div className='mt-5 overflow-x-auto whitespace-nowrap overflow-hidden mx-2'>
                    {content}
                </div>
            </div>

            <div>
                <Products></Products>
            </div>

            <div>
                <Customer></Customer>
            </div>

        </div>
    );
};

export default Landing;