import ProductsPage from "../ProductPage";
import { nu } from "../../lib/data.js";

const AoNu = () => {
  return (
    <ProductsPage
      data={nu}
      link="/do-nu"
      link2="/do-nu/ao-nu"
      title="Sản phẩm nữ"
      title2="Áo nữ"
      name="Áo nữ"
    />
  );
};

export default AoNu;
