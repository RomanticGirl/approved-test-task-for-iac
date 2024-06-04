const Router = require("express");
const router = new Router();

const dataRouter = require("./dataRouter");
const authRouter = require("./authRouter");

router.use("", dataRouter);
router.use("", authRouter);

module.exports = router;
