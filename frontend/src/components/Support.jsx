import {
  CreditCard,
  MessageSquare,
  PackageOpen,
  RotateCcw,
} from "lucide-react";

const Support = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white text-black grid grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:container mx-auto py-12 p-2 rounded-lg"
    >
      <div className="flex flex-col items-center mt-4 lg:mt-0">
        <span className="inline-block p-2 text-black bg-white rounded-full">
          <MessageSquare className="size-5 lg:size-6" />
        </span>
        <h4 className="font-medium text-xl lg:text-2xl mt-4 text-center">
          Hỗ trợ 24/7
        </h4>
        <p className="text-md font-light mt-5 text-center w-full">
          Hotline hỗ trợ: 0337937146
        </p>
      </div>

      <div className="flex flex-col items-center mt-4 lg:mt-0">
        <span className="inline-block p-2 text-black bg-white rounded-full">
          <PackageOpen className="size-5 lg:size-6" />
        </span>
        <h4 className="font-medium text-xl lg:text-2xl mt-4 text-center">
          Giao hàng toàn quốc
        </h4>
        <p className="text-md font-light mt-5 text-center w-full">
          Thời gian giao hàng nhanh chóng. Từ 3-5 ngày làm việc
        </p>
      </div>

      <div className="flex flex-col items-center mt-4 lg:mt-0">
        <span className="inline-block p-2 text-black bg-white rounded-full">
          <CreditCard className="size-5 lg:size-6" />
        </span>
        <h4 className="font-medium text-xl lg:text-2xl mt-4 text-center">
          Thanh toán đa dạng
        </h4>
        <p className="text-md font-light mt-5 text-center w-full">
          Chấp nhận thanh toán tiền mặt. Chuyển khoản, QR code
        </p>
      </div>

      <div className="flex flex-col items-center mt-4 lg:mt-0">
        <span className="inline-block p-2 text-black bg-white rounded-full">
          <RotateCcw className="size-5 lg:size-6" />
        </span>
        <h4 className="font-medium text-xl lg:text-2xl mt-4 text-center">
          Đổi trả hàng dễ dàng
        </h4>
        <p className="text-md font-light mt-5 text-center w-full">
          Thời gian trả hàng lên đến 30 ngày
        </p>
      </div>
    </section>
  );
};

export default Support;
