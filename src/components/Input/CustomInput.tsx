import React from "react";
interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string | "";
  htmlFor: string | "";
  labeltext: string | "";
}


const CustomInput = (props: inputProps) => {
  const { className, htmlFor, labeltext } = props;
  return (
    <>
      <label htmlFor={htmlFor} className='mb-3 block  font-medium text-[#07074D]'>{labeltext}</label>
        <input className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md${className}`} {...props} />
     
    </>
  );
};

export default CustomInput;
