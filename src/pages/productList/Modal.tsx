import { FormEvent } from "react";
import { useGetAllCategoryQuery } from "../../redux/features/category/categoryApi";
import { useUpdateProductMutation } from "../../redux/features/products/productsApi";

const Modal = ({ edit, editModal, item }: { edit: Boolean, editModal: Function }) => {
    const [updateProduct, { isSuccess }] = useUpdateProductMutation()
    const fn = () => {
        editModal(!edit);
    }

    const { data, isLoading } = useGetAllCategoryQuery();

    let content
    if (!isLoading && data) {
        content = <>
            {
                data.data.map(it => {
                    return <option key={it._id} value={it.category}>{it.category}</option>
                })
            }
        </>
    }


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        const priceStr = (form.elements.namedItem('price') as HTMLInputElement).value;
        const price = parseInt(priceStr);
        const description = (form.elements.namedItem('description') as HTMLInputElement).value;
        const category = (form.elements.namedItem('category') as HTMLInputElement).value;
        const id = item._id;

        const data = {
            title, price, description, category
        };

        console.log(data, id)

        const process = await updateProduct({data, id});

        console.log(process);
        if(isSuccess){
            console.log('Yeaa hoo!!');
        }
        if(isSuccess){
            console.log('Yeaa hoo!!');
        }
    }

    return (
        <div>
            <div onClick={fn} className={edit && 'bg-black/[0.5] h-[120vh] -mt-28 w-screen z-10 absolute'}>

            </div>

            <form onSubmit={onSubmit} className="translate-x-[5%] md:translate-x-1/2 translate-y-1/2 w-[90%] md:w-[50%] bg-white rounded-lg shadow-2xl absolute z-20 p-5">
                <div className="md:flex justify-between gap-x-3">
                    <div className=" md:w-[50%]">
                        <label>Title</label><br />
                        <input defaultValue={item.title} className="h-12 border outline-none rounded px-2 w-full" type="text" name="title" id="" />
                    </div>
                    <div className=" md:w-[50%]">
                        <label htmlFor="">price</label><br />
                        <input defaultValue={item.price} className="h-12 border outline-none rounded px-2 w-full" type="number" name="price" id="" />
                    </div>
                </div>

                <br />

                <div className="md:flex justify-between gap-x-3">
                    <div className=" md:w-[50%]">
                        <label>Description</label><br />
                        <textarea defaultValue={item.description} className="h-12 border outline-none rounded px-2 w-full" name="description" id="" />
                    </div>
                    <div className=" md:w-[50%]">
                        <label htmlFor="">category</label><br />
                        <select name="category" className="h-12 border outline-none overflow-auto rounded px-2 w-full">
                            <option value={item.category}>{item.category}</option>
                            {
                                content
                            }
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit" className="btn">click</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;