import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_DB);
    console.log("Ket noi voi CSDL thanh cong");
  } catch (error) {
    console.error("Ket noi CSDL that bai", error);
    process.exit(1); // thoat
  }
};

export default connectionDB;
