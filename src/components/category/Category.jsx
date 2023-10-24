import React, { useState, useEffect } from "react";
import Subcategory from "./Subcategory";
import { message } from "antd";
import { createcategory } from "../../apis/Apis";
import { getcategory } from "../../apis/Apis";
import Navbar from "../Navbar/Navbar";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function invoke() {
      await getcategory().then((res) => {
        setCategories(res?.data?.category);
      });
    })();
  }, []);

  const handleCreateCategory = (categoryName, parentCategory) => {
    createcategory(categoryName, parentCategory).then((res) => {
      setCategories([...categories, res?.data?.Category]);
      if(res?.data?.success){
         message.success("category added successfully!");
      }else{
        message.error("something wrong!!");
      }
    });
  };

  return (
    <div>
    
      <Navbar/>
      <Subcategory
        categories={categories}
        onCreateCategory={handleCreateCategory}
      />
    </div>
  );
}

export default Category;
