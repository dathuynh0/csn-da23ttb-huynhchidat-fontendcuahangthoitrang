import ProductsPage from "../ProductPage";
import { dam } from "../../lib/data.js";
import banner_dam from "../../assets/banner_dam.png";

const Dam = () => {
  const category = [
    "Theo kiểu",
    "Đầm dáng xòe",
    "Đầm maxi",
    "Đầm ngắn",
    "Đầm trễ vai",
    "Đầm sơ mi",
  ];

  return (
    <ProductsPage
      data={dam}
      link="/do-nu"
      link2="/do-nu/dam"
      title="Sản phẩm nữ"
      title2="Đầm"
      banner={banner_dam}
      category={category}
    />
  );
};

export default Dam;
