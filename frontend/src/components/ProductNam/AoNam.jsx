import ProductsPage from "../ProductPage";
import { aoNam } from "../../lib/data";

const AoNam = () => {
  const category = ["Theo kiểu", "Áo polo", "Áo sơ mi", "Áo thun"];
  return (
    <ProductsPage
      data={aoNam}
      name="Áo nam"
      link={"/do-nam"}
      title="Sản phẩm nam"
      title2="Áo nam"
      link2="/do-nam/ao-nam"
      category={category}
    />
  );
};

export default AoNam;
