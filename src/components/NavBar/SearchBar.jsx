import React, { useContext } from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { Context } from "../../Context";

const SearchBar = () => {
  const { search, setSearch, handleSearchChange } = useContext(Context);

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChange={handleSearchChange}
        className="w-full pr-7 pl-4 border border-gray-300 rounded-full focus:ring-2 transition-all duration-200 shadow-sm"
      />
      {search ? (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      ) : (
        <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          <Search className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
