import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const ChinhSachThanhToan = () => {
  return (
    <div className="w-full lg:container mx-auto h-full p-3">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to="/dieu-khoan-dich-vu" className="hover:underline">
          Chính sách thanh toán
        </Link>
      </div>

      <div className="mt-8 w-full lg:w-4xl mx-auto p-6 lg:p-8 bg-white inset-ring-2 rounded-lg my-8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Chính sách thanh toán
        </h1>

        <h4 className="mt-4 text-xl font-medium">
          1. COD: Thanh toán khi nhận hàng
        </h4>
        <p className="text-base ml-4 font-light space-y-1">
          - Nhận hàng và thành toán thông qua đơn vị giao hàng.
        </p>

        <h4 className="text-xl font-medium">2. Chuyển khoản ngân hàng</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Thanh toán qua TÀI KHOẢN NGÂN HÀNG Khi chuyển khoản, quý khách vui
            lòng nhập nội dung chuyển khoản: Tên khách hàng - Số điện thoại
          </p>
          <p>- Tên tài khoản: HUYNH CHI DAT</p>
          <p>- Số tài khoản: 0337937146</p>
          <p>- Ngân hàng Quân đội(MB Bank)</p>
          <p>- Nhận hàng thông qua đơn vị giao hàng.</p>
        </div>
      </div>
    </div>
  );
};

export default ChinhSachThanhToan;
