import ProductsPage from "../ProductPage";
import { aoNu } from "../../lib/data.js";

const AoNu = () => {
  const category = [
    "Theo kiểu",
    "Áo thun",
    "Áo sơ mi",
    "Áo khoác",
    "Áo gile",
    "Áo len",
  ];
  return (
    <ProductsPage
      data={aoNu}
      link="/do-nu"
      link2="/do-nu/ao-nu"
      title="Sản phẩm nữ"
      title2="Áo nữ"
      name="Áo nữ"
      category={category}
    />
  );
};

export default AoNu;
