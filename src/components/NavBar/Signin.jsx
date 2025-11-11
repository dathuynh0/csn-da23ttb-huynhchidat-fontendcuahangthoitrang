import { AnimatePresence, motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const Signin = ({
  check,
  buttonX,
  checkLogin,
  username,
  password,
  setUsername,
  setPassword,
  handleKeyDown,
}) => {
  return (
    <>
      <AnimatePresence>
        {check && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed w-full lg:w-[40rem] z-20 bg-slate-200 rounded-xl p-4"
          >
            <div className="relative">
              <X
                onClick={buttonX}
                className="absolute top-0 right-0 cursor-pointer"
              />
              <h1 className="mt-4 text-2xl uppercase text-center">
                Đăng nhập tài khoản
              </h1>
              <p className="text-center text-lg font-light text-gray-800">
                Nhập email và mật khẩu của bạn:
              </p>

              <hr className="m-4 w-full text-center border-1" />

              <Input
                className="mt-4 w-full p-5 text-xl"
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Input
                className="mt-4 w-full p-5 text-xl"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <div className="flex justify-center mt-6">
                <Button
                  onClick={checkLogin}
                  className="inline-block w-2/3 border-1 cursor-pointer bg-black text-white rounded-xl hover:opacity-80"
                >
                  Đăng nhập
                </Button>
              </div>

              <p className="text-right mt-4 text-base">
                Bạn chưa có tài khoản?
                <a className="text-blue-600 hover:underline" href="/signup">
                  Đăng kí ngay
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Signin;
