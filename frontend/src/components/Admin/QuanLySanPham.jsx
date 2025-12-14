import { ChevronDown, Pen, Plus, Shirt, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { aoNam, aoNu, bestseller, dam, quanNam, quanNu } from "../../lib/data";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Pagination from "../Pagination";
import { Input } from "../ui/input";
import { Link } from "react-router";

const QuanLySanPham = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    ...aoNam,
    ...quanNam,
    ...aoNu,
    ...quanNu,
    ...dam,
    ...bestseller,
  ];

  const itemPerPage = 5;
  const totalPage = Math.ceil(products.length / itemPerPage);
  const filteredProduct = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return products.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const show = filteredProduct();

  return (
    <div className="p-4 w-full h-full rounded-lg">
      {/* phần head */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quản lý sản phẩm</h2>
        <div className="space-x-2">
          <Button
            variant={"ghost"}
            size={"lg"}
            className="bg-blue-600 text-white hover:opacity-85"
          >
            <Link
              to="/admin/quan-ly-san-pham"
              className="flex items-center gap-2"
            >
              <Shirt /> Tất cả sản phẩm
            </Link>
          </Button>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="bg-blue-600 text-white hover:opacity-85"
          >
            <Link to="/admin/them-san-pham" className="flex items-center gap-2">
              <Plus /> Thêm sản phẩm
            </Link>
          </Button>
        </div>
      </div>

      {/* phần main */}
      <div className="mt-6 mx-auto w-full">
        <div className="bg-white rounded-lg p-6">
          <div className="mb-4 flex items-center gap-2">
            <Input placeholder="Tìm kiếm theo tên, mã sản phẩm,..." />
            <Button
              variant="ghost"
              className="bg-blue-600 text-white cursor-pointer hover:opacity-85"
            >
              Danh mục
              <ChevronDown />
            </Button>
            <Button
              variant="ghost"
              className="bg-blue-600 text-white cursor-pointer hover:opacity-85"
            >
              Trạng thái
              <ChevronDown />
            </Button>
          </div>
          <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="uppercase">
                <th className="py-3 pl-4 text-left">#</th>
                <th className="py-3 pl-4 text-left">Mã</th>
                <th className="py-3 text-center">Sản phẩm</th>
                <th className="py-3 text-center">Giá</th>
                <th className="py-3 text-center">Tồn kho</th>
                <th className="py-3 text-center">Trạng thái</th>
                <th className="py-3 text-center">Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {show.map((product, index) => {
                const productIndex =
                  (currentPage - 1) * itemPerPage + index + 1;
                const randomIndex = "SP" + Math.floor(Math.random() * 100000);
                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="font-bold pl-4 py-3">{productIndex}</td>
                    <td className=" pl-4 font-bold py-3">{randomIndex}</td>
                    <td className="py-3 pl-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-16 h-16 object-cover rounded-lg shadow-sm"
                          src={product.images[0]}
                          alt={product.name}
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-center font-semibold">
                      {product.price} VND
                    </td>
                    <td className="py-3 text-center font-medium">
                      {product.warehouse}
                    </td>
                    <td className="py-3 text-center">
                      <Badge className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-amber-200 hover:text-amber-600 rounded-full p-2 transition"
                        >
                          <Pen className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-red-200 hover:text-red-600 rounded-full p-2 transition"
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
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
