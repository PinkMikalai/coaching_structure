const { Router } = require('express');


//crée le routeur
const router = Router();

router.use("/auth", require("./auth.routes"));
router.use("/poid", require("./poid.routes"));
//exporte le routeur
module.exports = router;