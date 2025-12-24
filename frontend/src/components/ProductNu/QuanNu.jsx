import ProductsPage from "../ProductPage";
import { quanNu } from "../../lib/data.js";
import banner_quannu from "../../assets/banner_quannu.png";

const QuanNu = () => {
  const category = [
    "Theo kiểu",
    "Quần jean",
    "Quần short",
    "Quần ống rộng",
    "Quần ống suông",
    "Váy",
  ];
  return (
    <ProductsPage
      data={quanNu}
      link="/do-nu"
      link2="/do-nu/quan-nu"
      title="Sản phẩm nữ"
      title2="Quần nữ"
      banner={banner_quannu}
      category={category}
    />
  );
};

export default QuanNu;
