import { useState } from "react";
import { useGetAllProductsQuery, useGetProductsActionsPostMutation } from "../../redux/features/products/productsApi";
import { useAppSelector } from "../../redux/hooks";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";


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
  const { productsList } = useAppSelector(state => state.productList);

  const [page, setPage] = useState(2)

  const getMoreProducts = async () => {
    setPage(page + 1);
    getProductsActionsPost(page);
  };


  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(null);
  const editModal = (item) => {
    setEdit(!edit);
    setData(item)
  }


  return (
    <div>
      <div>
        {edit && <Modal edit={edit} editModal={editModal} item={data}></Modal>}
      </div>


      <div className="max-w-7xl mx-auto pt-10 md:pt-20">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {
                productsList.map((item: TProducts) => <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img
                            src={item.image}
                            alt={item.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-serif text-[#597D35]">{item.title}</div>
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
                      onClick={()=>editModal(item)}
                      className="btn btn-ghost hover:bg-transparent hover:text-[#e2b457] btn-xs"><FaRegEdit size={20}></FaRegEdit>
                    </button>
                  </td>

                  <td>
                    <button className="btn btn-ghost hover:bg-transparent hover:text-red-500 btn-xs"><FaRegTrashAlt size={20}></FaRegTrashAlt></button>
                  </td>
                </tr>)
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