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
import { Input } from "../components/ui/input";
import logo_footer from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#124C90] text-white">
      <div className="lg:container  mx-auto">
        {/* liên hệ */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b p-6 border-gray-500">
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="font-bold text-base md:text-xl">
              Đăng ký nhận thông tin
            </h1>
            <form className="relative flex items-center gap-2" action="">
              <Mail className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full pl-10 text-gray-500 bg-white"
              />
              <Button
                variant="ghost"
                className="bg-black text-lg px-6 py-3 rounded-full hover:opacity-85"
              >
                Đăng ký
              </Button>
            </form>
          </div>
          <div className="mt-4 flex items-center gap-x-3">
            <Button
              size="icon"
              variant="outline"
              className="border-white hover:opacity-80"
            >
              <a href="https://facebook.com" target="_blank">
                <Facebook className="size-5 text-white" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-white hover:opacity-80"
            >
              <a href="https://instagram.com" target="_blank">
                <Instagram className="size-5 text-white" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-white hover:opacity-80"
            >
              <a href="https://twitter.com" target="_blank">
                <Twitter className="size-5 text-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="lg:container p-10 mx-auto lg:p-20">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-10">
          <div className="flex flex-col gap-y-4 w-full">
            <Link to="/" className="flex items-center mb-2">
              <img
                src={logo_footer}
                alt="Logo"
                className="size-25 object-cover"
              />
            </Link>
            <div className="flex items-center gap-x-3">
              <MapPin className="size-5 mt-1 flex-shrink-0" />
              <p className="font-medium text-white/80 text-md">
                Ấp Trà Ốp, Xã Tân An, Huyện Càng Long, Tỉnh Trà Vinh
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <Phone className="size-5 flex-shrink-0" />
              <p className="font-medium text-white/80 text-md">
                Hotline: 0123456789
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <Mail className="size-5 flex-shrink-0" />
              <p className="font-medium text-white/80 text-md">
                contact@modashop.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-lg lg:text-2xl font-semibold mb-2">Về MODA</h3>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/gioi-thieu"
            >
              Giới thiệu
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/"
            >
              Trang chủ
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/do-nam"
            >
              Đồ nam
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/do-nu"
            >
              Đồ nữ
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/phu-kien"
            >
              Phụ kiện
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-lg lg:text-2xl font-semibold mb-2 text-white">
              Hỗ trợ khách hàng
            </h3>
            <Link
              to="/sale"
              className="font-medium text-white/80 text-md hover:underline"
            >
              Sản phẩm khuyến mại
            </Link>
            <Link
              to="/san-pham-ban-chay"
              className="font-medium text-white/80 text-md hover:underline"
            >
              Sản phẩm nổi bậc
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-lg lg:text-2xl font-semibold mb-2">
              Chính sách
            </h3>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/chinh-sach-bao-hanh"
            >
              Bảo hành & Đổi trả
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/chinh-sach-bao-mat"
            >
              Bảo mật thông tin
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/dieu-khoan-dich-vu"
            >
              Điều khoản dịch vụ
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/chinh-sach-thanh-toan"
            >
              Chính sách thanh toán
            </Link>
            <Link
              className="font-medium text-white/80 text-md hover:underline"
              to="/lien-he"
            >
              Liên hệ
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm">
          <p>&copy; 2025 MODA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
