const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
const { connect } = require("mongoose");
require("dotenv").config();
app.use(express.json());

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベースと接続
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, console.log("Server Activate!"));
    } catch {
        console.log(err);
    }
};

start();