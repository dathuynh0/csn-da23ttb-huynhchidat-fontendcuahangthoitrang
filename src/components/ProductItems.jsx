import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useContext } from "react";
import { Context } from "../Context";

const ProDuctItem = ({ images, name, price, product, onAddToCart }) => {
  const { setSearch } = useContext(Context);

  const handleLinkClick = () => {
    setTimeout(() => {
      setSearch("");
    }, 50);
  };

  return (
    <div className="group flex flex-col overflow-hidden border-none bg-white hover:shadow-lg hover:translate-y-[-0.5rem] transition-all duration-300">
      <Link onClick={handleLinkClick} to={`/products/chi-tiet/${product.id}`}>
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            src={images[0]}
            alt={name}
          />
          <img
            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            src={images[1]}
            alt={name}
          />
        </div>
        <h3 className="m-2 md:m-3 text-sm md:text-lg font-light leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
          {name}
        </h3>
      </Link>

      <div className="flex items-center justify-between w-full p-2">
        <span className="text-sm md:text-lg font-light line-clamp-1 whitespace-nowrap inline-block mr-2">
          {price} VND
        </span>

        <Button
          onClick={() => onAddToCart(product)}
          className="bg-black text-white hover:opacity-85 text-xs lg:text-base md:px-3 h-auto flex items-center gap-2 cursor-pointer"
        >
          <span className="hidden lg:inline">Thêm vào</span>
          <span className="lg:hidden">Thêm</span>
          <ShoppingCart className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProDuctItem;
