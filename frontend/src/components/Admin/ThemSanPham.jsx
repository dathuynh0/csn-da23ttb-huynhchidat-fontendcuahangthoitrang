import { Link } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus, Shirt } from "lucide-react";

const ThemSanPham = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Thêm sản phẩm</h1>
        <div className="space-x-2">
          <Button
            variant={"ghost"}
            size={"lg"}
            className="bg-blue-600 text-white"
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
            className="bg-blue-600 text-white"
          >
            <Link to="/admin/them-san-pham" className="flex items-center gap-2">
              <Plus /> Thêm sản phẩm
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-8 w-3xl mx-auto shadow-lg p-6 rounded-lg">
        <form action="">
          {/* mã */}
          <div>
            <label htmlFor="codeProduct" className="text-lg">
              Mã sản phẩm <span className="text-red-500">*</span>
            </label>
            <Input type="text" id="codeProduct" placeholder="VD: SP001" />
          </div>

          {/* tên */}
          <div className="mt-4">
            <label htmlFor="nameProduct" className="text-lg">
              Tên sản phẩm <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="nameProduct"
              placeholder="VD: Áo Thun Polo Basic"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="priceProduct" className="text-lg">
              Giá sản phẩm (VNĐ) <span className="text-red-500">*</span>
            </label>
            <Input type="number" id="priceProduct" placeholder="VD: 250000" />
          </div>

          {/* hình ảnh */}
          <div>
            <label
              htmlFor="imageProduct"
              className="text-lg w-full h-200px block mt-4"
            >
              Hình ảnh đại diên <span className="text-red-500">*</span>
            </label>
            <Input type="file" id="imageProduct" />
            <label
              htmlFor="imageProductOther"
              className="mt-4 inline-block text-lg"
            >
              Hình ảnh liên quan
            </label>
            <Input type="file" id="imageProductOther" multiple />
          </div>

          {/* tồn kho */}
          <div className="mt-4">
            <label htmlFor="stockProduct" className="text-lg mt-4">
              Tồn kho <span className="text-red-500">*</span>
            </label>
            <Input type="number" id="stockProduct" placeholder="VD: 100" />
          </div>

          {/* trạng thái */}
          <div className="mt-4">
            <label htmlFor="statusProduct" className="text-lg mt-4">
              Trạng thái <span className="text-red-500">*</span>
            </label>
            <select
              name="statusProduct"
              id="statusProduct"
              className="w-full border mt-2 p-2 rounded-lg"
            >
              <option value="inStock">Còn hàng</option>
              <option value="outOfStock">Hết hàng</option>
            </select>
          </div>

          {/* danh muc */}
          <div className="mt-4">
            <label htmlFor="categoryProduct" className="text-lg mt-4">
              Danh mục <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border mt-2 p-2 rounded-lg"
              name="categoryProduct"
              id="categoryProduct"
            >
              <option value="nam">Nam</option>
              <option value="aoNam">Áo nam</option>
              <option value="quanNam">Quần nam</option>
              <option value="nu">Nữ</option>
              <option value="aoNu">Áo nữ</option>
              <option value="quanNu">Quần nữ</option>
              <option value="dam">Đầm</option>
              <option value="phuKien">Phụ kiện</option>
            </select>
          </div>

          {/* mô tả */}
          <div className="mt-4">
            <label htmlFor="" className="text-lg">
              Mô tả sản phẩm <span className="text-red-500">*</span>
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full border mt-2 p-2 rounded-lg"
              placeholder="Nhập mô tả sản phẩm..."
            ></textarea>
          </div>

          <div className="space-x-2 text-end mt-4">
            <Button
              type="cancel"
              variant="ghost"
              className="inline-block bg-blue-600 text-white cursor-pointer hover:opacity-85"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="ghost"
              className="inline-block bg-blue-600 text-white cursor-pointer hover:opacity-85"
            >
              Thêm vào
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThemSanPham;
