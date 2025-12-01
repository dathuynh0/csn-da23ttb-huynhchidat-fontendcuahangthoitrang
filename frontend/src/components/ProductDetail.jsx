import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import ProDuctItem from "./ProductItems";
import {
  aoNam,
  quanNam,
  bestseller,
  aoNu,
  quanNu,
  dam,
  phukien,
} from "../lib/data";

const ProductDetail = () => {
  const { handleAddToCart } = useOutletContext();

  const allProducts = [
    ...aoNam,
    ...quanNam,
    ...aoNu,
    ...quanNu,
    ...dam,
    ...bestseller,
    ...phukien,
  ];

  const nam = [...aoNam, ...quanNam];

  const nu = [...aoNu, ...quanNu, ...dam];

  //lay id product
  const { id } = useParams();

  // tim kiem san pham theo id
  const findProduct = allProducts.find((item) => item.id === id);
  // console.log(findProduct);

  const checknam = nam.find((item) => item.id === id);
  const checknu = nu.find((item) => item.id === id);
  const checkother = phukien.find((item) => item.id === id);

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedWarranty, setIsCheckedWarranty] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentSize, setCurrentSize] = useState("");

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % findProduct.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + findProduct.images.length) % findProduct.images.length
    );
  };

  const itemsPerPage = 8;

  const getProducts = () => {
    if (checknam) {
      const randomStartIndex = Math.ceil(
        Math.random() * (nam.length - itemsPerPage)
      );
      const endIndex = randomStartIndex + itemsPerPage;
      return nam.slice(randomStartIndex, endIndex);
    } else if (checknu) {
      const randomStartIndex = Math.ceil(
        Math.random() * (nu.length - itemsPerPage)
      );
      const endIndex = randomStartIndex + itemsPerPage;
      return nu.slice(randomStartIndex, endIndex);
    } else if (checkother) {
      const randomStartIndex = Math.ceil(
        Math.random() * (phukien.length - itemsPerPage)
      );
      const endIndex = randomStartIndex + itemsPerPage;
      return phukien.slice(randomStartIndex, endIndex);
    } else {
      const randomStartIndex = Math.ceil(
        Math.random() * (bestseller.length - itemsPerPage)
      );
      const endIndex = randomStartIndex + itemsPerPage;
      return bestseller.slice(randomStartIndex, endIndex);
    }
  };

  return (
    <>
      <section className="w-full container mx-auto mb-8">
        <div className="text-xs md:text-base mt-6 m-2 text-gray-600">
          <Link className="hover:underline" to="/">
            Trang chủ
          </Link>
          <ChevronRight className="inline-block mx-2 h-4 w-4" />
          <Link
            className="hover:underline"
            to={`${
              checknam
                ? "/do-nam"
                : checknu
                ? "/do-nu"
                : checkother
                ? "/phu-kien"
                : "/san-pham-ban-chay"
            }`}
          >
            {checknam
              ? "Sản phẩm nam"
              : checknu
              ? "Sản phẩm nữ"
              : checkother
              ? "Phụ kiện"
              : "Sản phẩm bán chạy"}
          </Link>
          <ChevronRight className="inline-block mx-2 h-4 w-4" />
          <Link
            className="hover:underline"
            to={"/products/chi-tiet/" + findProduct.id}
          >
            {findProduct.name}
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
          <div className="w-[90%] mx-auto lg:w-[40%] relative">
            <div className="group aspect-square overflow-hidden bg-gray-100 shadow-lg">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevImage}
                className="absolute top-[45%] left-2 hover:bg-black hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft />
              </Button>
              <img
                className="w-full h-full px-8 object-cover transition duration-300"
                src={findProduct.images[currentImage]}
                alt=""
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextImage}
                className="absolute top-[45%] right-2 hover:bg-black hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight />
              </Button>
            </div>

            {/* image nho */}
            <ul className="group flex items-center gap-4 mt-4 w-full overflow-x-scroll scroll-smooth">
              {findProduct.images.map((image, index) => (
                <li key={index} className="flex-shrink-0">
                  <img
                    className={`w-20 h-20 rounded-lg border-2 object-cover cursor-pointer transition-transform duration-200  ${
                      currentImage === index ? "border" : "border-none"
                    }`}
                    onClick={() => setCurrentImage(index)}
                    src={image}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[90%] lg:w-[40%] mx-auto flex flex-col items-start">
            <h3 className="text-2xl lg:text-5xl font-light leading-snug mb-4">
              {findProduct.name}
            </h3>
            <div className="flex items-center gap-4 mb-6">
              {findProduct.priceSale ? (
                <div>
                  <p className="text-lg lg:text-2xl font-light line-through ">
                    {findProduct.price} VND
                  </p>
                  <p className="text-lg lg:text-2xl text-red-600 font-bold">
                    {" "}
                    {findProduct.priceSale} VND
                  </p>
                </div>
              ) : (
                <span className="text-lg lg:text-2xl font-bold text-red-600">
                  {findProduct.price} VND
                </span>
              )}
              <span className="text-sm border border-gray-300 text-gray-600 px-3 py-1 rounded-full">
                Miễn Phí Ship
              </span>
            </div>

            {/* size */}
            {findProduct.sizes && (
              <div className="relative mt-4 flex items-center">
                {findProduct.sizes.map((size, index) => (
                  <div key={index} className="">
                    <Button
                      onClick={() => setCurrentSize(size.size)}
                      className={`mr-2 hover:bg-black hover:text-white cursor-pointer mb-2 ${
                        currentSize === size.size ? "bg-black text-white" : ""
                      }`}
                      variant="outline"
                      size="icon"
                      disabled={size.inventory < 1}
                    >
                      {size.size}
                    </Button>
                    {currentSize === size.size && (
                      <span className="absolute left-0 -bottom-6 w-xs font-light text-md lg:text-xl text-gray-600">
                        Số lượng còn: {size.inventory}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <Button
              onClick={() => handleAddToCart(findProduct)}
              className="w-full py-6 mt-10 bg-black text-white cursor-pointer hover:opacity-90 text-sm md:text-lg"
            >
              Thêm vào giỏ hàng
            </Button>

            {/* thông tin sản phẩm */}
            <div className="mt-8 w-full cursor-pointer">
              <div
                onClick={() => setIsChecked(!isChecked)}
                className="flex items-center justify-between border-b"
              >
                <Button className="text-lg cursor-pointer">
                  Thông tin sản phẩm
                </Button>
                <ChevronDown
                  className={`h-5 w-5 mr-2 ${isChecked ? "rotate-180" : ""}`}
                />
              </div>
              {isChecked && (
                <div className="mt-4 text-base font-light">
                  <p>{findProduct.name}</p>
                  <p>1. Kiểu sản phẩm: Áo Thun</p>
                  <p>2. Ưu điểm:</p>
                  <p>
                    -Thoáng mát, nhanh khô: Chất liệu Bird Eye Mesh dệt lưới với
                    các lỗ nhỏ li ti giúp thoáng khí và nhanh khô.
                  </p>
                  <p>
                    -Bền bỉ, ít nhăn: Sợi 100% Polyester có độ bền cao, chống
                    mài mòn và ít nhăn, thách thức các loại máy giặt.
                  </p>
                  <p>
                    -Thiết kế tối giản: Dễ dàng phối đồ với nhiều kiểu áo khác
                    nhau, tạo nên phong cách đa dạng.
                  </p>
                  <p>
                    3. Chất liệu: Polyester Bird Eye Mesh Fabric, 100%
                    Polyester.
                  </p>
                </div>
              )}
            </div>

            {/* bao hanh */}
            <div className="mt-8 w-full cursor-pointer">
              <div
                onClick={() => setIsCheckedWarranty(!isCheckedWarranty)}
                className="flex items-center justify-between border-b"
              >
                <Button className="text-lg cursor-pointer">
                  Chi tiết bảo hành
                </Button>
                <ChevronDown
                  className={`h-5 w-5 mr-2 ${
                    isCheckedWarranty ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isCheckedWarranty && (
                <div className="mt-4 text-base font-light">
                  <h3 className="text-xl">1. Thời gian bảo hành:</h3>
                  <div className="ml-3">
                    <p>
                      - Tất cả sản phẩm được bảo hành trong vòng 12 tháng kể từ
                      ngày mua hàng.
                    </p>
                    <p>
                      - Thời gian bảo hành có thể khác nhau tùy theo loại sản
                      phẩm và nhà sản xuất.
                    </p>
                  </div>
                  <h3 className="text-xl">2. Điều kiện bảo hành:</h3>
                  <div className="ml-3">
                    <p>
                      Sản phẩm sẽ được bảo hành miễn phí nếu đáp ứng các điều
                      kiện sau:
                    </p>

                    <p>- Sản phẩm bị lỗi kỹ thuật do nhà sản xuất.</p>
                    <p>- Còn trong thời hạn bảo hành.</p>
                    <p>- Có đầy đủ hóa đơn mua hàng hoặc phiếu bảo hành.</p>
                    <p>
                      - Sản phẩm chưa bị can thiệp, sửa chữa bởi bên thứ ba
                      không được ủy quyền.
                    </p>
                  </div>
                  <h3 className="text-xl">
                    3. Những trường hợp không được bảo hành:
                  </h3>
                  <div className="ml-3">
                    <p>
                      - Sản phẩm bị hư hỏng do sử dụng sai cách, rơi vỡ, va đập,
                      cháy nổ, vào nước…
                    </p>
                    <p>
                      - Sản phẩm bị thay đổi cấu trúc, sửa chữa không đúng quy
                      trình.
                    </p>
                    <p>- Hết thời hạn bảo hành.</p>
                    <p>- Không có hóa đơn hoặc phiếu bảo hành hợp lệ.</p>
                    <h3 className="text-xl">4. Hình thức bảo hành:</h3>
                    <p>- Sửa chữa hoặc thay thế linh kiện miễn phí.</p>
                    <p>
                      - Đổi sản phẩm mới nếu không thể sửa chữa (tùy theo chính
                      sách từng sản phẩm).
                    </p>
                    <p>
                      - Thời gian xử lý bảo hành: từ 3–7 ngày làm việc tùy mức
                      độ hư hỏng.
                    </p>
                  </div>
                  <h3 className="text-xl">5. Hướng dẫn liên hệ bảo hành:</h3>
                  <div className="ml-3">
                    <p>- Gọi hotline: 1900 1900</p>
                    <p>- Email: baohanh@moda.com</p>
                    <p>
                      - Địa chỉ trung tâm bảo hành: Ấp Trà Ốp, xã Tân An, huyện
                      Càng Long, tỉnh Trà Vinh
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* sản phẩm liên quan */}
        <div>
          <h2 className="m-2 text-3xl font-light mt-6 mb-6">
            Sản phẩm liên quan
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 m-2">
            {getProducts().map((item) => {
              return (
                <li key={item.id}>
                  <ProDuctItem
                    {...item}
                    product={item}
                    onAddToCart={() => handleAddToCart(item)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
