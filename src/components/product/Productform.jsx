import React, { useEffect, useState } from "react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import Navbar from "../Navbar/Navbar";
import { storage } from "../../firebase/Firebase";
import { message } from "antd";
import { Addproduct } from "../../apis/Apis";
import { getcategory } from "../../apis/Apis";

const Productform = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function invoke() {
      await getcategory().then((res) => {
        setCategories(res?.data?.category);
      });
    })();
  }, []);
  const handlesignup = async (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    console.log(data, "koooooook");
    data = {
      productname: data.get("productname"),
      quantity: data.get("quantity"),
      prize: data.get("prize"),
      discription: data.get("discription"),
      image: data.get("image"),
      category: data.get("parentCategory"),
    };
    if (data.image.name) {
      const date = Date.now();
      const rand = Math.random();
      const image = data.image;
      const imageRef = ref(
        storage,
        `/productimage/${date}${rand}_${image?.name}`
      );

      const toBase64 = (image) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        }).catch((err) => {});
      const imgBase = await toBase64(image);

      await uploadString(imageRef, imgBase, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        data.image = downloadURL;
      });
    } else {
      data.cimage = "";
    }

    const response = await Addproduct(data);
    if (response?.data?.success) {
      message.success("Product added successfully!");
    } else {
      message.error("something wrong!!");
    }
  };
  return (
    <div>
      <Navbar />
      <form
        className="bg-white mx-auto my-6 flex flex-col w-full   max-w-2xl "
        onSubmit={handlesignup}
      >
        <div className="py-6">
          <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="w-full p-8 ">
              <p className="text-2xl font-semibold text-center myb-4 text-siteviolet">
                ADD PRODUCT
              </p>

              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Product name
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  id="productname"
                  name="productname"
                ></input>
              </div>
              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Quantity
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="number"
                  id="quantity"
                  name="quantity"
                ></input>
              </div>
              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Prize
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="number"
                  id="prize"
                  name="prize"
                ></input>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Category
                  </label>
                  {/* <Link to="/forgetpassword">
                        <p className="text-xs text-cyan-400">
                          Forget Password?
                        </p>
                      </Link> */}
                </div>
                <select
                  className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  name="parentCategory"
                  //   value={parentCategory}
                  //  onChange={handleInputChange}
                >
                  {/* <option value={null}>No Parent (Top-level Category)</option> */}
                  {categories.map((category) => (
                    <option key={category._id} value={category?.categoryname}>
                      {category?.categoryname}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Driscription
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  id="discription"
                  name="discription"
                ></input>
              </div>
              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="file"
                  id="image"
                  name="image"
                ></input>
              </div>

              {/* 
              {isloading ? (
                <div className="mb-4 mt-10 flex justify-center ">
                  <InfinitySpin width="200" color="#194569" />
                </div>
              ) : (
                <div className="mt-8">
                  <button className="bg-siteviolet text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                    Save my condact
                  </button>
                </div>
              )} */}
              <div className="mt-8">
                <button className="bg-siteviolet text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                  ADD PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Productform;
