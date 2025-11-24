const {Router} = require("express");
const authController = require("../controllers/auth.controller");
const { registerRules, loginRules } = require("../middlewares/validators/auth.validator");
const auth = require("../middlewares/auth");
const poidController = require("../controllers/poid.controller");


const router = Router();

// Middleware de débogage temporaire
router.post('/register', registerRules, authController.register);
router.post('/login', loginRules, authController.login);
router.post('/poid', auth, poidController.addPoid);
router.get('/poid/:id', auth, poidController.poidById);

module.exports = router;