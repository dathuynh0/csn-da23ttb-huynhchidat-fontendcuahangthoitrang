import { nu } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const DoNu = () => {
  return (
    <ProductsPage
      data={nu}
      name="Sản phẩm nữ"
      link="/do-nu"
      title={"Sản phẩm nữ"}
    />
  );
};

export default DoNu;
