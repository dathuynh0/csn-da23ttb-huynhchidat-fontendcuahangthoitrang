import { phukien } from "../lib/data";
import ProductsPage from "../components/ProductPage";

const Other = () => {
  const category = [
    "Theo kiểu",
    "Nón (mũ)",
    "Dây nịt",
    "Túi",
    "Ví",
    "Dép",
    "Balo",
    "Băng bảo vệ",
    "Găng tay",
    "Khăn",
  ];

  return (
    <ProductsPage
      data={phukien}
      name="Phụ kiện"
      link="phu-kien"
      title={"Phụ kiện"}
      category={category}
    />
  );
};

export default Other;
