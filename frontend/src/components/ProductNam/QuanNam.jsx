import ProductsPage from "../ProductPage";
import { quanNam } from "../../lib/data";
import banner_quannam from "../../assets/banner_quannam.png";

const QuanNam = () => {
  const category = ["Theo kiểu", "Quần jean", "Quần short", "Quần tây"];
  return (
    <ProductsPage
      data={quanNam}
      title="Sản phẩm nam"
      link="/do-nam"
      title2="Quần nam"
      link2="/do-nam/quan-nam"
      banner={banner_quannam}
      category={category}
    />
  );
};

export default QuanNam;
