import axios from "../axios/axios"

export const createcategory = async (categoryName, parentCategory) => {
    try {
      const response = await axios({
        url: "/createcategory",
        method: "post",
        data: {categoryName, parentCategory},
        
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  export const getcategory = async () => {
    try {
      const response = await axios({
        url: "/getcategory",
        method: "get",
      
        });
      return response;
    } catch (error) {
      return error;
    }
  };

  export const Addproduct = async (data) => {
    try {
      const response = await axios({
        url: "/Addproduct",
        method: "post",
        data: {data},
        
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  export const getparentcategory = async () => {
    try {
      const response = await axios({
        url: "/getparentcategory",
        method: "get",
      
        });
      return response;
    } catch (error) {
      return error;
    }
  };

  export const getproducts = async () => {
    try {
      const response = await axios({
        url: "/getproducts",
        method: "get",
      
        });
      return response;
    } catch (error) {
      return error;
    }
  };

  export const getsubproduct = async (categryId) => {
    try {
      const response = await axios({
        url: "/getsubproduct",
        method: "post",
        data: {categryId},
        
      });
      return response;
    } catch (error) {
      return error;
    }
  };