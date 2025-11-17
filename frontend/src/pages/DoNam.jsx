import { nam } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const DoNam = () => {
  return (
    <>
      <ProductsPage
        data={nam}
        name="Sản phẩm nam"
        link={"/do-nam"}
        title={"Sản phẩm nam"}
      />
    </>
  );
};

export default DoNam;
