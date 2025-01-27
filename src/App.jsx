import { Route, Routes } from "react-router";
import DevNavBar from "./components/DevNavBar";
import LandingPage from "./pages/LandingPage";
import Catalog from "./pages/Catalog";
import DetailProduct from "./pages/DetailProduct";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<DevNavBar />}>
        <Route index element={<LandingPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:slug" element={<DetailProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
