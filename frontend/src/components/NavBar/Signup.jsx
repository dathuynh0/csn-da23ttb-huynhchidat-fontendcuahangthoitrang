import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Link } from "react-router";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  //cập nhật state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addUser = async (name, userName, password) => {
    try {
      await axios.post("http://localhost:8080/api/users", {
        name: name,
        userName: userName,
        password: password,
      });
    } catch (error) {
      console.error("Loi he thong", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, userName, password, confirmPassword } = formData;

    if (!name || !userName || !password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không đúng");
      toast.error("Mật khẩu nhập lại không đúng.");
      return;
    }

    addUser(name, userName, password);
    toast.success("Đăng ký thành công");
  };

  return (
    <>
      <div className="min-h-screen w-full relative bg-white">
        {/* Cool Blue Glow Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Your Content/Components */}
        <div className="absolute z-50 h-screen w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center p-12 rounded-2xl shadow-lg"
          >
            <h1 className="text-2xl lg:text-4xl text-center font-medium uppercase mb-6">
              Đăng ký tài khoản
            </h1>
            <div className="max-w-lg">
              <Input
                className="mt-4 w-full text-lg p-5"
                type="text"
                placeholder="Họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                placeholder="Tên tài khoản"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                type="password"
                placeholder="Mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                type="password"
                placeholder="Nhập lại mật khẩu"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                <Button
                  type="submit"
                  variant="ghost"
                  size="lg"
                  className="bg-black text-white hover:opacity-80 p-6 px-12 rounded-xl mr-0 sm:mr-6 w-full sm:w-auto cursor-pointer"
                >
                  Đăng kí
                </Button>
                <p className="text-base mt-4 sm:mt-0">
                  Bạn đã có tài khoản?
                  <Link
                    to="/signin"
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Đăng nhập ngay
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
