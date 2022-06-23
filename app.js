const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
const { connect } = require("mongoose");

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベースと接続
const start = async () => {
    try {
        await connectDB("mongodb+srv://sorakawa101:Sorakawa.101@cluster0.da1mi.mongodb.net/?retryWrites=true&w=majority");
        app.listen(PORT, console.log("Server Activate!"));
    } catch {
        console.log(err);
    }
};

start();