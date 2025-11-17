import ProductsPage from "../ProductPage";
import { nu } from "../../lib/data.js";

const Vay = () => {
  return (
    <ProductsPage
      data={nu}
      link="/do-nu"
      link2="/do-nu/vay"
      title="Sản phẩm nữ"
      title2="Váy"
    />
  );
};

export default Vay;
