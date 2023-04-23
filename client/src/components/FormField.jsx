/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { preview } from "../assets";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-lg font-bold text-white"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-md bg-[#18baff]
          py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-black border border-black text-white
          text-lg rounded-[35px] focus:ring-[#040404] font-bold 
          focus:border-[#0d0d0d] outline-none block w-full p-5"
        />
      </div>
    </div>
  );
};

export default FormField;
