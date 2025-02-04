import React, { useState } from "react";
import image1 from "../../assets/images/img2.png";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

const HomePage = () => {
  const [searchText, setSearchText] = useState(""); // State for input value

  // Function to clear the input field
  const handleCancelClick = () => {
    setSearchText(""); // Clears the input field
  };

  return (
    <Layout>
      <div className="flex bg-[#F4E1C1] justify-start">
        <div>
          <img src={image1} alt="" className="w-[600px]" />
        </div>
        <div className="w-[600px] flex 
        h-[350px] items-center justify-end">
          {/* Input field with no border */}
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
            className="w-[564px] h-12 rounded p-5 border-none outline-none"
          />
          
          {searchText && (
            <div onClick={handleCancelClick}>
              <CancelIcon className="ml-[-40px] gap-4 w-8 cursor-pointer" />
            </div>
          )}
          <button className="bg-[#5C4033] h-11 w-12 rounded-full ml-5">
            <SearchIcon className="w-9" />
          </button>
        </div>
      </div>

      <div className="bg-[#F4E1C1] gap-4 mt-[-100px] p-2">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
