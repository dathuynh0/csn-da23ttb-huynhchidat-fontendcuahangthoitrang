import ProductsPage from "../ProductPage";
import { quanNam } from "../../lib/data";

const QuanNam = () => {
  const category = ["Theo kiểu", "Jean", "Short", "Quần tây"];
  return (
    <ProductsPage
      data={quanNam}
      name="Quần nam"
      title="Sản phẩm nam"
      link="/do-nam"
      title2="Quần nam"
      link2="/do-nam/quan-nam"
      category={category}
    />
  );
};

export default QuanNam;
