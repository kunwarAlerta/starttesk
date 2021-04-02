const express = require("express");
const router = express.Router();

const {
  validateLogin,
  validateRegister
} = require("../../middleware/validations/userValidations");

const {
  checkuserlogin
} = require("../../middleware/auth/authenticate");

const {
  validateCreateOrder,
  validateImportOrder
} = require("../../middleware/validations/orderValidations");

const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");

router.post("/login", validateLogin, userController.login);
router.post("/register",validateRegister, userController.register);


router.post("/order/create", validateCreateOrder , checkuserlogin,orderController.createOrder);
router.post("/order/import", validateImportOrder , checkuserlogin,orderController.createOrder);

module.exports = router;
