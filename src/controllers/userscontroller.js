
let db = require("../model/db")

let argon = require("argon2");


// this code above is how a user creates an account 
let register = async function(req, res){ // REMEMBER ASYNC BCUZ WE USE ARGON
    console.log("register");
    // add a user to the database

    let sql = "insert into usersjune14(email, pw_hash) values (?, ?)" ;
    let email = req.body.email;
    let password = req.body.password;

    let pwHash = await argon.hash("password"); // remember AWAIT bcuz ARGON 
    let params = [email, pwHash];

    db.query(sql, params, function(err, results){
        if(err){
            console.log("Couldnt add user:", err);
            res.sendStatus(500) //bcuz this is our mistake not client
        } else {
            res.sendStatus(204); //everything went according to plan. 
        }
    })

};


// this will take in a username or email && a password.
// It will return a JSON WEB TOKEN (JWT)
// JTW can be used in subsequent requests to prove that the user is authenticated 
let login = async function(req, res){
    console.log("LOGIN");
    let email = req.body.email;
    let password = req.body.password;

    let sql = "select pw_hash from usersjune14 where email = ?"
    let params = [email];

    db.query(sql, params, async function(err, results){
        if(err){
            console.log("couldnt log in ", err);
            res.sendStatus(500);
            return; // use return so you dont need to write and else statement 
        };

        if(results.length > 1){ // if there were more than one emails that showed up, then that is an error because we used UNIQUE for email
            consolelog("there is more than one long in for ", email);
            res.sendStatus(500);
            return;
        }; // there is an error because there is more than one of this email in our database 

        if(results.length == 0){
            res.sendStatus(400);
            return;
        }; // if there isnt a result for this email, that means that email login wasnt created

        let hash = results[0].pw_hash; // we need to get the hash from the database
        let goodPassword = await argon.verify(hash, password);
            // code above is directly from ARGON2 documentation!!!
        let token = {
            "email": email
        };
        if(goodPassword){
            res.json(token);
            //if the password is good or the correct password, then we will respond with this token
        } else {
            console.log("???????")
            res.sendStatus(400); // it is 400 because client made mistake, they sent wrong email/pass combo 
        }
    });

}


module.exports = {
    register,
    login
} ;
