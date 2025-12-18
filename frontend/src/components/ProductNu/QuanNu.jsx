import ProductsPage from "../ProductPage";
import { quanNu } from "../../lib/data.js";

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
      name="Quần nữ"
      category={category}
    />
  );
};

export default QuanNu;
