
let express = require("express");

let router = new express.Router();

let controller = require("../controllers/todoscontroller");

let auth = require("../middleware/auth");

// this one requires authentication (checking the token! )
router.get("/todos", auth.verifyJWT, controller.listenItems);

// this is an example of a route that does not requre authentication 
router.get("/todosNoAuthentication", controller.listenItems);

module.exports = router;
