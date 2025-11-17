import ProductsPage from "../ProductPage";
import { nu } from "../../lib/data.js";

const QuanNu = () => {
  return (
    <ProductsPage
      data={nu}
      link="/do-nu"
      link2="/do-nu/quan-nu"
      title="Sản phẩm nữ"
      title2="Quần nữ"
    />
  );
};

export default QuanNu;
