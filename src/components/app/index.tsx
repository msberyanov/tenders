import React, { useEffect } from 'react';
import { Header } from "../header";
import { Content } from "../content";
import { useLocation } from "react-router-dom";
import { navigationButtons } from "../header/navigation/button";

export const App: React.FC = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname) {
      const navigationButtonInfo = navigationButtons.find(navigationButton => navigationButton.link === pathname);

      document.documentElement.className = "";
      document.documentElement.classList.add(navigationButtonInfo?.className ?? "");

      document.querySelector("meta[name='theme-color']")?.setAttribute("content", navigationButtonInfo?.selectionColor ?? "");
    }
  }, [pathname]);

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Header/>
      <Content/>
    </div>
  );
};