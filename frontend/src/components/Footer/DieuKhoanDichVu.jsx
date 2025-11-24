import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const DieuKhoanDichVu = () => {
  return (
    <div className="w-full lg:container mx-auto h-full p-3">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to="/dieu-khoan-dich-vu" className="hover:underline">
          Điều khoản dịch vụ
        </Link>
      </div>

      <div className="mt-8 w-full lg:w-4xl mx-auto p-6 lg:p-8 bg-white inset-ring-2 rounded-lg my-8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          ĐIỀU KHOẢN VÀ DỊCH VỤ
        </h1>
        <h2 className="mt-3 text-xl font-light">
          Chào mừng quý khách đến với website của MODA. Khi quý khách truy cập
          vào trang web của chúng tôi có nghĩa là quý khách đồng ý với các điều
          khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ
          bất kỳ phần nào trong Quy định và Điều kiện sử dụng này vào bất cứ lúc
          nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà
          không cần thông báo trước.
        </h2>

        <h4 className="text-xl font-medium">1. Hướng dẫn sử dụng website</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Quý khách phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát
            của cha mẹ hay người giám hộ hợp pháp.
          </p>
          <p>
            - Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với mục đích
            thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu không có sự
            cho phép bằng văn bản của chúng tôi.
          </p>
          <p>
            - Quý khách phải cung cấp thông tin xác thực về bản thân (Tên, số
            điện thoại, địa chỉ) khi đăng ký hoặc mua hàng để đảm bảo quá trình
            giao nhận diễn ra thuận lợi.
          </p>
        </div>
        <h4 className="text-xl font-medium">
          2. Thông tin sản phẩm và Màu sắc
        </h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - MODA luôn cố gắng đăng tải hình ảnh và mô tả sản phẩm chính xác
            nhất. Tuy nhiên, do điều kiện ánh sáng và độ phân giải màn hình của
            từng thiết bị, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng
            3-5% so với hình ảnh hiển thị. Đây là điều không thể tránh khỏi
            trong kinh doanh thời trang online.
          </p>
          <p>
            - Trong trường hợp sản phẩm nhận được khác biệt quá lớn so với mô
            tả, quý khách vui lòng liên hệ bộ phận CSKH để được hỗ trợ đổi trả
            theo quy định.
          </p>
        </div>
        <h4 className="text-xl font-medium">3. Giá cả và Thanh toán</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Giá sản phẩm được niêm yết tại MODA là giá bán cuối cùng đã bao
            gồm thuế giá trị gia tăng (VAT). Giá của sản phẩm có thể thay đổi
            tùy thời điểm và chương trình khuyến mãi kèm theo.
          </p>
          <p>
            - Chúng tôi cam kết cung cấp thông tin giá cả chính xác nhất. Tuy
            nhiên, đôi lúc vẫn có sai sót xảy ra (ví dụ: lỗi hệ thống hiển thị
            giá 0đ hoặc giá sai lệch lớn). Trong trường hợp này, chúng tôi sẽ
            liên hệ hướng dẫn hoặc hủy đơn hàng đó.
          </p>
        </div>
        <h4 className="text-xl font-medium">4. Quyền sở hữu trí tuệ</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Mọi nội dung trên website bao gồm: Hình ảnh sản phẩm, video, bài
            viết, thiết kế, đồ họa, mã nguồn đều thuộc quyền sở hữu trí tuệ của
            MODA.
          </p>
          <p>
            - Nghiêm cấm mọi hành vi sao chép, sử dụng lại nội dung cho mục đích
            thương mại mà chưa được sự đồng ý của chúng tôi.
          </p>
        </div>
        <h4 className="text-xl font-medium">
          5. Quy định về Đặt hàng và Xác nhận đơn hàng
        </h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Khi quý khách đặt hàng, chúng tôi sẽ gửi email hoặc tin nhắn xác
            nhận. Hợp đồng mua bán chỉ được xác lập khi chúng tôi gửi thông báo
            xác nhận đã gửi hàng.
          </p>
          <p>
            - MODA có quyền từ chối hoặc hủy đơn hàng của quý khách vì bất kỳ lý
            do gì liên quan đến lỗi kỹ thuật, hệ thống, hoặc nguồn hàng không
            cung cấp đủ.
          </p>
        </div>
        <h4 className="text-xl font-medium">6. Giải quyết tranh chấp</h4>
        <div className="text-base ml-4 font-light space-y-1">
          <p>
            - Bất kỳ tranh cãi, khiếu nại hoặc tranh chấp phát sinh từ hoặc liên
            quan đến giao dịch tại MODA sẽ được giải quyết bằng hình thức thương
            lượng, hòa giải, trọng tài và/hoặc Tòa án theo Luật bảo vệ quyền lợi
            người tiêu dùng hiện hành của Việt Nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DieuKhoanDichVu;
