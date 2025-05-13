import express from "express";
import testRoute from "./routes/testRoute.js";
import authRoute from "./routes/authRoute.js";
import inventoryRoute from "./routes/inventoryRoute.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connect_DB from "./config/db.js";
const app = express();
dotenv.config();
//mongo db connection
connect_DB();
const PORT = process.env.PORT || 8080;
//middle ware
app.use(cors()); //used to connect different port numbers of react app and backend server
app.use(express.json()); //now our application can handle json format as well
app.use(morgan("dev"));
//routes
app.use("/test", testRoute);
app.use("/auth", authRoute);
app.use("/inventory", inventoryRoute);
app.use("/analytics", analyticsRoutes);
app.use("/admin", adminRoutes);
app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`.bgMagenta.white);
});
