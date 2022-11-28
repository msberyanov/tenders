import React from 'react';
import { Link } from "react-router-dom";

export const navigationButtons: NavigationButtonProps[] = [
  {
    name: "Закупки",
    link: "/tenders",
    className: "tenders",
    selectionColor: "#5f9581"
  },
  {
    name: "Контакты",
    link: "/contacts",
    className: "contacts",
    selectionColor: "#9f4762"
  }
];

interface NavigationButtonProps {
  name: string;
  link: string;
  className: string;
  selectionColor: string;
  current?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  name,
  link,
  className,
  selectionColor,
  current
}) => {
  return (
    <Link to={link}>
      <div
        className={`text-white ml-2 py-1.5 px-4 rounded-lg font-medium${current ? " bg-[rgba(255,255,255,0.2)]" : " hover:bg-[rgba(255,255,255,0.1)]"} transition-background`}
        onClick={() => {
          document.documentElement.className = "";
          document.documentElement.classList.add(className);
          document.querySelector("meta[name='theme-color']")?.setAttribute("content", selectionColor);
        }}
      >
        {name}
      </div>
    </Link>
  );
};