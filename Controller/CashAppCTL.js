const slugify = require("slugify");
const { v4: uuidv4 } = require("uuid");
const CashApp = require("../model/CashAppModel");
module.exports = {
  // Api เพิ่มรายการ
  AppList: (req, res) => {
    // รับข้อมูล
    const { nameItem, remain, amount } = req.body;
    const slug = slugify(uuidv4());
    // ตรวจสอบความถูกต้อง
    switch (true) {
      case !nameItem:
        return res.status(400).json({ error: "นายลืมพิมพ์อะไรรึป่าว?" });
      case !amount:
        return res.status(400).json({ error: "นายลืมพิมพ์อะไรรึป่าว?" });
      default:
        break;
    }
    // บันทึกข้อมูลลง MongoDB
    CashApp.create({ nameItem, amount, remain, slug }, (err, suc) => {
      if (err) return res.status(400).json({ error: err });
      res.json(suc);
    });
  },
  CashData: (req, res) => {
    CashApp.find().exec((err, find) => {
      if (err) console.log(err);
      res.json(find);
    });
  },
  RemoveItem: (req, res) => {
    const {slug} = req.params
    CashApp.findOneAndDelete({ slug }).exec((err, del) => {
      if (err) console.log(err);
      res.json(del);
    });
  },
};
