import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import ShoppingCartItem from "../Cart/ShoppingCartItem";
import { Link } from "react-router";
import { useContext } from "react";
import { Context } from "../../Context";

const Cart = ({
  checkClick,
  data,
  onClose,
  onMinus,
  onPlus,
  onDelete,
  formattedTotal,
}) => {
  const { setCheckCart } = useContext(Context);

  return (
    <AnimatePresence>
      {checkClick && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="bg-slate-100 fixed top-0 right-0 w-full lg:w-[50%] h-full z-20 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">Giỏ hàng</h1>
              <Button
                variant="outline"
                size="icon"
                onClick={onClose}
                className="text-white bg-black cursor-pointer hover:opacity-85"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <hr className="border" />

            <div className=" flex-1 overflow-y-auto p-4">
              {data.length === 0 ? (
                <p className="text-center text-lg">
                  Giỏ hàng của bạn đang trống
                </p>
              ) : (
                <ul className="transition-all duration-300">
                  {data.map((item, index) => {
                    return (
                      <li className="mb-4" key={item.id}>
                        <ShoppingCartItem
                          image={item.images[0]}
                          name={item.name}
                          price={item.priceSale || item.price}
                          sizes={item.sizes}
                          number={item.number}
                          onMinus={() => onMinus(index)}
                          onPlus={() => onPlus(index)}
                          onDelete={() => onDelete(item.id)}
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="p-2 border-t">
              <p className="text-sm md:text-lg">Tạm tính: </p>
              <span className="text-sm md:text-lg font-semibold text-red-600">
                {formattedTotal}
              </span>
              <Button
                onClick={() => setCheckCart(false)}
                variant="outline"
                size="lg"
                className="w-full mt-2 text-lg bg-black text-white font-bold hover:opacity-85 cursor-pointer"
              >
                <Link className="w-full" to="/checkout">
                  Tiến hành đặt hàng
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
