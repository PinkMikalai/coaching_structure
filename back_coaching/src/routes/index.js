const { Router } = require('express');
const authMiddleware = require("../middlewares/auth");

//crée le routeur
const router = Router();

router.use("/auth", require("./auth.routes"));
router.use("/poid", authMiddleware, require("./poid.routes"));
//exporte le routeur
module.exports = router;