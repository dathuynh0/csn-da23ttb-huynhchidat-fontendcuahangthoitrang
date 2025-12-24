import { aoNam, quanNam } from "../lib/data";
import ProductsPage from "../components/ProductPage";
import banner_nam from "../assets/banner_nam.png";

const DoNam = () => {
  const nam = [...aoNam, ...quanNam];
  const category = [
    "Theo kiểu",
    "Áo polo",
    "Áo sơ mi",
    "Áo thun",
    "Quần jean",
    "Quần short",
    "Quần tây",
  ];

  return (
    <>
      <ProductsPage
        data={nam}
        link={"/do-nam"}
        title={"Sản phẩm nam"}
        category={category}
        banner={banner_nam}
      />
    </>
  );
};

export default DoNam;
