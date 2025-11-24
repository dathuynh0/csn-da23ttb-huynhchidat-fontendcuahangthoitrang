import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const BaoHanh = () => {
  return (
    <div className="w-full lg:container mx-auto h-full p-3">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to="/chinh-sach-bao-hanh" className="hover:underline">
          Chính sách bảo hành & đổi trả
        </Link>
      </div>

      <div className="mt-8 w-full lg:w-4xl mx-auto p-6 lg:p-8 bg-white inset-ring-2 rounded-lg my-8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Chính sách bảo hành và đổi trả
        </h1>
        <h4 className="mt-3 text-xl font-medium">
          1. Thời gian áp dụng đổi trả
        </h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Thời gian: Trong vòng 07 ngày kể từ ngày quý khách nhận được hàng.
          </p>
          <p>
            - Áp dụng: Cho tất cả các đơn hàng mua trực tiếp tại cửa hàng và mua
            online tại website.
          </p>
        </div>
        <h4 className="text-xl font-medium">2. Điều kiện đổi trả</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>- Sản phẩm còn nguyên tem mác, bao bì, nhãn mác thương hiệu.</p>
          <p>
            - Sản phẩm chưa qua sử dụng, chưa giặt ủi, không có mùi lạ (nước
            hoa, cơ thể...) và không bị dơ bẩn, hư hỏng.
          </p>
          <p>
            - Khách hàng có hóa đơn mua hàng hoặc thông tin đơn hàng (SĐT, mã
            đơn hàng) để xác thực.
          </p>
        </div>
        <h4 className="text-xl font-medium">
          3. Các trường hợp KHÔNG áp dụng đổi trả
        </h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Sản phẩm nằm trong chương trình "Sale xả kho", "Giảm giá sốc" hoặc
            quà tặng kèm.
          </p>
          <p>
            - Sản phẩm thuộc nhóm hàng phụ kiện, đồ lót, đồ bơi (vì lý do vệ
            sinh an toàn).
          </p>
          <p>- Sản phẩm quá thời hạn đổi trả quy định.</p>
          <p>
            - Sản phẩm bị hư hỏng do lỗi sử dụng của khách hàng (ví dụ: giặt sai
            cách, rách do vật nhọn...).
          </p>
        </div>
        <h4 className="text-xl font-medium">
          5. Phương thức hoàn tiền (Đối với trường hợp trả hàng)
        </h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Chuyển khoản: Tiền sẽ được hoàn vào tài khoản ngân hàng của quý
            khách trong vòng 3-5 ngày làm việc sau khi shop nhận lại hàng và
            kiểm tra đạt chuẩn.
          </p>
          <p>
            - Voucher/Điểm tích lũy: Hoàn tiền dưới dạng mã giảm giá để mua hàng
            lần sau (tùy chính sách cửa hàng).
          </p>
        </div>
        <h4 className="text-xl font-medium">6. Quy trình đổi trả</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Bước 1: Liên hệ với bộ phận CSKH qua Hotline hoặc nhắn tin qua
            Fanpage/Website để thông báo yêu cầu.
          </p>
          <p>
            - Bước 2: Đóng gói sản phẩm cẩn thận (kèm quà tặng/phụ kiện nếu có).
          </p>
          <p>
            - Bước 3: Gửi hàng về địa chỉ: Ấp Trà Ốp, xã Tân An, huyện Càng
            Long, tỉnh Trà Vinh.
          </p>
          <p>
            - Bước 4: MODA nhận hàng, kiểm tra và tiến hành đổi mới hoặc hoàn
            tiền cho quý khách.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaoHanh;
