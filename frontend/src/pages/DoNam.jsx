import { aoNam, quanNam } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const DoNam = () => {
  const nam = [...aoNam, ...quanNam];
  console.log(nam);

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
