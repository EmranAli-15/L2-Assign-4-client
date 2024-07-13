import { FormEvent, useState } from "react";
import { useCreateCategoryMutation, useGetAllCategoryQuery } from "../../redux/features/category/categoryApi";
import { useCreateProductMutation } from "../../redux/features/products/productsApi";
import Swal from "sweetalert2";

const AddProduct = () => {

    const { data, isLoading } = useGetAllCategoryQuery(undefined);
    const [createProduct] = useCreateProductMutation();
    const [createCategory] = useCreateCategoryMutation()

    let content
    if (!isLoading && data) {
        content = <>
            {
                data.data.map((it: any) => {
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
        const ratingStr = (form.elements.namedItem('rating') as HTMLInputElement).value;
        const rating = parseInt(ratingStr);
        const image = (form.elements.namedItem('image') as HTMLInputElement).value;
        const quantityStr = (form.elements.namedItem('quantity') as HTMLInputElement).value;
        const quantity = parseInt(quantityStr);


        const data = { title, price, description, rating, category, image, quantity }

        if (!title || !price || !description || !rating || !image || !category || !quantity) {
            return console.log('Please provide all information');
        } else {
            const process = await createProduct(data);

            if (process.data.success == true) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your Product Added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    const [newCategory, setNewCategory] = useState("");
    const [newCategoryImage, setNewCategoryImage] = useState("");

    const addCategory = async () => {
        const data = {
            category: newCategory,
            image: newCategoryImage
        };

        if (!newCategory || !newCategoryImage) {
            // console.log('asdlkfj')
        } else {
            const process = await createCategory(data);
            if (process.data.success == true) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Category Created",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>

            <div>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>

                        <label htmlFor="">Category Name:</label><br />
                        <input onChange={(e) => setNewCategory(e.target.value)} className="h-12 border outline-none rounded px-2 w-full" type="text" name="newCategory" id="" />

                        <label htmlFor="">Image Link:</label><br />
                        <input onChange={(e) => setNewCategoryImage(e.target.value)} className="h-12 border outline-none rounded px-2 w-full mt-3" type="text" name="newCategoryImage" id="" />
                        <div className="flex justify-end mt-5">
                            <div>
                                <button onClick={addCategory} className="btn">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-10">
                <div className="flex justify-end">
                    <label htmlFor="my_modal_6" className="flex items-center h-10 border rounded-lg cursor-pointer">Needs new category?</label>
                </div>
                <form onSubmit={onSubmit} className="mx-2 md:mx-0"> 
                    <div className="md:flex justify-between gap-x-3">
                        <div className="md:w-[50%]">
                            <label>Title</label><br />
                            <input className="h-12 border outline-none rounded px-2 w-full" type="text" name="title" id="" />
                        </div>
                        <div className="md:w-[50%]">
                            <label>Price</label><br />
                            <input className="h-12 border outline-none rounded px-2 w-full" type="number" name="price" id="" />
                        </div>
                    </div>

                    <div className="md:flex justify-between gap-x-3 md:my-10">
                        <div className="md:w-[50%]">
                            <label>Rating</label><br />
                            <input className="h-12 border outline-none rounded px-2 w-full" type="number" name="rating" id="" />
                        </div>
                        <div className="md:w-[50%]">
                            <label>Image</label><br />
                            <input className="h-12 border outline-none rounded px-2 w-full" type="text" name="image" id="" />
                        </div>
                    </div>

                    <div className="md:flex justify-between gap-x-3">
                        <div className=" md:w-[50%]">
                            <label>Description</label><br />
                            <textarea className="h-12 border outline-none rounded px-2 w-full" name="description" id="" />
                        </div>
                        <div className=" md:w-[50%]">
                            <label htmlFor="">category</label><br />
                            <select name="category" className="h-12 border outline-none overflow-auto rounded px-2 w-full">
                                {
                                    content
                                }
                            </select>
                        </div>
                    </div>

                    <div className="md:flex justify-between gap-x-3 md:mt-5">
                        <div className="md:w-[50%]">
                            <label>Quantity</label><br />
                            <input className="h-12 border outline-none rounded px-2 w-full" type="number" name="quantity" id="" />
                        </div>

                    </div>


                    <div className="flex justify-center mt-5">
                        <button type="submit" className="btn bg-[#597D35] text-white">Add Product</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddProduct;