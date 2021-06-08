const { TariScript } = require("tari_crypto");
var express = require("express");
var router = express.Router();

router.post("/run", async function (req, res, next) {
  let crypto = TariScript.new();

  console.log(req.body);
  let message = crypto.hello();
  let script = Buffer.from(req.body.script, "hex");
  let input = Buffer.from(req.body.input, "hex");
  let blockHeight = req.body.blockHeight;
  try {
    let r = crypto.trace(script, input, blockHeight);
    console.log(r);
    res.json({
      message: message,
      result: r,
    });
  } catch (e) {
    console.error(e);
    res.json({
      message: e,
      error: true,
    });
  }
});

module.exports = router;
