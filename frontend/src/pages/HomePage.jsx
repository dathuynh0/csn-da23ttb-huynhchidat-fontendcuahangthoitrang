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
import Banner from "../components/Banner";

const HomePage = () => {
  const nam = [...aoNam, ...quanNam];

  const nu = [...aoNu, ...quanNu, ...dam];
  return (
    <>
      <SlideShow />
      <Support />
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

      <div className="w-full lg:container my-20 mx-auto">
        <h2 className="text-center text-5xl font-medium">
          Tại sao nên chọn MODA?
        </h2>
        <div className="mt-6 flex justify-center p-2 md:p-0">
          <p className="w-full md:w-[780px] text-center text-gray-500 text-md lg:text-lg">
            MODA phát triển theo triết lý thời trang Vị Nhân Sinh là Mặc Bền,
            Mặc Mềm ,Mặc Không Lỗi Mốt. Nhờ luôn dẫn đầu về công nghệ, thiết kế
            tinh tế và nghiên cứu trên phom dáng người Việt, giúp người mặc tỏa
            ra khí chất nam tính.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
