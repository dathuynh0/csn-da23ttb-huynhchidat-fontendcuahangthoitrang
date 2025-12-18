import { sale } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const Sale = () => {
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
    "Váy",
    "Đầm dáng xòe",
    "Đầm maxi",
    "Đầm ngắn",
    "Đầm trễ vai",
    "Đầm sơ mi",
  ];
  return (
    <ProductsPage
      data={sale}
      title={"Sale"}
      link="/sale"
      name="Sản phẩm khuyến mại"
      category={category}
    />
  );
};

export default Sale;
