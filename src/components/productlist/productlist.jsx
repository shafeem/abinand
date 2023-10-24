import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getproducts } from "../../apis/Apis";
import Navbar from "../Navbar/Navbar";

const ProductList = () => {
  const [products, seproducts] = useState([]);
  useEffect(() => {
    (async function invoke() {
      await getproducts().then((res) => {
        seproducts(res?.data?.porducts);
      });
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Category />
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

export default ProductList;
