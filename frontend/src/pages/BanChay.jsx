import ProductsPage from "../components/ProductPage";
import { bestseller } from "../lib/data";

const BanChay = () => {
  return (
    <ProductsPage
      data={bestseller}
      name={"Sản phẩm bán chạy"}
      title="Sản phẩm bán chạy"
      link="/san-pham-ban-chay"
    />
  );
};

export default BanChay;
