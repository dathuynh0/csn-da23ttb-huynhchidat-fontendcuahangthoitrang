import ProductsPage from "../components/ProductPage";
import { bestseller } from "../lib/data";

const BanChay = () => {
  const category = [
    "Theo kiểu",
    "Áo khoác",
    "Áo polo",
    "Quần jean",
    "Quần lót",
    "Quần short",
    "Áo sơ mi",
    "Áo thun",
  ];

  return (
    <ProductsPage
      data={bestseller}
      name={"Sản phẩm bán chạy"}
      title="Sản phẩm bán chạy"
      link="/san-pham-ban-chay"
      category={category}
    />
  );
};

export default BanChay;
