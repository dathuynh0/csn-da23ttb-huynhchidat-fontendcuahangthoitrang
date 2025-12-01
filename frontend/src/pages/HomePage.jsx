import SlideShow from "../components/SlideShow/SlideShow";
import ProductCategories from "../components/ProductCategories";
import {
  bestseller,
  aoNam,
  quanNam,
  aoNu,
  quanNu,
  dam,
  phukien,
  sale,
} from "../lib/data";
import ProductList from "../components/ProductList";
import Support from "../components/Support";

const HomePage = () => {
  const nam = [...aoNam, ...quanNam];

  const nu = [...aoNu, ...quanNu, ...dam];
  return (
    <>
      <SlideShow />
      <ProductCategories />
      <ProductList
        data={bestseller}
        title="Sản phẩm bán chạy"
        link="/san-pham-ban-chay"
      />
      <ProductList data={sale} title={"Sản phẩm khuyến mại"} link="/sale" />
      <ProductList data={nam} title="Sản phẩm nam" link="/do-nam" />
      <ProductList data={nu} title="Sản phẩm nữ" link="/do-nu" />
      <ProductList data={phukien} title="Phụ kiện" link="/phu-kien" />
      <Support />
    </>
  );
};

export default HomePage;
