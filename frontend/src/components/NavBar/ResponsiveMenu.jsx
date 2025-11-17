import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Shirt, X } from "lucide-react";
import { NavLink } from "react-router";

const ResponsiveMenu = ({ open, openMenu }) => {
  const [dropdownNamOpen, setDropdownNamOpen] = useState(false);
  const [dropdownNuOpen, setDropdownNuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 bg-black/25 backdrop-blur-sm"
              onClick={openMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-[30%] inset-0 z-20"
            >
              <div className="text-xl uppercase font-medium bg-gray-300 text-black w-full h-full pt-10 pb-10 px-10">
                <div className="flex justify-end">
                  <X onClick={openMenu} className="size-7 cursor-pointer" />
                </div>
                <ul className="mt-8 flex flex-col justify-center gap-8">
                  <li>
                    <NavLink to="/">Trang chủ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sale">Sale</NavLink>
                  </li>

                  <li className="w-full relative">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <NavLink to="/do-nam">Đồ nam</NavLink>
                      <ChevronDown
                        onClick={() => setDropdownNamOpen(!dropdownNamOpen)}
                        className={`top-0 bottom-0 transition-transform duration-300 ${
                          dropdownNamOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {dropdownNamOpen && (
                      <div className="ml-2 flex flex-col gap-4 mt-4 text-lg overflow-hidden">
                        <li className="border-b">
                          <NavLink to="/do-nam/ao-nam">Áo</NavLink>
                        </li>
                        <li className="border-b">
                          <NavLink to="/do-nam/quan-nam">Quần</NavLink>
                        </li>
                      </div>
                    )}
                  </li>
                  <li className="w-full">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <NavLink to="/do-nu">Đồ nữ</NavLink>
                      <ChevronDown
                        onClick={() => setDropdownNuOpen(!dropdownNuOpen)}
                        className={`transition-transform duration-300 ${
                          dropdownNuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {dropdownNuOpen && (
                      <div className="ml-2 flex flex-col gap-4 mt-4 text-lg overflow-hidden">
                        <li className="border-b">
                          <NavLink to="/do-nu/ao-nu">Áo</NavLink>
                        </li>
                        <li className="border-b">
                          <NavLink to="/do-nu/quan-nu">Quần</NavLink>
                        </li>
                        <li className="border-b">
                          <NavLink to="/do-nu/vay">Váy</NavLink>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <NavLink to="/phu-kien">Phụ kiện</NavLink>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
