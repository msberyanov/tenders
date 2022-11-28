import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { TendersCover } from "./tenders/cover";

export const Content: React.FC = () => {
  return (
    <>
      <div className="flex w-[calc(100%-60px)] h-[calc(100%-60px)] mb-[30px] bg-[rgba(255,255,255,0.2)] rounded-2xl mt-[100px] shadow-md overflow-scroll">
        <Routes>
          <Route
            path="/tenders"
            element={<TendersCover/>}
          />
          <Route
            path="/contacts"
            element={<div className="h-[1000px]">contacts</div>}
          />
          <Route
            path="*"
            element={<Navigate to="/tenders" replace/>}
          />
        </Routes>
      </div>
    </>
  );
};