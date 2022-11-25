const express = require("express");
const router = express.Router();
const { AppList, CashData, RemoveItem } = require("../Controller/CashAppCTL");
// เพิ่มรายการ
router.post("/AddList", AppList);
router.get("/CashData", CashData);
router.delete("/delItem/:slug", RemoveItem);
module.exports = router;
