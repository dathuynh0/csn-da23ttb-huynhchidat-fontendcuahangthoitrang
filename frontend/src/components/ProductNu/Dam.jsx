import ProductsPage from "../ProductPage";
import { dam } from "../../lib/data.js";

const Dam = () => {
  return (
    <ProductsPage
      data={dam}
      link="/do-nu"
      link2="/do-nu/dam"
      title="Sản phẩm nữ"
      title2="Đầm"
      name="Đầm"
    />
  );
};

export default Dam;
