import React from 'react';
import { BiPowerOff, BiUser } from "react-icons/bi";
import { useActions } from "../../store/hooks/actions";

export const buttons: ButtonProps[] = [
  {
    icon: <BiUser className="mr-[5px]"/>,
    type: "profile"
  },
  {
    icon: <BiPowerOff/>,
    type: "logout"
  }
]

interface ButtonProps {
  icon: JSX.Element;
  type: string;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  type
}) => {

  const {clearToken} = useActions();

  return (
    <div
      className="flex text-2xl text-white last-of-type:mr-[30px] items-center cursor-pointer"
      onClick={() => {
        if (type === "logout") {
          clearToken();
        }
      }}
    >
      {icon}
    </div>
  );
};