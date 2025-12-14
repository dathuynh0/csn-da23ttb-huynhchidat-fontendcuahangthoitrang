import { ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import CartCheckout from "./CartCheckout";
import { Context } from "../../Context";

const Checkout = () => {
  const { cartItems, formattedTotal } = useContext(Context);

  const [cod, setCod] = useState(false);
  const [online, setOnline] = useState(false);
  const [creditCard, setCreditCard] = useState(false);

  const shippingPrice = 35000;

  const indexedPrice = parseInt(formattedTotal.replace(/\./g, ""));
  const finalTotal = indexedPrice + shippingPrice;

  return (
    <div className="w-full lg:container mx-auto">
      {/* navbar */}
      <div>
        <Link to="/" className="text-xs lg:text-base hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to="/checkout" className="text-xs lg:text-base hover:underline">
          Thanh toán
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 my-10 rounded-lg shadow-lg">
        {/* form điền */}
        <div className="p-6 col-span-6 border-r border-gray-300">
          {/* heading */}
          <div>
            <h2 className="text-2xl font-semibold mb-1">Thanh toán</h2>
            <span className="text-base font-light">
              Vui lòng điền đầy đủ thông tin để hoàn tất đơn hàng
            </span>
          </div>

          {/* main */}
          <div className="h-full">
            {/* form thông tin cá nhân */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Thông tin giao hàng
              </h3>
              <form className="">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block mb-1" htmlFor="firstName">
                      Họ
                    </label>
                    <Input
                      id="firstName"
                      className="inline-block w-full py-5 border border-gray-300"
                      placeholder="Nguyễn"
                    />
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="lastName">
                      Tên
                    </label>
                    <Input
                      id="lastName"
                      className="inline-block w-full py-5 border border-gray-300"
                      placeholder="Văn A"
                    />
                  </div>
                </div>

                {/* address */}
                <label className="inline-block mt-2 mb-1" htmlFor="address">
                  Địa chỉ
                </label>
                <Input
                  id="address"
                  className="inline-block w-full py-5 border border-gray-300"
                  placeholder="Số nhà, tên đường"
                />

                {/* tỉnh */}
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div>
                    <label className="block mb-1" htmlFor="tinh">
                      Tỉnh/Thành phố
                    </label>
                    <select
                      id="tinh"
                      className="inline-block w-full py-2 border border-gray-300"
                    >
                      <option>Tỉnh/Thành phố</option>
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                    </select>
                  </div>
                  {/* mã bưu chính */}
                  <div className="">
                    <label className="block mb-1" htmlFor="postalCode">
                      Mã bưu chính
                    </label>
                    <Input
                      id="postalCode"
                      className="inline-block w-full py-5 border border-gray-300"
                      placeholder="100000"
                    />
                  </div>
                </div>

                {/* phone */}
                <label className="inline-block mt-2 mb-1" htmlFor="phone">
                  Số điện thoại
                </label>
                <div className="relative w-full">
                  <Input
                    id="phone"
                    className="inline-block w-[50%] py-5 border border-gray-300 pl-10"
                    placeholder="0912345678"
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                </div>

                {/* phương thức thanh toán */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Phương thức thanh toán
                  </h3>

                  <div className="border p-4 rounded-lg">
                    {/* cod */}
                    <div
                      className="space-y-3 flex items-center"
                      onClick={() => {
                        setCod(true);
                        setOnline(false);
                        setCreditCard(false);
                      }}
                    >
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        className="mr-2 cursor-pointer"
                      />
                      <div>
                        <label
                          htmlFor="cod"
                          className="cursor-pointer font-medium"
                        >
                          Thanh toán khi nhận hàng (COD)
                        </label>
                        <p className="text-sm text-gray-600 font-light">
                          Thanh toán bằng tiền mặt khi giao hàng tận nơi.
                        </p>
                      </div>
                    </div>

                    {/* online */}
                    <div
                      className="space-y-3 mt-3 flex items-center"
                      onClick={() => {
                        setCod(false);
                        setOnline(true);
                        setCreditCard(false);
                      }}
                    >
                      <input
                        type="radio"
                        id="online"
                        name="paymentMethod"
                        className="mr-2 cursor-pointer"
                      />
                      <div>
                        <label
                          className="cursor-pointer font-medium"
                          htmlFor="online"
                        >
                          Ví điện tử ZaloPay / Momo
                        </label>
                        <p className="text-sm text-gray-600 font-light">
                          Quét mã QR để thanh toán nhanh chóng.
                        </p>
                      </div>
                    </div>

                    {online && (
                      <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        <span>Quét mã QR để thanh toán</span>
                        <div className="mt-2 w-32 h-32 bg-white border border-gray-300 flex items-center justify-center">
                          QR
                        </div>
                      </div>
                    )}

                    {/* thẻ tín dụng */}
                    <div
                      className="space-y-3 mt-3"
                      onClick={() => {
                        setCod(false);
                        setOnline(false);
                        setCreditCard(true);
                      }}
                    >
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        className="mr-2 cursor-pointer"
                      />
                      <label
                        className="cursor-pointer font-medium"
                        htmlFor="creditCard"
                      >
                        Thẻ tín dụng/ghi nợ (Visa, Master, JCB)
                      </label>
                    </div>
                    {creditCard && (
                      <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        <Input
                          className="inline-block w-full py-5 mb-2"
                          placeholder="Số thẻ"
                        />
                        <Input
                          className="inline-block w-full py-5 mb-2"
                          placeholder="Tên trên thẻ"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            className="inline-block w-full py-5"
                            placeholder="MM/YY"
                          />
                          <Input
                            className="inline-block w-full py-5"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="ghost"
                  className="mt-6 w-full p-4 bg-black text-white hover:opacity-85 cursor-pointer"
                >
                  Đặt hàng
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* đơn hàng */}
        <div className="h-full mt-4 col-span-4 p-4">
          <h2 className="text-xl font-semibold">Đơn hàng của bạn</h2>
          <div className="mt-6">
            {/* CartCheckout component */}
            <CartCheckout cartItems={cartItems} />
          </div>
          <hr className=" text-gray-300" />
          {/* tính */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-lg">Tạm tính:</p>
              <span className="font-bold">{formattedTotal}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600 text-lg">Phí vận chuyển:</p>
              <span className="font-medium">
                {shippingPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                  currencyDisplay: "code",
                })}
              </span>
            </div>
          </div>
          <hr className="mt-6 text-gray-300" />

          {/* tổng cộng */}
          <div className="mt-6 pb-8 flex items-center justify-between">
            <p className="font-bold text-lg">Tổng cộng:</p>
            <span className="font-extrabold text-lg">
              {finalTotal.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
                currencyDisplay: "code",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
