import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";
import { ArrowDownUp, ChevronRight } from "lucide-react";
import Pagination from "./Pagination";

const ProductsPage = ({ data, name, title, link, title2, link2 }) => {
  const { handleAddToCart } = useOutletContext();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [sort, setSort] = useState(0);

  const [priceFilter, setPriceFilter] = useState("");

  const refSelected = useRef();

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  console.log(getCurrentProducts());

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // khi đổi trang thì scroll lên đầu trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, [data]);

  const clearPrice = (price) => Number(String(price).replace(/\./g, "")) || 0;

  useEffect(() => {
    let result = [...products];

    // filter theo giá
    if (priceFilter === "d100") {
      result = result.filter((item) => clearPrice(item.price) <= 100000);
    } else if (priceFilter === "t100-d500") {
      result = result.filter((item) => {
        const price = clearPrice(item.price);
        return price > 100000 && price <= 500000;
      });
    } else if (priceFilter === "t500-d1tr") {
      result = result.filter((item) => {
        const price = clearPrice(item.price);
        return price > 500000 && price <= 1000000;
      });
    } else if (priceFilter === "t1tr") {
      result = result.filter((item) => clearPrice(item.price) > 1000000);
    }

    //set lai state
    setFilteredProducts(result);
  }, [products, priceFilter]);

  const handleSort = () => {
    const sortProducts = [...filteredProducts];

    if (sort % 2 === 0) {
      // sắp xếp tăng dần
      sortProducts.sort((a, b) => clearPrice(a.price) - clearPrice(b.price));
    } else {
      // sắp xếp giảm dần
      sortProducts.sort((a, b) => clearPrice(b.price) - clearPrice(a.price));
    }

    setSort((prevSort) => prevSort + 1);
    setFilteredProducts(sortProducts);
  };

  // lay value của option trong select
  const handleFilter = () => {
    const value = refSelected.current.value;
    setPriceFilter(value);
  };

  const show = getCurrentProducts();

  return (
    <section className="pt-8 px-2 pb-8 w-full lg:w-[80%] mx-auto">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to={link} className="hover:underline">
          {title}
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to={link2} className="hover:underline">
          {title2}
        </Link>
      </div>

      <hr className="mt-2" />
      <h2 className="text-4xl font-bold mt-8">{name}</h2>

      <div className="mt-4 mb-4 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <p className="mr-2 text-sm md:text-base ">Bộ lọc: </p>
          <select
            ref={refSelected}
            onChange={handleFilter}
            name="filteredProduct"
            id="filteredProduct"
            className="block px-2 py-2 text-sm md:text-base  text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
          >
            <option value="all">Tất cả sản phẩm</option>
            <option value="d100">Dưới 100.000 VND</option>
            <option value="t100-d500">Từ 100.000 VND - 500.000 VND</option>
            <option value="t500-d1tr">Từ 500.000 VND - 1.000.000 VND</option>
            <option value="t1tr">Trên 1.000.000 VND</option>
          </select>
        </div>

        <Button
          onClick={handleSort}
          variant="outline"
          size="icon"
          className="cursor-pointer hover:opacity-85"
        >
          <ArrowDownUp />
        </Button>
      </div>

      <hr />

      <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {show.map((item) => (
          <li key={item.id}>
            <ProDuctItem
              {...item}
              product={item}
              onAddToCart={() => handleAddToCart(item)}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-6 w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
