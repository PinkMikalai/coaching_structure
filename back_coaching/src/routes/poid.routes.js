const {Router} = require("express");

// je recupere mon controller poid
const poidController = require("../controllers/poid.controller");
const authMiddleware = require("../middlewares/auth");
const { poidRules } = require("../middlewares/validators/poid.validator");

const router = Router();

router.post("/", authMiddleware, ...poidRules, poidController.poid);
router.get

module.exports = router;