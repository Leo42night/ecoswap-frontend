// import React from 'react'
import { NavLink, Outlet } from "react-router";

export default function DevNavBar() {
  return (
    <div>
      <nav className="py-2 underline bg-blue-500 text-white font-bold flex gap-4">
        <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Landing Page</NavLink>
        <NavLink to="/catalog" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Catalog</NavLink>
        <NavLink to="/product/kardus-bekas-toko-a" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Detail Produk 1</NavLink>
        {/* <NavLink to="/produk/1">Detail Produk 1</NavLink> */}
      </nav>
      <Outlet />
    </div>
  );
}
