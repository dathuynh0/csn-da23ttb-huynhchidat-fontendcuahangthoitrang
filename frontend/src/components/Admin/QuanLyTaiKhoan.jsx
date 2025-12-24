import { Pen, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { toast } from "sonner";
import { Input } from "../ui/input";

const QuanLyTaiKhoan = () => {
  const { accounts, setAccounts } = useContext(Context);

  const [editId, setEditID] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [addAccount, setAddAccount] = useState(false);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      setAccounts(res.data);
    } catch (error) {
      console.error("Loi khi goi api: ", error);
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    auth: "admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      setIsEdit(false);
      await axios.put(`http://localhost:8080/api/users/${editId}`, {
        name: name,
        userName,
        password,
        email,
        auth,
      });
      fetchUser();
      toast.success("Doi thanh cong!");
    } catch (error) {
      console.error("Loi khi goi api: ", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      updateUser();
    }
  };

  const addUser = async (
    firstName,
    lastName,
    username,
    password,
    email,
    auth
  ) => {
    try {
      await axios.post("http://localhost:8080/api/users", {
        name: `${firstName} ${lastName}`,
        username,
        password,
        email,
        auth,
      });

      fetchUser();
    } catch (error) {
      console.error("Loi khi goi api: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, username, password, email, auth } = formData;

    if (!firstName || !lastName || !username || !password || !email || !auth) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const checkAccount = accounts.find((acc) => acc.username === username);
    if (checkAccount) {
      toast.error("Tài khoản đã tồn tại không thể tạo mới");
      return;
    }

    console.log(checkAccount);

    addUser(firstName, lastName, username, password, email, auth);
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      auth: "admin",
    });
    toast.success("Tạo tài khoản thành công");
  };

  // delete account
  const handleDeleteAccount = async (account) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${account._id}`);
      fetchUser();
      toast.success("Xoa tài khoản thành công");
    } catch (error) {
      console.error("Loi khi goi api: ", error);
    }
  };

  return (
    <div className="p-4 w-full h-full">
      {/* thanh dieu huong */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Quản lý tài khoản</h2>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setAddAccount(false)}
            variant={"ghost"}
            className="border bg-blue-600 text-white cursor-pointer hover:opacity-85"
          >
            Tất cả tài khoản
          </Button>
          <Button
            onClick={() => setAddAccount(true)}
            variant={"ghost"}
            className="border bg-blue-600 text-white cursor-pointer hover:opacity-85"
          >
            <Plus />
            Thêm tài khoản mới
          </Button>
        </div>
      </div>

      {addAccount ? (
        <form onSubmit={handleSubmit}>
          <h2 className="mt-4 text-2xl font-bold text-center">Tạo tài khoản</h2>
          <div className="max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-2">
              <Input
                className="mt-4 w-full text-lg p-5"
                type="text"
                placeholder="Họ"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                className="mt-4 w-full text-lg p-5"
                type="text"
                placeholder="Tên"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <Input
              className="mt-4 w-full text-lg p-5"
              placeholder="Tên tài khoản"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              className="mt-4 w-full text-lg p-5"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
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
            <select
              className="mt-4 py-2 w-[10rem]"
              value={formData.auth}
              onChange={handleChange}
              name="auth"
              id="auth"
            >
              <option value="admin">Quản trị</option>
              <option value="user">Người dùng</option>
            </select>

            <div className="w-full mt-4">
              <Button
                type="submit"
                variant="ghost"
                className="bg-black text-white hover:opacity-80 py-5 px-12 rounded-xl w-full cursor-pointer"
              >
                Tạo tài khoản
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mt-4">
          <h3 className="text-center text-2xl font-bold">Tất cả tài khoản</h3>
          <table className="w-full mt-6">
            <thead>
              <tr className="border uppercase">
                <th className="px-4 py-2 text-center">STT</th>
                <th className="px-4 py-2 text-center">Tên hiển thị</th>
                <th className="px-4 py-2 text-center">Tên tài khoản</th>
                <th className="px-4 py-2 text-center">Mật khẩu</th>
                <th className="px-4 py-2 text-center">Email</th>
                <th className="px-4 py-2 text-center">Chức vụ</th>
                <th className="px-4 py-2 text-center">Tùy chỉnh</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={account._id} className="text-center border">
                  <td>{index + 1}</td>
                  <td>
                    {isEdit && editId === account._id ? (
                      <Input
                        onKeyPress={handleKeyPress}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên hiển thị"
                      />
                    ) : (
                      account.name
                    )}
                  </td>
                  <td>
                    {isEdit && editId === account._id ? (
                      <Input
                        type="text"
                        onKeyPress={handleKeyPress}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nhập tên tài khoản"
                      />
                    ) : (
                      account.username
                    )}
                  </td>
                  <td>
                    {isEdit && editId === account._id ? (
                      <Input
                        type="password"
                        onKeyPress={handleKeyPress}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu"
                      />
                    ) : (
                      account.password
                    )}
                  </td>
                  <td>
                    {isEdit && editId === account._id ? (
                      <Input
                        type="email"
                        onKeyPress={handleKeyPress}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    ) : (
                      account.email
                    )}
                  </td>
                  <td>
                    {isEdit && editId === account._id ? (
                      <Input
                        type="text"
                        onKeyPress={handleKeyPress}
                        value={auth}
                        onChange={(e) => setAuth(e.target.value)}
                        placeholder="Nhập chức vụ"
                      />
                    ) : (
                      account.auth
                    )}
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setEditID(account._id);
                        setIsEdit(true);

                        setUserName(account.username);
                        setPassword(account.password);
                        setEmail(account.email);
                        setName(account.name);
                        setAuth(account.auth);
                      }}
                      variant="outline"
                      size="icon"
                      className="hover:bg-amber-300 hover:text-white mr-1 cursor-pointer"
                    >
                      <Pen className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteAccount(account)}
                      className="hover:bg-red-400 hover:text-white cursor-pointer"
                      variant={"outline"}
                      size={"icon"}
                    >
                      <Trash className="" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuanLyTaiKhoan;
