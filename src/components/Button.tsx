import { ReactNode } from "react";

interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  let { children} = props;
  return (
    <button
     
      className="text-[16px] bg-[#6747cd] rounded-sm text-white py-4 px-8 w-full overflow-hidden "
   {...props} >
      {children}
    </button>
  );
};

export default Button;
