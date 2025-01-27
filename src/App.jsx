import { Route, Routes } from "react-router";

import DevNavBar from "./layouts/DevNavBar";
import SellerLayout from "./layouts/SellerLayout";

import LandingPage from "./pages/LandingPage";
import EcoDu from "./pages/EcoDu";
import Catalog from "./pages/product/Catalog";
import DetailProduct from "./pages/product/DetailProduct";
import Keranjang from "./pages/Keranjang";

import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerTambahProduk from "./pages/seller/SellerTambahProduk";
import SellerChat from "./pages/seller/SellerChat";
import SellerPengiriman from "./pages/seller/SellerPengiriman";
import SellerUlasan from "./pages/seller/SellerUlasan";

import NotFound from "./pages/NotFound";
import SellerListProduk from "./pages/seller/SellerListProduk";
function App() {
  return (
    <Routes>
      <Route element={<DevNavBar />}>
        <Route index element={<LandingPage />} />
        <Route path="ecodu" element={<EcoDu />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="product/:slug" element={<DetailProduct />} />
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="*" element={<NotFound />} />

        <Route path="seller" element={<SellerLayout />}>
          <Route index element={<SellerDashboard />} />
          <Route path="list-produk" element={<SellerListProduk />} />
          <Route path="tambah-produk" element={<SellerTambahProduk />} />
          <Route path="chat" element={<SellerChat />} />
          <Route path="riwayat-transaksi" element={<SellerPengiriman />} />
          <Route path="ulasan" element={<SellerUlasan />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
