import React from "react";
import { arrowDown, pdf } from "../assets";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    
    <a download href={pdf}>
      Download Catalog 
    </a>
  </button>
);

export default Button;