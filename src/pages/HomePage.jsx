import Banner from "../components/Banner/Banner";
import ProductCategories from "../components/ProductCategories";
import { bestseller, nam, nu, phukien } from "../lib/data";
import ProductList from "../components/ProductList";
import Support from "../components/Support";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductCategories />
      <ProductList
        data={bestseller}
        title="Sản phẩm bán chạy"
        link="/san-pham-ban-chay"
      />
      <ProductList data={nam} title="Sản phẩm nam" link="/do-nam" />
      <ProductList data={nu} title="Sản phẩm nữ" link="/do-nu" />
      <ProductList data={phukien} title="Phụ kiện" link="/phu-kien" />
      <Support />
    </>
  );
};

export default HomePage;
