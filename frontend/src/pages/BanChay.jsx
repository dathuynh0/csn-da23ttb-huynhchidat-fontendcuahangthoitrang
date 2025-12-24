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
      title="Sản phẩm bán chạy"
      link="/san-pham-ban-chay"
      category={category}
      banner={
        "https://file.hstatic.net/1000253775/file/h_ng_b_n_ch_y_6__2_.jpg"
      }
    />
  );
};

export default BanChay;
