import { useState, useMemo, useCallback } from "react";
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
  const { id } = useParams();

  //tránh tính toán lại không cần thiết
  const { allProducts, nam, nu } = useMemo(
    () => ({
      allProducts: [
        ...aoNam,
        ...quanNam,
        ...aoNu,
        ...quanNu,
        ...dam,
        ...bestseller,
        ...phukien,
      ],
      nam: [...aoNam, ...quanNam],
      nu: [...aoNu, ...quanNu, ...dam],
    }),
    []
  );

  // tìm kiếm sản phẩm
  const findProduct = useMemo(
    () => allProducts.find((item) => item.id === id),
    [allProducts, id]
  );

  // category checks
  const { checknam, checknu, checkother, best } = useMemo(() => {
    const checknam = nam.find((item) => item.id === id);
    const checknu = nu.find((item) => item.id === id);
    const checkother = phukien.find((item) => item.id === id);
    const best = bestseller.find((item) => item.id === id);

    return { checknam, checknu, checkother, best };
  }, [nam, nu, phukien, bestseller, id]);

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedWarranty, setIsCheckedWarranty] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSize, setCurrentSize] = useState("");

  // Tối ưu image navigation với useCallback
  const handleNextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % findProduct.images.length);
  }, [findProduct?.images?.length]);

  const handlePrevImage = useCallback(() => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + findProduct.images.length) % findProduct.images.length
    );
  }, [findProduct?.images?.length]);

  // hàm lấy sản phẩm liên quan
  const relatedProducts = useMemo(() => {
    const itemsPerPage = 8;
    let sourceArray = [];

    if (checknam) sourceArray = nam;
    else if (checknu) sourceArray = nu;
    else if (checkother) sourceArray = phukien;
    else if (best) sourceArray = bestseller;
    // Lọc bỏ sản phẩm hiện tại
    const filtered = sourceArray.filter((item) => item.id !== id);

    if (filtered.length <= itemsPerPage) return filtered;

    const randomStartIndex = Math.ceil(
      Math.random() * (filtered.length - itemsPerPage)
    );
    return filtered.slice(randomStartIndex, randomStartIndex + itemsPerPage);
  }, [checknam, checknu, checkother, nam, nu, best, id]);

  // tính % giảm giá
  const finalPriceSale = findProduct.priceSale?.replace("/./g", "");
  const finalPrice = findProduct.price.replace("/./g", "");
  const finalPercent = Math.ceil(100 - (finalPriceSale / finalPrice) * 100);

  //nếu không tìm thấy sản phẩm
  if (!findProduct) {
    return (
      <div className="w-full container mx-auto py-20 text-center">
        <h2 className="text-2xl font-light">Không tìm thấy sản phẩm</h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full container mx-auto mb-8">
      <nav className="text-xs md:text-base m-2 text-gray-600">
        <Link className="hover:underline" to="/">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link
          className="hover:underline"
          to={
            checknam
              ? "/do-nam"
              : checknu
              ? "/do-nu"
              : checkother
              ? "/phu-kien"
              : best
              ? "/san-pham-ban-chay"
              : ""
          }
        >
          {checknam
            ? "Sản phẩm nam"
            : checknu
            ? "Sản phẩm nữ"
            : checkother
            ? "Phụ kiện"
            : best
            ? "Sản phẩm bán chạy"
            : ""}
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <span>{findProduct.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 py-8">
        {/* image lớn */}
        <div className="w-[90%] mx-auto lg:w-[40%] relative">
          <div className="group aspect-square overflow-hidden bg-gray-100 shadow-lg rounded-lg">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevImage}
              className="absolute top-[40%] left-2 z-10 hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft />
            </Button>
            <img
              className="w-full h-full px-8 object-cover transition duration-300"
              src={findProduct.images[currentImage]}
              alt={findProduct.name}
              loading="lazy"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextImage}
              className="absolute top-[40%] right-2 z-10 hover:bg-black hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Ảnh tiếp theo"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* hinh */}
          <ul className="flex items-center gap-4 mt-4 w-full overflow-x-auto scroll-smooth">
            {findProduct.priceSale ? (
              <div className="absolute top-2 left-2 h-10 w-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs lg:text-base text-white">
                  -{finalPercent}%
                </span>
              </div>
            ) : (
              ""
            )}
            {findProduct.images.map((image, index) => (
              <li key={index} className="flex-shrink-0">
                <img
                  className={`w-20 h-20 rounded-lg border-2 object-cover cursor-pointer transition-all duration-200 ${
                    currentImage === index ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setCurrentImage(index)}
                  src={image}
                  alt={findProduct.name}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[90%] lg:w-[40%] mx-auto flex flex-col items-start">
          <h1 className="text-2xl lg:text-5xl font-light leading-snug mb-4">
            {findProduct.name}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            {findProduct.priceSale ? (
              <div className="flex flex-col">
                <span className="text-lg lg:text-2xl font-light line-through text-gray-500">
                  {findProduct.price} VND
                </span>
                <span className="text-lg lg:text-2xl text-red-600 font-bold">
                  {findProduct.priceSale} VND
                </span>
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

          {/* Sizes */}
          {findProduct.sizes && (
            <div className="w-full mt-4">
              <h3 className="text-sm font-medium mb-2 text-gray-700">
                Chọn kích thước:
              </h3>
              <div className="flex flex-wrap gap-2 relative pb-8">
                {findProduct.sizes.map((size, index) => (
                  <div key={index}>
                    <Button
                      onClick={() => setCurrentSize(size.size)}
                      className={`hover:bg-black hover:text-white transition-all cursor-pointer ${
                        currentSize === size.size ? "bg-black text-white" : ""
                      }`}
                      variant="outline"
                      size="icon"
                      disabled={size.inventory < 1}
                    >
                      {size.size}
                    </Button>
                  </div>
                ))}
                {currentSize &&
                  findProduct.sizes.find((s) => s.size === currentSize) && (
                    <span className="absolute left-0 bottom-0 text-sm lg:text-base font-light text-gray-600">
                      Số lượng còn:{" "}
                      {
                        findProduct.sizes.find((s) => s.size === currentSize)
                          .inventory
                      }
                    </span>
                  )}
              </div>
            </div>
          )}

          <Button
            onClick={() => handleAddToCart(findProduct)}
            className="w-full py-6 mt-6 bg-black text-white cursor-pointer hover:opacity-90 text-sm md:text-lg transition-opacity"
          >
            Thêm vào giỏ hàng
          </Button>

          {/* thong tin san pham */}
          <AccordionSection
            title="Thông tin sản phẩm"
            isOpen={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
          >
            <div className="space-y-2 text-base font-light">
              <p className="font-medium">{findProduct.name}</p>
              <p>1. Kiểu sản phẩm: {findProduct.category}</p>
              <p>2. Ưu điểm:</p>
              <ul className="ml-4 space-y-1">
                <li>
                  • Thoáng mát, nhanh khô: Chất liệu Bird Eye Mesh dệt lưới với
                  các lỗ nhỏ li ti giúp thoáng khí và nhanh khô.
                </li>
                <li>
                  • Bền bỉ, ít nhăn: Sợi 100% Polyester có độ bền cao, chống mài
                  mòn và ít nhăn.
                </li>
                <li>
                  • Thiết kế tối giản: Dễ dàng phối đồ với nhiều kiểu áo khác
                  nhau.
                </li>
              </ul>
              <p>
                3. Chất liệu: Polyester Bird Eye Mesh Fabric, 100% Polyester.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection
            title="Chi tiết bảo hành"
            isOpen={isCheckedWarranty}
            onToggle={() => setIsCheckedWarranty(!isCheckedWarranty)}
          >
            <div className="space-y-4 text-base font-light">
              <div>
                <h4 className="font-medium text-lg mb-2">
                  1. Thời gian bảo hành:
                </h4>
                <ul className="ml-4 space-y-1">
                  <li>
                    • Tất cả sản phẩm được bảo hành trong vòng 12 tháng kể từ
                    ngày mua hàng.
                  </li>
                  <li>
                    • Thời gian bảo hành có thể khác nhau tùy theo loại sản phẩm
                    và nhà sản xuất.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">
                  2. Điều kiện bảo hành:
                </h4>
                <p className="ml-4 mb-2">
                  Sản phẩm sẽ được bảo hành miễn phí nếu đáp ứng các điều kiện
                  sau:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>• Sản phẩm bị lỗi kỹ thuật do nhà sản xuất.</li>
                  <li>• Còn trong thời hạn bảo hành.</li>
                  <li>• Có đầy đủ hóa đơn mua hàng hoặc phiếu bảo hành.</li>
                  <li>
                    • Sản phẩm chưa bị can thiệp, sửa chữa bởi bên thứ ba không
                    được ủy quyền.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">
                  3. Liên hệ bảo hành:
                </h4>
                <ul className="ml-4 space-y-1">
                  <li>• Hotline: 1900 1900</li>
                  <li>• Email: baohanh@moda.com</li>
                  <li>
                    • Địa chỉ: Ấp Trà Ốp, xã Tân An, huyện Càng Long, tỉnh Trà
                    Vinh
                  </li>
                </ul>
              </div>
            </div>
          </AccordionSection>
        </div>
      </div>

      {/* san pham lien quan */}
      <div className="mt-12">
        <h2 className="m-2 text-3xl font-light mb-6">Sản phẩm liên quan</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 m-2">
          {relatedProducts.map((item) => (
            <li key={item.id}>
              <ProDuctItem
                {...item}
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const AccordionSection = ({ title, isOpen, onToggle, children }) => (
  <div className="mt-6 w-full">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full border-b pb-2 hover:border-gray-400 transition-colors"
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium">{title}</span>
      <ChevronDown
        className={`h-5 w-5 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);

export default ProductDetail;
