const db = require('../db.js');

//create
function createUser(name, email,callback){
    const sql = 'insert into users(name, email) values(?,?)';
    db.query(sql, [name, email], callback);
}

//get all users
function getAllUsers(callback){
    const sql = 'select * from users ';
    db.query(sql, callback);
}

//get user
function getUserbyID(uid, callback){
    // const sql = 'select * from users where id = ?';
    const sql = "select * from users where id = ?";
    console.log("Fetching user with ID: ", uid);
    db.query(sql,[uid], callback);
}

//update
function updateUser(id, name, email, callback){
    const sql = 'update users set name = ?, email = ? where id = ?';
    db.query(sql, [name, email, id], callback);
}

//delete
function deleteUser(id, callback){
    const sql = 'delete from users where id = ?';   
    db.query(sql, [id], callback);
}

module.exports = {
    createUser,
    getAllUsers,
    getUserbyID,
    updateUser,
    deleteUser
}