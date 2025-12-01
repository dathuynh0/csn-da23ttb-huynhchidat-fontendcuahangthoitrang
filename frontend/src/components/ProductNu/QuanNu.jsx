import ProductsPage from "../ProductPage";
import { quanNu } from "../../lib/data.js";

const QuanNu = () => {
  return (
    <ProductsPage
      data={quanNu}
      link="/do-nu"
      link2="/do-nu/quan-nu"
      title="Sản phẩm nữ"
      title2="Quần nữ"
      name="Quần nữ"
    />
  );
};

export default QuanNu;
