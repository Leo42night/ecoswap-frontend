// import React from 'react'

import { Outlet } from "react-router";

export default function SellerLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-slate-400 text-center pt-20 font-bold text-3xl">SellerLayout</div>
      <div className="flex w-full justify-center">
        <Outlet />
      </div>
    </div>
  );
}
