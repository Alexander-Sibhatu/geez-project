import React from "react";
import { Link } from "react-router-dom";
import angle_icon from '../../assets/angle_icon.svg'
import search_icon from '../../assets/search_icon.svg'

const HomePage = () => {
  return (
    <div className="w-full bg-[#F4E1C1] h-screen">
      <div className='flex justify-between'>
        <img src={angle_icon} alt="" className='w-48 h-48'/>

        <img src={angle_icon} alt="" className='rotate-90 w-48'/>
      </div>
      <div className="flex flex-col justify-center"> 
        <div className='flex items-center justify-center'>
         <div className="relative w-96">
          <input type="text" placeholder="ፈልግ" className='w-96 h-10 rounded-full border border-gray-300 text-center text-xl focus:placeholder-transparent'/>
          <img src={search_icon} alt="search icon" className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5'/>
         </div>
        </div>
        <div className=" flex flex-col items-center self-center justify-center pt-4 gap-4 text-lg w-1/3">
            <Link to="verbs" className="bg-[#5C4033] w-64 h-12 text-center text-[#F4E1C1] hover:bg-[#6D7D47] hover:text-[#ffdb79] p-2 hover:outline-4 transition-all duration-10 delay-10 rounded hover:text-2xl">
              ግሥ
            </Link>

            <Link to="" className="bg-[#5C4033] w-64 h-12 text-center text-[#F4E1C1] hover:bg-[#6D7D47] hover:text-[#ffdb79] p-2 transition-all duration-300 delay-150 rounded hover:text-2xl">
                ነባር
            </Link>
            <Link to="" className="bg-[#5C4033] w-64 h-12 text-center text-[#F4E1C1] hover:bg-[#6D7D47] hover:text-[#ffdb79] p-2 transition-all duration-300 delay-150 rounded hover:text-2xl">
                የቅኔ መጠነ ዜማ
            </Link>

            <Link to="" className="bg-[#5C4033] w-64 h-12 text-center text-[#F4E1C1] hover:bg-[#6D7D47] hover:text-[#ffdb79] p-2 transition-all duration-300 delay-150 rounded hover:text-2xl">
                አገባብ
            </Link>

            <Link to="" className="bg-[#5C4033] w-64 h-12 text-center text-[#F4E1C1] hover:bg-[#6D7D47] hover:text-[#ffdb79] p-2 transition-all duration-300 delay-150 rounded hover:text-2xl">
                ጸያፍ
            </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
