import { aoNam, quanNam } from "../lib/data";
import ProductsPage from "../components/ProductPage";

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
        name="Sản phẩm nam"
        link={"/do-nam"}
        title={"Sản phẩm nam"}
        category={category}
      />
    </>
  );
};

export default DoNam;
