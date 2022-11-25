// Set Tool
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cashApp = require("./Router/CashApp");
const mongoose = require("mongoose");

// เชื่อม MongoDB

mongoose
  .connect(process.env.CASHAPPDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("เชื่อมฐานข้อมูลสำเร็จ");
  })
  .catch((err) => console.log(err));
const app = express();

// Set up
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// เชื่อม Route
app.use("/api", cashApp);

// เชื่อม Port
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`กำลังทำงานที่ Port ${port}`);
});
