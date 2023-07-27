const express = require("express");
const router = express.Router();
const ctrl = require("../controller/controller");

router.get("/",ctrl.index);
router.get("/popup",ctrl.popup);
router.get("/login",ctrl.login);
router.get("/check",ctrl.check);
router.get("/list",ctrl.mlist);



module.exports = router;