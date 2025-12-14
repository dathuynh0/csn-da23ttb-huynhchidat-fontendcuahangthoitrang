import { ArrowDown, Pen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Pagination from "../Pagination";
import { Input } from "../ui/input";

const DonHang = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      ngayDat: "02/10/2023",
      tongTien: 150000,
      trangThai: "Đang xử lý",
    },
    {
      ngayDat: "03/10/2023",
      tongTien: 250000,
      trangThai: "Đã giao",
    },
    {
      ngayDat: "18/12/2024",
      tongTien: 350000,
      trangThai: "Đã hủy",
    },
    {
      ngayDat: "20/12/2024",
      tongTien: 450000,
      trangThai: "Đang xử lý",
    },
    {
      ngayDat: "25/12/2024",
      tongTien: 550000,
      trangThai: "Đã giao",
    },
    {
      ngayDat: "28/12/2024",
      tongTien: 650000,
      trangThai: "Đã hủy",
    },
    {
      ngayDat: "30/12/2024",
      tongTien: 750000,
      trangThai: "Đang xử lý",
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemPerPage = 10;
  const totalPages = Math.ceil(data.length / itemPerPage);

  const filteredPage = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return data.slice(startIndex, endIndex);
  };

  const show = filteredPage();
  return (
    <div className="p-6 w-full h-full overflow-x-auto">
      {/* tiêu đề */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Quản lý đơn hàng</h1>
      </div>
      <div className="mt-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <Input
            className="w-1/3"
            type="text"
            placeholder="Tìm kiếm theo mã đơn khách hàng..."
          />
          <div>
            <Button
              className="p-4 bg-blue-600 text-white cursor-pointer hover:opacity-85"
              variant={"ghost"}
            >
              <ArrowDown /> Xuất Excel
            </Button>
          </div>
        </div>

        <table className="mt-4 min-w-full border-collapse">
          <thead className="uppercase">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Mã ĐH</th>
              <th className="px-4 py-3 text-left">Ngày đặt</th>
              <th className="px-4 py-3 text-left">Tổng tiền</th>
              <th className="px-4 py-3 text-left">Trạng thái</th>
              <th className="px-4 py-3 text-left">Tùy chỉnh</th>
            </tr>
          </thead>

          <tbody>
            {show.map((order, index) => {
              const ma = "ĐH" + Math.floor(Math.random() * 1000000);
              return (
                <tr
                  key={index + 1}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{ma}</td>
                  <td>{order.ngayDat}</td>
                  <td className="px-4 py-3 font-medium">
                    {order.tongTien.toLocaleString()} VND
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    order.trangThai === "Đã giao"
                      ? "bg-green-100 text-green-700"
                      : order.trangThai === "Đang xử lý"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                    >
                      {order.trangThai}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        className="hover:bg-amber-400 hover:text-white transition-colors duration-300 cursor-pointer"
                        variant="ghost"
                        size="icon"
                      >
                        <Pen />
                      </Button>
                      <Button
                        className="hover:bg-red-400 hover:text-white transition-colors duration-300 cursor-pointer"
                        variant="ghost"
                        size="icon"
                      >
                        <Trash />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DonHang;
