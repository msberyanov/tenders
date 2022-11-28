import React from 'react';
import { BiUser } from "react-icons/bi";

export const buttons: ButtonProps[] = [
  {
    icon: <BiUser/>
  }
]

interface ButtonProps {
  icon: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({
  icon
}) => {
  return (
    <div className="flex text-2xl text-white last-of-type:mr-[30px] items-center">
      {icon}
    </div>
  );
};