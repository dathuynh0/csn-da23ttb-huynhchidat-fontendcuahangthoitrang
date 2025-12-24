import { aoNu, quanNu, dam } from "../lib/data";
import ProductsPage from "../components/ProductPage";
import banner_nu from "../assets/banner_nu.png";

const DoNu = () => {
  const nu = [...aoNu, ...quanNu, ...dam];
  const category = [
    "Theo kiểu",
    "Áo thun",
    "Áo sơ mi",
    "Áo khoác",
    "Áo gile",
    "Áo len",
    "Quần jean",
    "Quần short",
    "Quần ống rộng",
    "Quần ống suông",
    "Váy",
    "Đầm dáng xòe",
    "Đầm maxi",
    "Đầm ngắn",
    "Đầm trễ vai",
    "Đầm sơ mi",
  ];

  return (
    <ProductsPage
      data={nu}
      link="/do-nu"
      title={"Sản phẩm nữ"}
      category={category}
      banner={banner_nu}
    />
  );
};

export default DoNu;
