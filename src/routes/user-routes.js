const express = require("express");
const router = express.Router();

const { user_controller } = require("../controllers");

router.post(`/`, user_controller.registerUser);

module.exports = router;
