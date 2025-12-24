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
import banner_tatcasanpham from "../assets/banner_tatcasanpham.png";

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

  const category = [
    "Theo kiểu",
    "Áo thun",
    "Áo sơ mi",
    "Áo khoác",
    "Áo gile",
    "Áo len",
    "Quần jean",
    "Quần short",
    "Quần ống rộng",
    "Quần ống suông",
    "Quần lót",
    "Váy",
    "Đầm dáng xòe",
    "Đầm maxi",
    "Đầm ngắn",
    "Đầm trễ vai",
    "Đầm sơ mi",
    "Nón (mũ)",
    "Dây nịt",
    "Túi",
    "Ví",
    "Dép",
    "Balo",
    "Băng bảo vệ",
    "Găng tay",
    "Khăn",
  ];
  return (
    <ProductsPage
      data={allProducts}
      link={"/tat-ca-san-pham"}
      title={"Tất cả sản phẩm"}
      category={category}
      banner={banner_tatcasanpham}
    />
  );
};

export default TatCaSanPham;
