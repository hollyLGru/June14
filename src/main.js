let express = require('express');
require("dotenv").config();
let bodyparser = require("body-parser")
let PORT = process.env.PORT || 8000;
let app = express();
app.use(bodyparser.json());

app.get ("/hello", function(req, res){
    let name = req.query.name;
    res.send("hey there!")
});

let todosRoutes = require("./routers/todosrouter");
let userRoutes = require("./routers/userRoutes");
app.use(todosRoutes);
app.use(userRoutes);


app.listen(PORT, function(){
    console.log("application started on port", PORT);
})
