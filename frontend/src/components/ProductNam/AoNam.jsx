import ProductsPage from "../ProductPage";
import { aoNam } from "../../lib/data";

const AoNam = () => {
  return (
    <ProductsPage
      data={aoNam}
      name="Áo nam"
      link={"/do-nam"}
      title="Sản phẩm nam"
      title2="Áo nam"
      link2="/do-nam/ao-nam"
    />
  );
};

export default AoNam;
