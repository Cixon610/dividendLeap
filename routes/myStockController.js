const router = require("express").Router();

const { success } = require("../utility/response");
const { getList, add, remove } = require("../services/myStockService");

const auth = require("../utility/auth");

router.use(auth.authentication);

router.get("/list", async function (req, res, next) {
  try {
    const user = req.user;
    let result = await getList({ account: user.account });
    return res.send(success(result));
  } catch (error) {
    next(error);
  }
});

router.get("/add/:stockNo", async function (req, res, next) {
  try {
    const user = req.user;
    let result = await add({
      account: user.account,
      stockNo: req.params.stockNo,
    });
    return res.send(success(result));
  } catch (error) {
    next(error);
  }
});

router.post("/remove", async function (req, res, next) {
  try {
    const user = req.user;
    const { id } = req.body;
    let result = await remove({ account: user.account, id });
    return res.send(success(result));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
