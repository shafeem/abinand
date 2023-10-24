import React, { useState } from "react";

const Subcategory = ({ categories, onCreateCategory }) => {
  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "categoryName") {
      console.log(value, "ojof");
      setCategoryName(value);
    } else if (name === "parentCategory") {
      setParentCategory(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categoryName, parentCategory, "IHFDIU");
    onCreateCategory(categoryName, parentCategory);
    setCategoryName("");
    setParentCategory(null);
  };

  console.log(categories, ";;;;;");

  return (
    <div>
      <form
        className="bg-white mx-auto my-6 flex flex-col w-full   max-w-2xl "
        onSubmit={handleSubmit}
      >
        <div className="py-6">
          <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="w-full p-8 ">
              <p className="text-2xl font-semibold text-center myb-4 text-siteviolet">
                ADD CATEGORY
              </p>

              <div className="mt-4 text-left">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Enter Category Name
                </label>
                <input
                  className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  name="categoryName"
                  value={categoryName}
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Parent Category
                  </label>
                </div>
                <select
                  className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  name="parentCategory"
                  value={parentCategory}
                  onChange={handleInputChange}
                >
                 
                  {categories.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.categoryname}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-siteviolet text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  ADD CATEGORY
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subcategory;
