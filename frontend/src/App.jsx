import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer";
import { toast, Toaster } from "sonner";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import {
  bestseller,
  aoNam,
  quanNam,
  aoNu,
  quanNu,
  dam,
  phukien,
} from "./lib/data.js";
import ProDuctItem from "./components/ProductItems";

function App() {
  const { isSuccess, search, cartItems, setCartItems, formattedTotal } =
    useContext(Context);

  //xóa dấu
  const lowerCaseSearch = search
    ? search
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
    : "";

  const allProduct = [
    ...bestseller,
    ...aoNam,
    ...quanNam,
    ...aoNu,
    ...quanNu,
    ...dam,
    ...phukien,
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProduct);
  }, []);

  const handleAddToCart = (productAdd) => {
    //check item co dc them vao chua
    const checkAvailable = cartItems.find((item) => item.id === productAdd.id);
    if (isSuccess) {
      if (!checkAvailable) {
        setCartItems([...cartItems, { ...productAdd }]);
        toast.success("Thêm vào giỏ hàng thành công!");
      } else {
        toast.error("Thêm thất bại. Sản phẩm đã tồn tại trong giỏ hàng");
      }
    } else {
      toast.error("Thêm thất bại! Bạn chưa đăng nhập vui lòng đăng nhập");
    }
  };

  //xóa cartItems
  const handleDeleteCart = (productId) => {
    const cloneCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(cloneCart);
    toast.success("Xóa thành công");
  };

  const handleMinus = (index) => {
    const cloneData = [...cartItems];

    cloneData[index].number -= 1;
    setCartItems(cloneData);
  };

  const handlePlus = (index) => {
    const cloneData = [...cartItems];

    cloneData[index].number += 1;
    setCartItems(cloneData);
  };

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name
      .normalize("NFD") //bỏ dấu tiếng việt
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
    return lowerCaseProductName.includes(lowerCaseSearch);
  });

  return (
    <div className="bg-white">
      <Toaster richColors />
      <div className="bg-white flex justify-center lg:sticky top-0 z-50">
        <NavBar
          data={cartItems}
          onMinus={handleMinus}
          onPlus={handlePlus}
          onDelete={handleDeleteCart}
          setCartItems={setCartItems}
          formattedTotal={formattedTotal}
          cartItems={cartItems}
        />
      </div>

      <main>
        <div>
          {search ? (
            <div>
              <div className="flex flex-col w-full mx-auto lg:container">
                <p className="text-center text-2xl font-bold mt-4">
                  Kết quả tìm: {search}
                </p>
                <p className="text-2xl mt-4 font-light">
                  Có {filteredProducts.length} sản phẩm
                </p>
              </div>
              <ul className="mt-8 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-x-3 gap-y-4 p-2 w-full lg:container mx-auto">
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
            </div>
          ) : (
            <Outlet context={{ handleAddToCart, cartItems, setCartItems }} />
          )}
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
