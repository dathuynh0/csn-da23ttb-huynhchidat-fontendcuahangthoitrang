import { phukien } from "../lib/data";
import ProductsPage from "../components/ProductPage";
import banner_phukien from "../assets/banner_phukien.jpg";

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
      link="phu-kien"
      title={"Phụ kiện"}
      category={category}
      banner={banner_phukien}
    />
  );
};

export default Other;
