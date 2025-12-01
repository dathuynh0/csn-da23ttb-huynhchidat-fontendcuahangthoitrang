import { ChartNoAxesCombined, Shirt, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";
import ThongKe from "./ThongKe";
import QuanLySanPham from "./QuanLySanPham";
import QuanLyDanhMuc from "./QuanLyDanhMuc";
import QuanLyTaiKhoan from "./QuanLyTaiKhoan";
import { Link } from "react-router";

const AdminNav = () => {
  const data = [
    {
      icon: <ChartNoAxesCombined />,
      title: "Thống kê",
    },
    {
      icon: <Shirt />,
      title: "Quản lý sản phẩm",
    },
    {
      icon: <ShoppingBasket />,
      title: "Quản lý danh mục",
    },
    {
      icon: <User />,
      title: "Quản lý tài khoản",
    },
  ];

  const [indexCurrent, setIndexCurrent] = useState(0);

  return (
    <div className="mt-8 grid grid-cols-10 h-screen">
      {/* nav */}
      <ul className="col-span-2 p-2 space-y-2">
        <Link className="mt-2 p-2" to="/">
          Trang chủ
        </Link>
        {data.map((item, index) => {
          console.log(indexCurrent);

          return (
            <li
              onClick={() => setIndexCurrent(index)}
              key={index}
              className={`mt-2 flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 hover:text-white ${
                index === indexCurrent ? "bg-blue-600 text-white" : ""
              }`}
            >
              {item.icon}
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>

      {/* view */}
      <div className="col-span-8 h-screen bg-white">
        {indexCurrent === 0 && <ThongKe />}
        {indexCurrent === 1 && <QuanLySanPham />}
        {indexCurrent === 2 && <QuanLyDanhMuc />}
        {indexCurrent === 3 && <QuanLyTaiKhoan />}
      </div>
    </div>
  );
};

export default AdminNav;
