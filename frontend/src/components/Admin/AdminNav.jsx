import {
  ChartNoAxesCombined,
  Home,
  LogOut,
  Shirt,
  ShoppingBasket,
  User,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router";
import { Button } from "../ui/button";
import { Context } from "../../Context";
import { useNavigate } from "react-router";

const AdminNav = () => {
  const { setIsSuccess } = useContext(Context);
  const navigate = useNavigate();
  const data = [
    {
      icon: <ChartNoAxesCombined />,
      title: "Thống kê",
      link: "/admin",
    },
    {
      icon: <Shirt />,
      title: "Quản lý sản phẩm",
      link: "/admin/quan-ly-san-pham",
    },
    {
      icon: <ShoppingBasket />,
      title: "Đơn hàng",
      link: "/admin/quan-ly-don-hang",
    },
    {
      icon: <ShoppingBasket />,
      title: "Quản lý danh mục",
      link: "/admin/quan-ly-danh-muc",
    },
    {
      icon: <User />,
      title: "Quản lý tài khoản",
      link: "/admin/quan-ly-tai-khoan",
    },
  ];

  const [indexCurrent, setIndexCurrent] = useState(0);

  return (
    <div className="grid grid-cols-10 h-screen">
      {/* nav */}
      <ul className="bg-slate-200 col-span-2 p-2 space-y-2">
        <div className="flex flex-col justify-between h-full">
          <div>
            <li className="hover:bg-blue-600 hover:text-white inline-block rounded-lg w-full p-3 transition-all duration-300">
              <Link to="/" className="flex items-center gap-3">
                <Home />
                Trang chủ
              </Link>
            </li>
            {data.map((item, index) => {
              console.log(indexCurrent);

              return (
                <li
                  onClick={() => setIndexCurrent(index)}
                  key={index}
                  className={`mt-2 flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ${
                    index === indexCurrent ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Link
                    to={item.link}
                    className="w-full flex items-center gap-3"
                  >
                    {item.icon}
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </div>

          <Button
            onClick={() => {
              setIsSuccess(false);
              navigate("/");
            }}
            className="w-full p-5 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <LogOut className="size-5" />
            Đăng xuất
          </Button>
        </div>
      </ul>
      <div className="col-span-8 h-full bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminNav;
