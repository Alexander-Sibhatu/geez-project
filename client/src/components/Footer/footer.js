import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PhoneIcon from "@mui/icons-material/Phone";
export default function footer() {
  return (
    <div class="bg-[#5C4033] w-full h-[200px] stickey">
      <div class="flex justify-between">
        <div class="ml-10">
          <h2 class="text-white ">geez dictionary </h2>
        </div>

        <div>
          <h2>About Us</h2>
        </div>
        <div class="mr-10">
          <span>
            <PhoneIcon />
          </span>
          <span>Contact Us</span>
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <CopyrightIcon />
        <h2>Copyright</h2>
      </div>
    </div>
  );
}
