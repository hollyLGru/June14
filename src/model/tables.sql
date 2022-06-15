CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENDT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    pw_hash VARCHAR(1000) NOT NULL
);
-- unique means that only one person can use it. so only one username called HLgrudovich

insert into users(email, pw_hash) values (?, ?)
-- when a user registers this is what needs to happen