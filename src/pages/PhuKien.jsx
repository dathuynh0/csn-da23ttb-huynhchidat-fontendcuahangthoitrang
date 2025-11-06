import { phukien } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const PhuKien = () => {
  return (
    <ProductsPage
      data={phukien}
      name="Phụ kiện"
      link="phu-kien"
      title={"Phụ kiện"}
    />
  );
};

export default PhuKien;
