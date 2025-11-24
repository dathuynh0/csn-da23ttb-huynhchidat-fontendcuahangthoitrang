import { sale } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const Sale = () => {
  return (
    <ProductsPage
      data={sale}
      title={"Sale"}
      link="/sale"
      name="Sản phẩm khuyến mại"
    />
  );
};

export default Sale;
