const router = require("express").Router();

router.get("/", () => {
  console.log('landed');
})


module.exports = router;