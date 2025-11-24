import { ArrowDown, ChevronDown, Pen, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { nam } from "../../lib/data";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Pagination from "../Pagination";
import { Input } from "../ui/input";

const QuanLySanPham = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 4;
  const totalPage = Math.ceil(nam.length / itemPerPage);
  const filteredProduct = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return nam.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const show = filteredProduct();

  return (
    <div className="p-6 w-full h-full rounded-lg">
      {/* phần head */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quản lý sản phẩm</h2>
        <Button
          variant={"ghost"}
          size={"lg"}
          className="bg-blue-600 text-white"
        >
          <Plus /> Thêm sản phẩm{" "}
        </Button>
      </div>

      {/* phần main */}
      <div className="mt-6 mx-auto w-full">
        <div className="bg-white rounded-lg p-6">
          <div className="mb-4 flex items-center gap-2">
            <Input placeholder="Tìm kiếm theo tên, mã sản phẩm,..." />
            <Button
              variant="ghost"
              className="bg-blue-600 text-white cursor-pointer"
            >
              Danh mục
              <ChevronDown />
            </Button>
            <Button
              variant="ghost"
              className="bg-blue-600 text-white cursor-pointer"
            >
              Trạng thái
              <ChevronDown />
            </Button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="pb-3 pl-4">Sản phẩm</th>
                <th className="pb-3 text-center pr-4">Giá</th>
                <th className="pb-3 text-center pr-4">Tồn kho</th>
                <th className="pb-3 text-center pr-4">Trạng thái</th>
                <th className="pb-3 text-center pr-4">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {show.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 pl-4">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                        src={product.images[0]}
                        alt={product.name}
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center font-semibold">
                    {product.price}đ
                  </td>
                  <td className="py-4 text-center">{product.warehouse}</td>
                  <td className="py-4 text-center">
                    <Badge className="bg-green-300 text-green-900">
                      {product.status}
                    </Badge>
                  </td>
                  <td className="py-4 pr-4">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-amber-300 cursor-pointer"
                      >
                        <Pen className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-red-300 hover:text-red-600 cursor-pointer"
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* pagination */}
          <div className="mt-4 flex items-center justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuanLySanPham;
