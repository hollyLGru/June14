CREATE TABLE todos {

}


CREATE TABLE usersjune14 (
    id INT NOT NULL AUTO_INCREMENDT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    pw_hash VARCHAR(1000) NOT NULL
);
-- unique means that only one person can use it. so only one username called HLgrudovich

insert into users(email, pw_hash) values (?, ?)
-- when a user registers this is what needs to happen

select pw_hash from usersjune14 where email = ?
--gets hash from the database when we know the user/email

-- get the summary of all items
select id, task, is_done from todos;

-- get the details of a single idtem by id
select id, task, description, is_done from todos where id = ?;

-- delete a todo given an ID
delete from todo where id = ?;

-- create a new todo
insert into todos(task, description) values (?, ?);

-- update all info about todo given its ID
update todos set task = ?, description = ?, is_done is = ?, where id = ? ; 
