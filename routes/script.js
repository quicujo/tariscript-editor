const { TariScript } = require("tari_crypto");
var express = require("express");
var router = express.Router();

router.post("/run", async function (req, res, next) {
  let crypto = TariScript.new();

  console.log(req.body);
  let message = crypto.hello();
  let script = Buffer.from(req.body.script, "hex");
  let input = Buffer.from(req.body.input, "hex");
  try {
    let r = crypto.execute(script, input);
    console.log(r);
    res.json({
      message: message,
      stack: r.items,
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
