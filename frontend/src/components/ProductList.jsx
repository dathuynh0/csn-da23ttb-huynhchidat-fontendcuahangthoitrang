import { Link, useOutletContext } from "react-router";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";

const ProductList = ({ data, title, link }) => {
  const { handleAddToCart } = useOutletContext();

  const filteredProduct = () => {
    const indexStart = 0;
    const indexEnd = indexStart + 8;
    return data.slice(indexStart, indexEnd);
  };

  return (
    <>
      <section className="w-full lg:container mx-auto">
        <div className="text-center">
          <h2 className="inline-block border-b uppercase text-2xl lg:text-3xl font-medium m-2 mb-12 pb-2">
            {title}
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 m-2">
          {filteredProduct().map((item) => {
            return (
              <li key={item.id}>
                <ProDuctItem
                  {...item}
                  product={item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-8 mb-8">
          <Button
            variant="outline"
            className="text-center text-md uppercase cursor-pointer text-black hover:text-white hover:bg-black transition-all duration-300 p-6 hover:opacity-85"
          >
            <Link to={link}>Xem tất cả</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductList;
