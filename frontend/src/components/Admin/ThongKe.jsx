import { ArrowDown, ArrowDownToLine, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { bestseller } from "../../lib/data.js";

const ThongKe = () => {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const day = ["Hôm nay", "7 ngày qua", "Tháng này", "Tùy chỉnh"];

  const thongke = [
    {
      title: "Tổng danh thu",
      desc: "200.000.000",
      warehouse: +12.3,
    },
    {
      title: "Tổng số đơn hàng",
      desc: "1.500",
      warehouse: +2.55,
    },
    {
      title: "Sản phẩm đã bán",
      desc: "2.100",
      warehouse: +5.07,
    },
    {
      title: "Số khách mới",
      desc: "90",
      warehouse: -0.12,
    },
  ];

  const banChay = [...bestseller];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">Thống kê & báo cáo</h2>
        <Button
          variant="ghost"
          className="bg-blue-600 text-white cursor-pointer hover:opacity-85"
        >
          <ArrowDownToLine />
          Xuất báo cáo
        </Button>
      </div>

      <div className="mt-2">
        {day.map((day, index) => (
          <Button
            onClick={() => setIndexCurrent(index)}
            className={`mr-2 cursor-pointer ${
              indexCurrent === index ? "bg-blue-600 text-white" : ""
            }`}
            key={index}
            variant="outline"
          >
            {day}
          </Button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {thongke.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* san pham ban nhieu nhat */}
      <div className="mt-4 border rounded-lg p-4">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-lg font-semibold mb-4">
            Top 10 sản phẩm bán nhiều nhất
          </h3>
          <Button variant={"ghost"} className="text-blue-600 hover:underline">
            Xem chi tiết
          </Button>
        </div>
        {/* table */}
        <div className="mt-4 w-full overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg shadow-md">
            <thead className="uppercase">
              <tr className="">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Sản phẩm</th>
                <th className="px-4 py-2 text-left">Giá bán</th>
                <th className="px-4 py-2 text-left">Đã bán</th>
                <th className="px-4 py-2 text-left">Doanh thu</th>
              </tr>
            </thead>

            <tbody>
              {banChay.slice(0, 10).map((product, index) => {
                const priceEnd = product.price.replace(/\./g, "");
                const total = priceEnd * product.sold;
                return (
                  <tr key={index} className="border-b transition-colors">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="flex items-center gap-3 px-4 py-2">
                      <img
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                        src={product.images[0]}
                        alt={product.name}
                      />
                      <span className="font-medium">{product.name}</span>
                    </td>
                    <td className="px-4 py-2 text-gray-500 font-medium">
                      {product.price} VND
                    </td>
                    <td className="px-4 py-2">{product.sold}</td>
                    <td className="px-4 py-2 font-bold">
                      {total.toLocaleString()} VND
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, desc, warehouse }) => {
  return (
    <div className="py-6 px-10 border border-gray-300 hover:bg-blue-300 transition-colors duration-300 rounded-xl">
      <h3 className="text-xl font-light">{title}</h3>
      <h1 className="text-2xl font-bold mb-2">{desc}</h1>
      <span className="text-sm flex items-center">
        {warehouse < 0 ? <ArrowDown /> : <ArrowUp />}{" "}
        <strong className="pl-1">{warehouse}%</strong>
      </span>
    </div>
  );
};

export default ThongKe;
