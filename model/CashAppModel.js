const mongoose = require("mongoose");
// สร้าง Schema
const CashAppSchema = mongoose.Schema(
  {
    nameItem: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    remain: { type: Number, required: true },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);
// export model
module.exports = mongoose.model("CashAppModel", CashAppSchema);
