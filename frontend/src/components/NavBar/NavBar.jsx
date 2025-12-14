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
import { toast } from "sonner";
import SearchBar from "./SearchBar.jsx";
import Cart from "./Cart.jsx";
import { Context } from "../../Context.jsx";
import { Button } from "../ui/button.jsx";
import Info from "./Info.jsx";

const NavBar = ({
  data,
  onMinus,
  onPlus,
  onDelete,
  setCartItems,
  formattedTotal,
}) => {
  const { isSuccess, setIsSuccess, accounts, name, checkCart, setCheckCart } =
    useContext(Context);

  const [checkMobile, setCheckMobile] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const openMenu = () => {
    setCheckMobile(!checkMobile);
  };

  const handleLogout = () => {
    setIsSuccess(false);
    setCartItems([]);
    toast.success("Đăng xuất thành công");
  };

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleCheckCart = () => {
    setCheckCart(!checkCart);
  };

  const findUser = accounts.find((account) => account.userName === name);

  return (
    <>
      <nav className="flex flex-col py-6 flex-wrap w-full lg:container mx-auto">
        <div className="flex items-center justify-between flex-wrap w-full">
          {/* logo */}
          <Link to="/">
            <p className="text-3xl font-extrabold bg-gradient-to-b from-white/20 to-black inline-block text-transparent bg-clip-text">
              M O D A
            </p>
          </Link>

          {/* item */}
          <div className="hidden lg:block">
            <ul className="flex items-center justify-center gap-x-6 text-md text-black uppercase">
              <li>
                <NavLink className="hover:opacity-85 hover:underline" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:opacity-85 hover:underline"
                  to="/tat-ca-san-pham"
                >
                  Tất cả sản phẩm
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:opacity-85 hover:underline"
                  to="/sale"
                >
                  Sale
                </NavLink>
              </li>

              <li className="relative group">
                <div className="flex items-center gap-x-1">
                  <NavLink
                    className="hover:opacity-85 hover:underline"
                    to="/do-nam"
                  >
                    Đồ nam
                  </NavLink>
                  <ChevronDown />
                </div>

                <div
                  className="absolute top-full left-0 bg-white rounded-md shadow-md overflow-hidden
                  opacity-0 invisible pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                  transition-all duration-300 z-50"
                >
                  <ul className="py-4 min-w-[200px] px-4">
                    <li className="hover:underline">
                      <NavLink
                        className="hover:opacity-85 hover:underline"
                        to="/do-nam/ao-nam"
                      >
                        Áo
                      </NavLink>
                    </li>
                    <li className="mt-2 hover:underline">
                      <NavLink
                        className="hover:opacity-85 hover:underline"
                        to="/do-nam/quan-nam"
                      >
                        Quần
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative group">
                <div className="flex items-center gap-x-1">
                  <NavLink
                    className="hover:opacity-85 hover:underline"
                    to="/do-nu"
                  >
                    Đồ nữ
                  </NavLink>
                  <ChevronDown />
                </div>

                <div
                  className="absolute top-full left-0 bg-white rounded-md shadow-md overflow-hidden 
                opacity-0 invisible pointer-events-none 
                group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                transition-all duration-300 z-50"
                >
                  <ul className="py-4 min-w-[200px] px-4">
                    <li className="hover:underline">
                      <NavLink
                        className="hover:opacity-85 hover:underline"
                        to="/do-nu/ao-nu"
                      >
                        Áo
                      </NavLink>
                    </li>
                    <li className="mt-2 hover:underline">
                      <NavLink
                        className="hover:opacity-85 hover:underline"
                        to="/do-nu/quan-nu"
                      >
                        Quần
                      </NavLink>
                    </li>
                    <li className="mt-2 hover:underline">
                      <NavLink
                        className="hover:opacity-85 hover:underline"
                        to="/do-nu/dam"
                      >
                        Đầm
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  className="hover:opacity-85 hover:underline"
                  to="/phu-kien"
                >
                  Phụ kiện
                </NavLink>
              </li>
            </ul>
          </div>
          {/* search mobile */}
          <div className="w-full block lg:hidden order-last mx-auto mt-4 ">
            <SearchBar />
          </div>

          {/* icon */}
          <div className="flex items-center justify-end gap-x-3">
            {/* search */}
            <div className="w-full hidden lg:block mx-auto">
              <SearchBar />
            </div>

            {isSuccess ? (
              <Button
                onClick={handleShowInfo}
                variant="ghost"
                className="relative p-2 hover:border transition-all duration-300 hover:shadow-2xl"
              >
                <CircleUserRound className="size-7 lg:size-8 cursor-pointer" />
                <ChevronDown className={`size-5 ${showInfo && "rotate-180"}`} />
                {showInfo && (
                  <div className="absolute flex flex-col items-start w-50 top-10 left-0  p-6 rounded-lg bg-white">
                    {/* neu la tk admin */}
                    {findUser.auth === "admin" ? (
                      <Button className="hover:underline">
                        <Link to="/admin">Admin</Link>
                      </Button>
                    ) : (
                      ""
                    )}

                    <Button className="hover:underline" variant="ghost">
                      <Link to="/thong-tin">Thông tin</Link>
                    </Button>
                    <Button
                      className="hover:underline"
                      variant="ghost"
                      onClick={handleLogout}
                    >
                      <p className="text-sm">Đăng xuất</p>
                      <LogOut />
                    </Button>
                  </div>
                )}
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="p-2 hover:border transition-all duration-300 hover:shadow-2xl"
              >
                <Link to="/signin">
                  <CircleUserRound className="size-7 lg:size-8 cursor-pointer" />
                </Link>
              </Button>
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
                className="size-7 lg:size-8 cursor-pointer"
              />
            </div>

            <TextAlignJustify
              onClick={openMenu}
              className="size-7 lg:size-8 cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </nav>

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
