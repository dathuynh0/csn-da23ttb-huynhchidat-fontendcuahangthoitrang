import Banner from "../components/Banner/Banner";
import ProductCategories from "../components/ProductCategories";
import { bestseller, nam, nu, phukien } from "../lib/data";
import { useOutletContext } from "react-router";
import { useContext, useEffect, useState } from "react";
import ProDuctItem from "../components/ProductItems";
import ProductList from "../components/ProductList";
import { Context } from "../Context";

const HomePage = () => {
  const { search } = useContext(Context);
  const { handleAddToCart } = useOutletContext();

  const lowerCaseSearch = search ? search.toLowerCase() : "";

  const [products, setProducts] = useState([]);

  const arr = bestseller.concat(nam, nu, phukien);

  useEffect(() => {
    setProducts(arr);
  }, []);

  const filteredProducts = products.filter((item) => {
    const lowerCaseProductName = item.name.toLowerCase();
    return lowerCaseProductName.includes(lowerCaseSearch);
  });

  if (search) {
    return (
      <>
        <p className="text-center text-2xl mt-4">Kết quả tìm: {search}</p>
        <ul className="mt-8 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-x-3 gap-y-4 p-2 w-full lg:w-[80%] mx-auto">
          {filteredProducts.map((item) => (
            <li key={item.id}>
              <ProDuctItem
                {...item}
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <Banner />
      <ProductCategories />
      <ProductList data={bestseller} title="Sản phẩm bán chạy" link="/" />

      <ProductList data={nam} title="Sản phẩm nam" link="/do-nam" />
      <ProductList data={nu} title="Sản phẩm nữ" link="/do-nu" />
      <ProductList data={phukien} title="Phụ kiện" link="/phu-kien" />
    </>
  );
};

export default HomePage;
