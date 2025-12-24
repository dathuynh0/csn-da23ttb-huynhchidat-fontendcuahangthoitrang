import { Pen } from "lucide-react";
import { Context } from "../../Context";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "sonner";

const Info = () => {
  const { accounts, name } = useContext(Context);

  const [isName, setIsName] = useState(false);
  const [isUserName, setIsUserName] = useState(false);
  const [isPassword, setIsPassWord] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const user = accounts.find((account) => account.username === name);
  const [userAccount, setUserAccount] = useState(user);

  const [nameDisplay, setNameDisplay] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [password, setPassWord] = useState(user.password);
  const [email, setEmail] = useState(user.email);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/users/${userAccount._id}`
      );
      setUserAccount(res.data);
    } catch (error) {
      console.error("Loi kho goi api: ", error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${userAccount._id}`, {
        name: nameDisplay,
        username,
        password,
        email,
      });
      setIsName(false);
      setIsUserName(false);
      setIsPassWord(false);
      setIsEmail(false);
      fetchUser();
      toast.success("Doi thanh cong");
    } catch (error) {
      console.error("Loi kho goi updateUser: ", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      updateUser();
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[400px] space-y-4">
        {/* Tên hiển thị */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Tên hiển thị:</span>
          <div className="flex items-center gap-2">
            {isName ? (
              <Input
                placeholder="Nhập tên hiển thị"
                value={nameDisplay}
                onChange={(e) => setNameDisplay(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{userAccount.name}</span>
            )}
            <Button
              onClick={() => setIsName(true)}
              variant="ghost"
              size="icon"
              className="bg-black hover:opacity-85 cursor-pointer text-white"
            >
              <Pen />
            </Button>
          </div>
        </div>

        {/* Tên tài khoản */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Tên tài khoản:</span>
          <div className="flex items-center gap-2">
            {isUserName ? (
              <Input
                placeholder="Nhập tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{userAccount.username}</span>
            )}
            <Button
              onClick={() => setIsUserName(true)}
              variant="ghost"
              size="icon"
              className="bg-black hover:opacity-85 cursor-pointer text-white"
            >
              <Pen />
            </Button>
          </div>
        </div>

        {/* Mật khẩu */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Mật khẩu:</span>
          <div className="flex items-center gap-2">
            {isPassword ? (
              <Input
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{userAccount.password}</span>
            )}
            <Button
              onClick={() => setIsPassWord(true)}
              variant="ghost"
              size="icon"
              className="bg-black hover:opacity-85 cursor-pointer text-white"
            >
              <Pen />
            </Button>
          </div>
        </div>

        {/* email */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Email:</span>
          <div className="flex items-center gap-2">
            {isEmail ? (
              <Input
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{userAccount.email}</span>
            )}
            <Button
              onClick={() => setIsEmail(true)}
              variant="ghost"
              size="icon"
              className="bg-black hover:opacity-85 cursor-pointer text-white"
            >
              <Pen />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
