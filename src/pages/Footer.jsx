import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-[80%] text-gray-800 p-8 md:p-12">
      <div className="">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-10">
          <div className="flex flex-col gap-y-4 w-full md:w-1/3 lg:w-2/5">
            <Link to="/" className="flex items-center gap-x-3 mb-2">
              <p className="text-3xl font-extrabold bg-gradient-to-b from-white/20 to-black inline-block text-transparent bg-clip-text">
                M O D A
              </p>
            </Link>
            <div className="flex items-start gap-x-3">
              <MapPin className="size-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
                Ấp Trà Ốp, Xã Tân An, Huyện Càng Long, Tỉnh Trà Vinh
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <Phone className="size-5 flex-shrink-0" />
              <p className="text-sm">Hotline: 0123456789</p>
            </div>
            <div className="flex items-center gap-x-3">
              <Mail className="size-5 flex-shrink-0" />
              <p className="text-sm">contact@datfashion.com</p>
            </div>

            <div className="mt-4 flex items-center gap-x-3">
              <Button
                size="icon"
                variant="outline"
                className="bg-blue-600 border-white hover:opacity-80"
              >
                <a href="https://facebook.com" target="_blank">
                  <Facebook className="size-5 text-white" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-pink-600 border-white hover:opacity-80"
              >
                <a href="https://instagram.com" target="_blank">
                  <Instagram className="size-5 text-pink-200" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-sky-500 border-white hover:opacity-80"
              >
                <a href="https://twitter.com" target="_blank">
                  <Twitter className="size-5 text-white" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-semibold mb-2">Về MODA</h3>
            <Link
              className="hover:text-blue-600 hover:underline"
              to="/gioithieu"
            >
              Giới thiệu
            </Link>
            <Link className="hover:text-blue-600 hover:underline" to="/">
              Trang chủ
            </Link>
            <Link className="hover:text-blue-600 hover:underline" to="/do-nam">
              Đồ nam
            </Link>
            <Link className="hover:text-blue-600 hover:underline" to="/do-nu">
              Đồ nữ
            </Link>
            <Link
              className="hover:text-blue-600 hover:underline"
              to="/phu-kien"
            >
              Phụ kiện
            </Link>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-semibold mb-2">Chính sách</h3>
            <Link
              className="hover:text-blue-600 hover:underline"
              to="/chinh-sach-bao-hanh"
            >
              Bảo hành & Đổi trả
            </Link>
            <Link
              className="hover:text-blue-600 hover:underline"
              to="/chinh-sach-bao-mat"
            >
              Bảo mật thông tin
            </Link>
            <Link
              className="hover:text-blue-600 hover:underline"
              to="/dieu-khoan-dich-vu"
            >
              Điều khoản dịch vụ
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 MODA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
