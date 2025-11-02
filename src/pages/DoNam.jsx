import { nam } from "../lib/data";
import ProductsName from "../components/ProductsName";

const DoNam = () => {
  return (
    <>
      <ProductsName data={nam} link={"/do-nam"} title={"Sản phẩm nam"} />
    </>
  );
};

export default DoNam;
