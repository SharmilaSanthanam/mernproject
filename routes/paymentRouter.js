const express = require('express')

const paymentCtrl = require("../controllers/paymentController")

const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

const router = express.Router();

router.route("/checkout").post(paymentCtrl.checkout);
router.route("/paymentverification").post(paymentCtrl.paymentVerification);
module.exports = router;