const CartCheckout = ({ cartItems }) => {
  return (
    <div className="">
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                className="h-20 object-cover rounded-lg"
                src={item.images[0]}
                alt={item.name}
              />
              <div>
                <p className="font-medium line-clamp-1">{item.name}</p>
                <p className="text-md text-gray-600 font-light">
                  Số lượng: {item.number}
                </p>
              </div>
            </div>
            <span className="font-semibold">
              {item.priceSale ? item.priceSale : item.price}đ
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartCheckout;
