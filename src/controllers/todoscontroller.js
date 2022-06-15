let db = require("../model/db");

let listenItems = function(req, res){
    console.log("list Iteams");

    let sql = "select id, task, is_done from todos";

    db.query(sql, function(err, results){
        if(err){
            console.log("couldnt get todos", er);
            res.sendStatus(500);
        } else{
            res.json(results);
        }
    })
}

module.exports = {
    listenItems
}