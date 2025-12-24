import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const GioiThieu = () => {
  return (
    <>
      <div className="w-full  lg:container mx-auto h-full p-3">
        <div className="flex items-center text-xs lg:text-base">
          <Link to="/" className="hover:underline">
            Trang chủ
          </Link>
          <ChevronRight className="inline-block mx-2 h-4 w-4" />
          <Link to="/gioi-thieu" className="hover:underline">
            Giới thiệu
          </Link>
        </div>

        {/* content */}
        <div className="w-full lg:container mx-auto p-6 lg:p-8 bg-white rounded-lg my-8">
          <p className="text-base font-light">
            Chào mừng bạn đến với MODA – nơi hội tụ phong cách và sự tinh tế.
            Chúng tôi tự hào mang đến cho khách hàng những sản phẩm thời trang
            chất lượng cao, cập nhật xu hướng mới nhất, phù hợp với nhiều phong
            cách từ năng động, trẻ trung đến sang trọng, thanh lịch.
          </p>
          <h6 className="text-xl font-medium mt-6">Sản phẩm</h6>
          <p>- Quần áo nam, nữ đa dạng mẫu mã</p>
          <p>- Phụ kiện thời trang: túi xách, giày dép, thắt lưng</p>
          <h6 className="text-xl font-medium mt-6">Giá trị của chúng tôi</h6>
          <p>
            - <strong>Chất lượng</strong>: Sản phẩm được chọn lọc kỹ lưỡng, chất
            liệu bền đẹp.
          </p>
          <p>
            - <strong>Phong cách</strong>: Luôn cập nhật xu hướng thời trang mới
            nhất.
          </p>
          <p>
            - <strong>Khách hàng là trung tâm</strong>: Dịch vụ tận tâm, mang
            lại trải nghiệm mua sắm thoải mái.
          </p>
          <h6 className="text-xl font-medium mt-6">Địa chỉ liên hệ</h6>
          <p>- Địa chỉ: Ấp Trà Ốp, xã Tân An, tỉnh Vĩnh Long</p>
          <p>- Hotline: 0337937146</p>
          <p>- Email: modashop@gmail.com</p>
          <p>Mã số thuế: 0302966294</p>
        </div>
      </div>
      ;
    </>
  );
};

export default GioiThieu;
