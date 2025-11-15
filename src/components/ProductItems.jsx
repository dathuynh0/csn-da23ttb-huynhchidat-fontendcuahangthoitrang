import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useContext } from "react";
import { Context } from "../Context";

const ProDuctItem = ({
  images,
  name,
  price,
  priceSale,
  product,
  onAddToCart,
}) => {
  const { setSearch } = useContext(Context);

  const handleLinkClick = () => {
    setTimeout(() => {
      setSearch("");
    }, 10);
  };

  return (
    <div className="group flex flex-col overflow-hidden border-none hover:shadow-lg hover:translate-y-[-0.5rem] transition-all duration-300">
      <div className="relative w-full aspect-square overflow-hidden">
        <Link onClick={handleLinkClick} to={`/products/chi-tiet/${product.id}`}>
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
        </Link>

        <Button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-1 w-full bg-black text-white hover:opacity-85 text-xs lg:text-base md:px-6 md:py-3 h-auto flex items-center gap-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="hidden lg:inline">Thêm vào giỏ hàng</span>
          <ShoppingCart className="size-5" />
        </Button>
      </div>

      <h3 className="m-2 md:m-3 text-sm md:text-lg font-light leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
        {name}
      </h3>

      <div className="flex items-center justify-between w-full p-1 lg:p-2">
        {priceSale ? (
          <div className="w-[80%] flex items-center">
            <span className="text-xs md:text-lg text-red-600 font-medium overflow-hidden  whitespace-nowrap max-w-[50%] inline-block mr-1.5">
              {priceSale} VND
            </span>

            <span className="text-xs md:text-lg text-gray-700 font-light overflow-hidden  whitespace-nowrap max-w-[50%] line-through">
              {price} VND
            </span>
          </div>
        ) : (
          <span className="text-xs md:text-lg text-red-600 font-medium line-clamp-1 whitespace-nowrap inline-block mr-2">
            {price} VND
          </span>
        )}
        <Button
          onClick={onAddToCart}
          className="rounded-full bg-black text-white lg:hidden"
          size="icon"
        >
          <ShoppingBag className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProDuctItem;
