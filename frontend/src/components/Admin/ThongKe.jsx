import { ArrowDown, ArrowDownToLine, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

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

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">Thống kê & báo cáo</h2>
        <Button
          variant="ghost"
          className="bg-blue-600 text-white cursor-pointer"
        >
          <ArrowDownToLine />
          Xuất báo cáo
        </Button>
      </div>

      <div className="mt-6">
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

      <div className="mt-6 grid grid-cols-4 gap-4">
        {thongke.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, desc, warehouse }) => {
  return (
    <div className="py-6 px-10 bg-red-200 rounded-xl">
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
