import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer";
import { toast, Toaster } from "sonner";
import { useContext, useState } from "react";
import { Context } from "./Context";

function App() {
  const { isSuccess } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

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

  const total = cartItems.reduce((sum, item) => {
    const priceString = String(item.price || 0);

    const finalPriceString = priceString.replace(/\./g, "");

    const price = Number(finalPriceString) || 0;
    const number = Number(item.number) || 0;

    return Math.floor(sum + price * number);
  }, 0); // đặt giá trị ban đầu của sum = 0

  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  }).format(total);

  return (
    <div className="bg-slate-200 font-['Roboto']">
      <Toaster richColors />
      <div className="bg-slate-100 flex justify-center lg:sticky top-0 right-0 left-0 z-50">
        <NavBar
          data={cartItems}
          onMinus={handleMinus}
          onPlus={handlePlus}
          onDelete={handleDeleteCart}
          formattedTotal={formattedTotal}
          cartItems={cartItems}
        />
      </div>

      <main className="mx-auto">
        <div>
          <Outlet context={{ handleAddToCart, cartItems }} />
        </div>
      </main>
      <div className="bg-sky-200 text-white flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
