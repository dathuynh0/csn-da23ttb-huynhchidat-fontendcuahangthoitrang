import {
  ChevronDown,
  CircleUserRound,
  LogOut,
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";

import { useContext, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link, NavLink } from "react-router-dom";
import "../mystyle.css";
import Signin from "./Signin.jsx";
import { toast } from "sonner";
import SearchBar from "./SearchBar.jsx";
import Cart from "./Cart.jsx";
import { Context } from "../../Context.jsx";

const NavBar = ({ data, onMinus, onPlus, onDelete, formattedTotal }) => {
  const { isSuccess, setIsSuccess } = useContext(Context);

  const [checkMobile, setCheck] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const [checkCart, setCheckCart] = useState(false);

  const { accounts } = useContext(Context);
  const [infoUser, setInfoUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openMenu = () => {
    setCheck(!checkMobile);
  };

  const handleCheckLogin = () => {
    setCheckLogin(!checkLogin);
  };

  const handleLogout = () => {
    setIsSuccess(false);
    toast.success("Đăng xuất thành công");
  };

  const handleCheckCart = () => {
    setCheckCart(!checkCart);
  };

  const handleLogin = () => {
    if (!email && !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu");
      toast.error("Đăng nhâp thất bại!");
      return;
    }

    const checkUser = accounts.find((acc) => acc.email === email);

    //check email
    if (!checkUser) {
      toast.error("Tài khoản không đúng");
      return;
    }

    //check password
    if (checkUser.password !== password) {
      toast.error("Mật khẩu không đúng");
      return;
    }

    //thành công
    toast.success(`Đăng nhập thành công.`);
    setIsSuccess(true);
    setCheckLogin(false);
    setInfoUser(checkUser);
    setEmail("");
    setPassword("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-6 flex-wrap w-full lg:w-[80%] mx-auto">
        {/* logo */}
        <Link to="/">
          <p className="text-3xl font-extrabold bg-gradient-to-b from-white/20 to-black inline-block text-transparent bg-clip-text">
            M O D A
          </p>
        </Link>

        {/* item */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-x-8 text-lg text-black uppercase">
            <li>
              <NavLink className="" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/sale">Sale</NavLink>
            </li>

            <li className="relative group">
              <div className="flex items-center gap-x-1">
                <NavLink to="/do-nam">Đồ nam</NavLink>
                <ChevronDown />
              </div>

              <div className="absolute top-8 left-0 bg-white rounded-md shadow-md overflow-hidden transition-opacity duration-300  opacity-0 group-hover:opacity-100">
                <ul className="py-4 min-w-[200px] px-4">
                  <li className="relative group hover:underline">
                    <NavLink to="/do-nam/ao">Áo</NavLink>
                  </li>
                  <li className="mt-2 hover:underline">
                    <NavLink to="/do-nam/quan">Quần</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-x-1">
                <NavLink to="/do-nu">Đồ nữ</NavLink>
                <ChevronDown />
              </div>

              <div className="absolute top-8 left-0 bg-white rounded-md shadow-md overflow-hidden transition-opacity duration-300  opacity-0 group-hover:opacity-100">
                <ul className="py-4 min-w-[200px] px-4">
                  <li className="relative group hover:underline">
                    <NavLink to="/do-nam/ao">Áo</NavLink>
                  </li>
                  <li className="mt-2 hover:underline">
                    <NavLink to="/do-nam/quan">Quần</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/phu-kien">Phụ kiện</NavLink>
            </li>
          </ul>
        </div>

        <div></div>
        {/* search */}
        <div className="w-full order-last mt-4 md:order-none md:w-auto md:mt-0">
          <SearchBar />
        </div>
        {/* icon */}
        <div className="flex items-center gap-x-3">
          {isSuccess ? (
            <div className="flex items-center">
              <p className="text-black mr-2">{infoUser.name}</p>
              <LogOut
                onClick={handleLogout}
                className="size-8 cursor-pointer"
              />
            </div>
          ) : (
            <CircleUserRound
              onClick={handleCheckLogin}
              className="size-8 cursor-pointer"
            />
          )}

          <div className="relative">
            {data.length > 0 && (
              <span
                className="absolute -top-3 -right-3 
                 bg-red-600 text-white text-xs font-bold 
                 rounded-full size-6
                 flex items-center justify-center"
              >
                {data.length}
              </span>
            )}
            <ShoppingCartIcon
              onClick={handleCheckCart}
              className="size-8 cursor-pointer"
            />
          </div>

          <TextAlignJustify
            onClick={openMenu}
            className="size-8 cursor-pointer lg:hidden"
          />
        </div>
      </nav>

      {/* login */}
      <Signin
        check={checkLogin}
        checkLogin={handleLogin}
        username={email}
        password={password}
        setUsername={setEmail}
        setPassword={setPassword}
        handleKeyDown={handleKeyDown}
      />

      {/* cart */}
      <Cart
        checkClick={checkCart}
        data={data}
        onClose={handleCheckCart}
        onMinus={onMinus}
        onPlus={onPlus}
        onDelete={onDelete}
        formattedTotal={formattedTotal}
      />

      {/* responsive */}
      <ResponsiveMenu open={checkMobile} openMenu={openMenu} />
    </>
  );
};

export default NavBar;
