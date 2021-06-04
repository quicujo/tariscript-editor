const { TariScript } = require("tari_crypto");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  let crypto = TariScript.new();
  let message = crypto.hello();
  let script = Buffer.from("73", "hex");
  try {
    let r = crypto.execute(script, new Uint8Array(0));
    console.log(r);
  } catch (e) {
    console.error(e);
    res.render("index", {
      message: e,
      result: -1,
    });
    return;
  }
  res.render("index", {
    message: message,
    result: r,
  });
});

module.exports = router;
