
let express = require("express");

let router = new express.Router();

let controller = require("../controllers/todosController");


router.get("/todos", controller.listenItems);

module.exports = router;
