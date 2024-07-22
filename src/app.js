import express from "express";
import cors from "cors"
import cookieParse from "cookie-parser";

const app = express();

app.use(cors({
   origin: process.env.CORSE_ORIGIN,
   credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true , limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParse())

//router import
import userRouter from "./routes/user.router.js";

//routes decleration
app.use("/api/v1/users", userRouter)


export { app }