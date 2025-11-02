import { phukien } from "../lib/data";
import ProductsName from "../components/ProductsName";

const PhuKien = () => {
  return <ProductsName data={phukien} link="phu-kien" title={"Phụ kiện"} />;
};

export default PhuKien;
