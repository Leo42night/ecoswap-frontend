// import React from 'react'
import { NavLink, Outlet } from "react-router";

export default function DevNavBar() {
  return (
    <div>
      <nav className="py-2 underline bg-blue-500 text-white font-bold flex gap-4">
        <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>LandingPage</NavLink>
        <NavLink to="/catalog" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Catalog</NavLink>
        <NavLink to="/product/kardus-bekas-toko-a" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>DetailProduk1</NavLink>
        <NavLink to="/ecodu" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>EcoDu</NavLink>
        <NavLink to="/keranjang" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>UserKeranjang</NavLink>
        <NavLink to="/seller" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller</NavLink>
        <NavLink to="/seller/list-produk" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller/ListProduk</NavLink>
        <NavLink to="/seller/tambah-produk" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller/TambahProduk</NavLink>
        <NavLink to="/seller/chat" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller/Chat</NavLink>
        <NavLink to="/seller/riwayat-transaksi" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller/pengiriman</NavLink>
        <NavLink to="/seller/ulasan" className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>Seller/Ulasan</NavLink>
        {/* <NavLink to="/produk/1">Detail Produk 1</NavLink> */}
      </nav>
      <Outlet />
    </div>
  );
}
