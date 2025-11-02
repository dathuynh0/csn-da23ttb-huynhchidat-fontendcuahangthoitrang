import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 left-[40%] inset-0 z-20"
            >
              <div className="text-xl uppercase font-semibold bg-gray-300 text-black w-full h-full overflow-y-auto pt-10 pb-10 px-6">
                <div className="flex justify-end">
                  <X
                    onClick={openMenu}
                    className="size-8 cursor-pointer lg:hidden"
                  />
                </div>
                <ul className="mt-8 flex flex-col justify-center items-center gap-10">
                  <li>
                    <NavLink to="/">Trang chủ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sale">Sale</NavLink>
                  </li>

                  <li className="w-full relative">
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                      <NavLink to="/do-nam">Đồ nam</NavLink>
                      <ChevronDown
                        onClick={() => setDropdownNamOpen(!dropdownNamOpen)}
                        className={`top-0 bottom-0 transition-transform duration-300 ${
                          dropdownNamOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {dropdownNamOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center gap-4 mt-4 text-lg overflow-hidden"
                        >
                          <li className="hover:text-amber-200 transition-colors">
                            <NavLink to="/do-nam/ao">Áo</NavLink>
                          </li>
                          <li className="hover:text-amber-200 transition-colors">
                            <NavLink to="/do-nam/quan">Quần</NavLink>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                      <NavLink to="/do-nu">Đồ nữ</NavLink>
                      <ChevronDown
                        onClick={() => setDropdownNuOpen(!dropdownNuOpen)}
                        className={`transition-transform duration-300 ${
                          dropdownNuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {dropdownNuOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center gap-4 mt-4 text-lg overflow-hidden"
                        >
                          <li className="hover:text-amber-200 transition-colors">
                            <NavLink to="/do-nu/ao">Áo</NavLink>
                          </li>
                          <li className="hover:text-amber-200 transition-colors">
                            <NavLink to="/do-nu/quan">Quần</NavLink>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
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
