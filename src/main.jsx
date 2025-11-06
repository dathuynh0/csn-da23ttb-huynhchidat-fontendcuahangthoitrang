import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DoNam from "./pages/DoNam";
import DoNu from "./pages/DoNu";
import PhuKien from "./pages/PhuKien";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Signup from "./components/NavBar/Signup";
import Admin from "./pages/Admin";
import Sale from "./pages/Sale";
import { ContextProvider } from "./Context";
import Ao from "./components/ProductNam/Ao";
import Quan from "./components/ProductNam/Quan";
import ProductDetail from "./components/ProductDetail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/do-nam" element={<DoNam />} />
            <Route path="/do-nu" element={<DoNu />} />
            <Route path="/phu-kien" element={<PhuKien />} />

            <Route path="/do-nam/ao-nam" element={<Ao />} />
            <Route path="/do-nam/quan-nam" element={<Quan />} />
            <Route path="/products/chi-tiet/:id" element={<ProductDetail />} />
          </Route>

          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
