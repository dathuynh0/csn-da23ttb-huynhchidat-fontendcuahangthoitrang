import { Link, useOutletContext } from "react-router";
import ProDuctItem from "./ProductItems";
import { Button } from "./ui/button";

const ProductList = ({ data, title, link }) => {
  const { handleAddToCart } = useOutletContext();

  return (
    <>
      <section className="w-full lg:w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8">{title}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-8 m-2">
          {data.map((item) => {
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
          <Button className="text-center text-md cursor-pointer text-white bg-black p-6 hover:opacity-85">
            <Link to={link}>Xem tất cả</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductList;
