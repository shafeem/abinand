import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getsubproduct } from "../../apis/Apis";

const Sublist = () => {
  const { categoryId } = useParams();

  const [catgories, setCatogories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setgategoryName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async function invoke() {
      await getsubproduct(categoryId).then((res) => {
        setCatogories(res?.data?.subcategory);
        setProducts(res?.data?.products);
        setgategoryName(res?.data?.catname);
      });
    })();
  }, [categoryId]);

  const handleInputChange = (event) => {
    const { value } = event.target;

    navigate(`/sublist/${value}`);
  };

  return (
    <div>
      <Navbar />
      <form className="bg-white mx-auto my-6 flex flex-col w-full   max-w-2xl ">
        <div className="py-6">
          <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="w-full p-8 ">
              <p className="text-2xl font-semibold text-center myb-4 text-siteviolet">
                {category?.categoryname}
              </p>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    SUB CATEGORY
                  </label>
                </div>
                <select
                  className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  name="parentCategory"
                  //  value={parentCategory}
                  onChange={handleInputChange}
                >
                  {catgories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category?.categoryname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div
        className="jobContainer flex gap-10 justify-center flex-wrap items-center
        py-10"
      >
        {products?.map((data, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
              <img
                src={data?.ImageURL}
                alt="Shoes"
                className="rounded-xl h-[15rem]"
              />
            </figure>
            <div className="card-body  text-left ml-4">
              <h2 className="card-title font-extrabold text-xl ">
                {data?.ProductName}
              </h2>
              <h2 className="card-title font-bold text-gray-700 text-lg ">
                ₹{data?.Prize}
              </h2>
              <h4 className="card-title font-bold text-green-700 text-sm ">
                {data?.Discription}
              </h4>
              <p className="truncate h-6 overflow-hidden">
                {data?.discription}
              </p>
              <div className="flex justify-between">
                <div className="card-actions "></div>
                <div className="card-actions "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sublist;
