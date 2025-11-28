import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//Routes import
import router from "./routes/jsonfile.route.js";

//Routes declaration
// app.use("api/v1/upload", )
app.use("/api/v1/upload", router);
app.use("/", (req, res)=>{
    res.send("hi");
})

export { app };
