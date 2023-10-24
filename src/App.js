import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom"


//pages
import Addcategory from "./pages/Addcategory/Addcategory";
import Addproduct from "./pages/Addproduct/Addproduct";
import ListProduct from "./pages/ListProduct/ListProduct";
import SublistProduct from "./pages/ListProduct/SublistProduct";




function App() {
  return (
    <div className="App">
     <Routes>
      <Route element={<ListProduct/>} exact path="/"/>
      <Route element={<SublistProduct/>} path="/sublist/:categoryId"/>
      <Route element={<Addcategory/>} path="/categoryCreation"/>
      <Route element={<Addproduct/>} path="/addproduct"/>
     </Routes>
    </div>
  );
}

export default App;
