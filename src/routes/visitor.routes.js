const express = require("express");
const visitor = require("../controllers/visitor.controllers");
const router = express.Router();

router.get("/hello", visitor.greet);

module.exports = router;
