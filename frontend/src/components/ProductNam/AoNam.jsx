import ProductsPage from "../ProductPage";
import { aoNam } from "../../lib/data";
import banner_aonam from "../../assets/banner_ao_nam.png";

const AoNam = () => {
  const category = ["Theo kiểu", "Áo polo", "Áo sơ mi", "Áo thun"];
  return (
    <ProductsPage
      data={aoNam}
      link={"/do-nam"}
      title="Sản phẩm nam"
      title2="Áo nam"
      link2="/do-nam/ao-nam"
      banner={banner_aonam}
      category={category}
    />
  );
};

export default AoNam;
