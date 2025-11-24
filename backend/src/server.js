import express from "express";
import routerUser from "./routes/routerUser.js";
import connectionDB from "./config/connectionDB.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const port = 8080;

//middleware chuyen req body ve json
app.use(express.json());
app.use(cors());

app.use("/api/users", routerUser);

connectionDB().then(() => {
  app.listen(port, () => {
    console.log(`Server dang chay tren cong ${port}`);
  });
});
