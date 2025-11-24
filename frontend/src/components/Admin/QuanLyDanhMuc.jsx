import { Pen, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const QuanLyDanhMuc = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quản lý danh mục sản phẩm</h2>
        <Button variant="ghost" className="bg-blue-600 text-white">
          <Plus />
          Thêm danh mục mới
        </Button>
      </div>
      <div className="my-4 py-4 bg-slate-100 p-2 rounded-xl">
        <Input placeholder="Tìm kiếm danh mục..." />
      </div>
      {/* main */}
      <div className="my-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start text-gray-400">Tên danh mục</th>
              <th className="text-start text-gray-400">Mô tả</th>
              <th className="text-center text-gray-400">Hành động</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>
                <p className="text-start">Sản phẩm nam</p>
              </td>
              <td>
                <p>Sản phẩm nam thời thương, phù hợp dân văn phòng</p>
              </td>
              <td>
                <div className="py-3 flex items-center justify-center gap-1">
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

            <tr className="border-b">
              <td>
                <p className="text-center">Quần nam</p>
              </td>
              <td>
                <p>Nhiều loại quần phù hợp với nhiều cuộc vui</p>
              </td>
              <td>
                <div className="py-3 flex items-center justify-center gap-1">
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

            <tr className="border-b">
              <td>
                <p className="text-start">Sản phẩm nữ</p>
              </td>
              <td>
                <p>Thời trang thời thượng giành cho phụ nữ</p>
              </td>
              <td>
                <div className="py-3 flex items-center justify-center gap-1">
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

            <tr className="border-b">
              <td>
                <p className="text-center">Váy</p>
              </td>
              <td>
                <p>Váy sang trọng</p>
              </td>
              <td>
                <div className="py-3 flex items-center justify-center gap-1">
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

            <tr className="border-b">
              <td>
                <p className="text-start">Phụ kiện</p>
              </td>
              <td>
                <p>Góp phần tăng sự sang trọng khi mang</p>
              </td>
              <td>
                <div className="py-3 flex items-center justify-center gap-1">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyDanhMuc;
