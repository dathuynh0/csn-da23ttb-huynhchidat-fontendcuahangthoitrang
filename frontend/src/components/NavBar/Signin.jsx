import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../Context";
import { toast } from "sonner";

const Signin = () => {
  const { accounts, setAccounts, setIsSuccess, setName } = useContext(Context);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //set data vào account
  useEffect(() => {
    const getAccounts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users");
        setAccounts(res.data);
      } catch (error) {
        console.error("Loi khi goi data ", error);
      }
    };

    //goi ham
    getAccounts();
  }, [accounts, setAccounts]);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userName && !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu");
      toast.error("Đăng nhâp thất bại!");
      return;
    }

    const checkUser = accounts.find((acc) => acc.userName === userName);

    //check email
    if (!checkUser) {
      toast.error("Tài khoản không đúng");
      return;
    }

    //check password
    if (checkUser.password !== password) {
      toast.error("Mật khẩu không đúng");
      return;
    }

    //thành công
    toast.success(`Đăng nhập thành công.`);
    setIsSuccess(true);
    setName(userName);
    setUserName("");
    setPassword("");
    navigate("/");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <div className="min-h-screen w-full relative bg-white">
        {/* Cool Blue Glow Right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Your Content/Components */}
        <section className="absolute z-50 h-screen w-full flex items-center justify-center">
          <div className="w-full lg:w-xl rounded-xl shadow-lg p-12">
            <div>
              <h1 className="mt-4 text-2xl lg:text-4xl text-center uppercase">
                Đăng nhập
              </h1>

              <Input
                className="mt-8 w-full p-5 text-xl"
                type="text"
                placeholder="Tên tài khoản"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Input
                className="mt-4 w-full p-5 text-xl"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />

              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLogin}
                  variant="ghost"
                  size="lg"
                  className="inline-block w-full border-1 cursor-pointer bg-black text-white rounded-xl hover:opacity-80"
                >
                  Đăng nhập
                </Button>
              </div>

              <p className="text-right mt-4 text-base">
                Bạn chưa có tài khoản?
                <Link className="text-blue-600 hover:underline" to="/signup">
                  Đăng kí ngay
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signin;
