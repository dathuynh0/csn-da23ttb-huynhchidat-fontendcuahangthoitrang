import ProductsPage from "../ProductPage";
import { quanNam } from "../../lib/data";

const Quan = () => {
  return (
    <ProductsPage
      data={quanNam}
      name="Quần nam"
      title="Sản phẩm nam"
      link="/do-nam"
      title2="Quần nam"
      link2="/do-nu/quan-nam"
    />
  );
};

export default Quan;
