import React from 'react';
import { NavigationButton, navigationButtons } from "./navigation/button";
import { Button, buttons } from "./button";
import { SearchBar } from "./search-bar";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const {pathname} = useLocation();

  return (
    <div className="fixed flex h-[100px] w-screen">
      <div className="flex w-screen justify-between items-center">
        <div className="ml-[40px] text-xl text-white font-extrabold">ТЕНДЕРЫ</div>
        <div className="flex justify-center items-center">
          {navigationButtons.map(navigationButton =>
            <NavigationButton
              name={navigationButton.name}
              link={navigationButton.link}
              className={navigationButton.className}
              selectionColor={navigationButton.selectionColor}
              current={navigationButton.link === pathname}
            />
          )}
        </div>
        <div className="flex">
          <SearchBar/>
          {buttons.map(button =>
            <Button icon={button.icon}/>
          )}
        </div>
      </div>
    </div>
  );
};