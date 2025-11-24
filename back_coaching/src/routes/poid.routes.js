const {Router} = require("express");

// je recupere mon controller poid
const poidController = require("../controllers/poid.controller");

const { poidRules } = require("../middlewares/validators/poid.validator");

const router = Router();

router.post("/", ...poidRules, poidController.addPoid);
router.get("/", poidController.getAllPoidsByUser);
router.get("/:id", poidController.poidById);

module.exports = router;