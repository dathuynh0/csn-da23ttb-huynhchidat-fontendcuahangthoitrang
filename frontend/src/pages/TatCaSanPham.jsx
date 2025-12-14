import ProductsPage from "../components/ProductPage";
import {
  bestseller,
  aoNam,
  quanNam,
  aoNu,
  quanNu,
  dam,
  phukien,
} from "../lib/data";

const TatCaSanPham = () => {
  const allProducts = [
    ...bestseller,
    ...aoNam,
    ...quanNam,
    ...aoNu,
    ...quanNu,
    ...dam,
    ...phukien,
  ];
  return (
    <ProductsPage
      data={allProducts}
      link={"/tat-ca-san-pham"}
      title={"Tất cả sản phẩm"}
    />
  );
};

export default TatCaSanPham;
