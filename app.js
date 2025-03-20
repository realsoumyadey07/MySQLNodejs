import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", async(_, res)=> {
    res.send("hello world!");
})

app.listen(PORT, async()=> {
    console.log(`Server is connected to port ${PORT}`);
})