import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";
import { ChevronRight, Filter, X } from "lucide-react";
import Pagination from "./Pagination";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "./Banner";

const ProductsPage = ({
  data,
  category,
  title,
  link,
  title2,
  link2,
  banner,
}) => {
  const { handleAddToCart } = useOutletContext();
  const [filterMobile, setFilterMobile] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //loc theo kieu
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  const arrPrice = [
    "Theo giá",
    "Dưới 100.000 VND",
    "Từ 100.000 - 500.000 VND",
    "Từ 500.000 - 1.000.000 VND",
    "Tren 1.000.000 VND",
  ];

  const sortPrice = ["Mới nhất", "Giá tăng dần", "Giá giảm dần"];
  const [isSort, setIsSort] = useState(sortPrice[0]);

  //loc theo giá
  const [priceFilter, setPriceFilter] = useState(arrPrice[0]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage);

  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // khi đổi trang thì scroll lên đầu trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, [data]);

  const clearPrice = (price) => price.replace(/\./g, "");

  useEffect(() => {
    let result = [...products];
    //loc theo kieu
    result =
      selectedCategory === "Theo kiểu"
        ? result
        : result.filter((product) => product.category === selectedCategory);
    // filter theo giá
    if (priceFilter === "Dưới 100.000 VND") {
      result = result.filter((item) => {
        const price = clearPrice(item.priceSale || item.price);
        return price < 100000;
      });
    } else if (priceFilter === "Từ 100.000 - 500.000 VND") {
      result = result.filter((item) => {
        const price = clearPrice(item.priceSale || item.price);
        return price >= 100000 && price <= 500000;
      });
    } else if (priceFilter === "Từ 500.000 - 1.000.000 VND") {
      result = result.filter((item) => {
        const price = clearPrice(item.priceSale || item.price);
        return price > 500000 && price <= 1000000;
      });
    } else if (priceFilter === "Tren 1.000.000 VND") {
      result = result.filter(
        (item) => clearPrice(item.priceSale || item.price) > 1000000
      );
    }

    //sort
    if (isSort === "Giá tăng dần") {
      result = result.sort(
        (a, b) =>
          clearPrice(a.priceSale || a.price) -
          clearPrice(b.priceSale || b.price)
      );
    } else if (isSort === "Giá giảm dần") {
      result = result.sort(
        (a, b) =>
          clearPrice(b.priceSale || b.price) -
          clearPrice(a.priceSale || a.price)
      );
    }
    //set lai state
    setFilteredProducts(result);
  }, [products, priceFilter, selectedCategory, isSort]);

  const show = getCurrentProducts();

  return (
    <section className="px-2 pb-8 w-full lg:container mx-auto">
      <div className="flex items-center text-xs lg:text-base">
        <Link to="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="inline-block mx-2 h-4 w-4" />
        <Link to={link} className="hover:underline">
          {title}
        </Link>
        {link2 ? (
          <div>
            <ChevronRight className="inline-block mx-2 h-4 w-4" />
            <Link to={link2} className="hover:underline">
              {title2}
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <Banner image={banner} link={"#"} />

      <div className="mt-8 mb-4 flex items-center justify-between">
        {/* mobile filter */}
        <div className="md:hidden">
          <Button
            onClick={() => {
              setFilterMobile(true);
            }}
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
          >
            <Filter /> <p className="font-light">Bộ lọc</p>
          </Button>

          {filterMobile && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-4/5 bg-white z-20 shadow-lg"
              >
                <div className="flex justify-end">
                  <Button
                    onClick={() => setFilterMobile(false)}
                    variant="ghost"
                    size="lg"
                  >
                    <X className="size-6" />
                  </Button>
                </div>

                {/* giá */}
                <div className="mt-18 px-4">
                  <select
                    value={priceFilter}
                    onChange={(e) => {
                      setPriceFilter(e.target.value);
                    }}
                    className="inline-block w-full px-2 py-1 text-sm md:text-md font-light  text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
                  >
                    {arrPrice.map((prop) => (
                      <option key={prop} value={prop}>
                        {prop}
                      </option>
                    ))}
                  </select>
                </div>

                {/* theo kiểu */}
                <div className="mt-2 px-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                    }}
                    className="w-full inline-block px-4 py-1 text-sm md:text-md font-light text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
                  >
                    {category.map((prop) => (
                      <option key={prop} value={prop}>
                        {prop}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* md filter */}
        <div className="hidden md:block space-x-2">
          <p className="inline-block mr-2 text-sm md:text-md font-light">
            Bộ lọc:
          </p>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="inline-block px-2 py-1 text-sm md:text-md font-light  text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
          >
            {arrPrice.map((prop) => (
              <option key={prop} value={prop}>
                {prop}
              </option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="inline-block px-4 py-1 text-sm md:text-md font-light text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
          >
            {category.map((prop) => (
              <option key={prop} value={prop}>
                {prop}
              </option>
            ))}
          </select>
        </div>

        {/* sort */}
        <div className="flex items-center gap-2">
          <p className="font-light text-sm md:text-md">Sắp xếp theo:</p>
          <select
            value={isSort}
            onChange={(e) => setIsSort(e.target.value)}
            className="inline-block px-4 py-1 text-sm md:text-md font-light text-black bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer"
          >
            {sortPrice.map((prop) => (
              <option value={prop} index={prop}>
                {prop}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr />

      <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
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

      <div className="flex items-center justify-center my-12 w-full">
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
