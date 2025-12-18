import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DoNam from "./pages/DoNam";
import DoNu from "./pages/DoNu";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Signin from "./components/NavBar/Signin";
import Signup from "./components/NavBar/Signup";
import Sale from "./pages/Sale";
import { ContextProvider } from "./Context";
import ProductDetail from "./components/ProductDetail";
import Other from "./pages/Other";
import BanChay from "./pages/BanChay";
import AoNam from "./components/ProductNam/AoNam";
import QuanNam from "./components/ProductNam/QuanNam";
import AoNu from "./components/ProductNu/AoNu";
import QuanNu from "./components/ProductNu/QuanNu";
import Dam from "./components/ProductNu/Dam";

import AOS from "aos";
import "aos/dist/aos.css";
import BaoHanh from "./components/Footer/BaoHanh";
import DieuKhoanDichVu from "./components/Footer/DieuKhoanDichVu";
import ChinhSachThanhToan from "./components/Footer/ChinhSachThanhToan";
import LienHe from "./components/Footer/LienHe";
import Info from "./components/NavBar/Info";
import TatCaSanPham from "./pages/TatCaSanPham";
import AdminNav from "./components/Admin/AdminNav";
import ThongKe from "./components/Admin/ThongKe";
import QuanLySanPham from "./components/Admin/QuanLySanPham";
import DonHang from "./components/Admin/QuanLyDonHang";
import QuanLyDanhMuc from "./components/Admin/QuanLyDanhMuc";
import QuanLyTaiKhoan from "./components/Admin/QuanLyTaiKhoan";
import ThemSanPham from "./components/Admin/ThemSanPham";
import Checkout from "./components/Cart/Checkout";

const created = () => {
  AOS.init();
};

created();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/san-pham-ban-chay" element={<BanChay />} />
            <Route path="/do-nam" element={<DoNam />} />
            <Route path="/do-nu" element={<DoNu />} />
            <Route path="/phu-kien" element={<Other />} />
            <Route path="/tat-ca-san-pham" element={<TatCaSanPham />} />

            <Route path="/do-nam/ao-nam" element={<AoNam />} />
            <Route path="/do-nam/quan-nam" element={<QuanNam />} />
            <Route path="/do-nu/ao-nu" element={<AoNu />} />
            <Route path="/do-nu/quan-nu" element={<QuanNu />} />
            <Route path="/do-nu/dam" element={<Dam />} />

            <Route path="/products/chi-tiet/:id" element={<ProductDetail />} />

            <Route path="/chinh-sach-bao-hanh" element={<BaoHanh />} />
            <Route path="/dieu-khoan-dich-vu" element={<DieuKhoanDichVu />} />
            <Route
              path="/chinh-sach-thanh-toan"
              element={<ChinhSachThanhToan />}
            />
            <Route path="/lien-he" element={<LienHe />} />

            <Route path="/thong-tin" element={<Info />} />

            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route path="/admin" element={<AdminNav />}>
            <Route index element={<ThongKe />} />
            <Route path="quan-ly-san-pham" element={<QuanLySanPham />} />
            <Route path="quan-ly-don-hang" element={<DonHang />} />
            <Route path="quan-ly-danh-muc" element={<QuanLyDanhMuc />} />
            <Route path="quan-ly-tai-khoan" element={<QuanLyTaiKhoan />} />
            <Route path="them-san-pham" element={<ThemSanPham />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
