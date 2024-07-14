import { useState } from "react";
import { useDeleteProductMutation, useGetAllProductsQuery, useGetProductsActionsPostMutation } from "../../redux/features/products/productsApi";
import { useAppSelector } from "../../redux/hooks";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


type TProducts = {
  _id: string
  title: string;
  description: string;
  rating: number;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

const ProductList = () => {

  const { } = useGetAllProductsQuery(1);
  const [getProductsActionsPost] = useGetProductsActionsPostMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const { productsList } = useAppSelector(state => state.productList);

  const [page, setPage] = useState(2)

  const getMoreProducts = async () => {
    setPage(page + 1);
    getProductsActionsPost(page);
  };


  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(null);
  const editModal = (item: any) => {
    setEdit(!edit);
    setData(item)
  }


  const deleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div>
      <div>
        {edit && <Modal edit={edit} editModal={editModal} item={data}></Modal>}
      </div>


      <div className={`${edit && ''} max-w-7xl mx-auto pt-10 md:pt-20 overflow-hidden whitespace-nowrap`}>
        <div className="flex justify-end mr-[5%] md:mr-[0]">
          <NavLink to="/add-product">
            <button className="btn bg-[#597D35] text-white">
              Add Product
            </button>
          </NavLink>
        </div>
        <div className="mt-5 overflow-x-auto whitespace-nowrap">
          <table className="table w-full">
            <tbody>
              {
                productsList.map((item: TProducts) => {
                  return <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3 mr-5">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14">
                            <img
                              src={item.image}
                              alt={item.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-[16px] text-serif text-[#597D35]">
                            {
                              item.title.length > 20 ? <p>{item.title.slice(0, 20)}...</p> : <p>{item.title}</p>
                            }
                          </div>
                          <div className="text-sm opacity-80">{item.category}</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center">
                        <TbCurrencyTaka className="text-red-500 size-6"></TbCurrencyTaka>
                        <p className="text-lg font-semibold">{item.price}</p>
                      </div>
                    </td>

                    <td>
                      <button
                        onClick={() => editModal(item)}
                        className="btn btn-ghost hover:bg-transparent hover:text-[#e2b457] btn-xs"><FaRegEdit size={20}></FaRegEdit>
                      </button>
                    </td>

                    <td>
                      <button onClick={() => deleteItem(item._id)} className="btn btn-ghost hover:bg-transparent hover:text-red-500 btn-xs"><FaRegTrashAlt size={20}></FaRegTrashAlt></button>
                    </td>
                  </tr>
                }
                )
              }
            </tbody>
          </table>
        </div>


        <div className="flex justify-center my-10">
          <div className="text-center">
            <button className="btn hover:bg-[#e2b457] bg-[#597D35] text-white font-semibold px-6 py-3 rounded-md" onClick={getMoreProducts}>
              More
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProductList;