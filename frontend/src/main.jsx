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
import Admin from "./pages/Admin";
import Sale from "./pages/Sale";
import { ContextProvider } from "./Context";
import ProductDetail from "./components/ProductDetail";
import Other from "./pages/Other";
import BanChay from "./pages/BanChay";
import AoNam from "./components/ProductNam/AoNam";
import QuanNam from "./components/ProductNam/QuanNam";
import AoNu from "./components/ProductNu/AoNu";
import QuanNu from "./components/ProductNu/QuanNu";
import Vay from "./components/ProductNu/Vay";

import AOS from "aos";
import "aos/dist/aos.css";

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

            <Route path="/do-nam/ao-nam" element={<AoNam />} />
            <Route path="/do-nam/quan-nam" element={<QuanNam />} />
            <Route path="/do-nu/ao-nu" element={<AoNu />} />
            <Route path="/do-nu/quan-nu" element={<QuanNu />} />
            <Route path="/do-nu/vay" element={<Vay />} />

            <Route path="/products/chi-tiet/:id" element={<ProductDetail />} />
          </Route>

          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
