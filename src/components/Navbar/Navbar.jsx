import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex mx-3 my-4">
        <li className="flex-1 mr-2">
          <Link
            to="/categoryCreation"
            className="text-center block border  rounded py-2 px-4 bg-siteviolet hover:bg-gray-600 text-white"
          >
            CREATE CATEGORY
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            to="/addproduct"
            className="text-center block border  rounded py-2 px-4 bg-siteviolet hover:bg-gray-600 text-white"
          >
            ADD PRODUCT
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link
            to="/"
            className="text-center block border  rounded py-2 px-4 bg-siteviolet hover:bg-gray-600 text-white"
          >
            PRODUCT LIST
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
