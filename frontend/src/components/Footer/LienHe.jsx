import {
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

const LienHe = () => {
  return (
    <div className="w-full lg:container mx-auto h-full p-3">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to="/lien-he" className="hover:underline">
          Liên hệ
        </Link>
      </div>

      <div className="mt-8 w-full lg:container mx-auto p-6 lg:p-8 bg-white rounded-lg my-8">
        <h1 className="text-2xl lg:text-4xl font-bold">Liên hệ</h1>

        <h4 className="mt-4 text-xl font-medium">
          1. Thông tin liên hệ trực tiếp
        </h4>
        <div className="mt-3 text-base ml-4 font-light space-y-1">
          <p className="flex items-center gap-2">
            <MapPin className="size-5" /> Ấp Trà Ốp, xã Tân An, huyện Càng Long,
            tỉnh Trà Vinh
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-5" />
            Hotline / Zalo: 0337937146
          </p>
          <p className="flex items-center gap-2">
            <Mail className="size-5" /> Email: hcdattv@gmail.com
          </p>
        </div>

        <h4 className="mt-4 text-xl font-medium">
          2. Kết nối với chúng tôi trên Mạng xã hội
        </h4>
        <div className="w-full mt-4 flex items-center gap-4 ml-4 font-light space-y-1">
          <Button variant="ghost" size="lg" className="bg-blue-600 text-white">
            <Link
              className="flex items-center gap-2"
              to="https://facebook.com"
              target="_blank"
            >
              <Facebook />
              Facebook
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="bg-pink-600 text-white">
            <Link
              className="flex items-center gap-2"
              to="https://instagram.com"
              target="_blank"
            >
              <Instagram />
              Intagram
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
