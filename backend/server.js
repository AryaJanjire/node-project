const express = require('express')
const dotenv = require('dotenv');
const db = require('./db');
const userModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = 3000;
const fs = require('fs');
const cors = require('cors');
// const db2 = require('./db.json');
// let users = db2.users;
const http = require('http');
dotenv.config();

//middleware to parse json body
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:3000' || 'http://localhost:3000' || '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials:true
})); // Enable CORS for all routes
app.use('/api/v1', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

















// app.get('/users/:id', (req, res)=>{
//     userModel.getUserbyID(req.params.id), (err, result)=>{
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
// }
// })

// app.get('/users/', (req, res)=>{
//     userModel.getAllUsers ((err, result)=>{
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
//     })
// })

// app.post('/users/', (req,res)=>{
//     const {name, email} = req.body;
//     userModel.createUser(name, email, (err, result)=>
//     {
//         if(err) return res.status(500).send('Error insetring data:' + err);
//         res.status(201).send('User created successfull with id: ' + result.insertId);
//     })

// })

// app.put('/users/:id', (req, res)=> {
//     const {name, email} = req.body;
//     userModel.updateUser(req.params.id, name, email, (err, result) =>{
//         if(err) res.status(500).send('Error updating data: '+err);
//         res.status(200).send('User updated successfully: ' + req.params.id);
//     })
// })

// app.patch('/users/:id', (req, res) => {
//     const data = req.body;
//     const id = req.params.id;
//     res.send('partially updated data for user id: ' + id + 'with data:' + JSON.stringify(data));
// })

// //delete method
// app.delete('/users/:id', (req, res) => {
//     const id = req.params.id;
//     userModel.deleteUser(id, (err,result)=>{
//         if(err) return res.status(500).send('Error deleting data: ' + err);
//         return res.status(204).send('User deleted successfully with id: ' + id);
//     })
// })

// app.get('/users/:id', (req, res)=>{
//     // const id = req.params.id;
//     // res.end(JSON.stringify(users));
//     // res.send('User id: ' + id);
//   //res.send('Hello, World!');
// //   const id = req.params.id;
// //   const sql = 'SELECT * FROM users WHERE id = ?';
// userModel.getUserbyID(req.params.id), (err, result)=>{
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
// }
// })

// app.get('/users/', (req, res)=>{
//     // const id = req.params.id;
//     // res.end(JSON.stringify(users));
//     // res.send('User id: ' + id);
//   //res.send('Hello, World!');
// //   const id = req.params.id;
// //   const sql = 'SELECT * FROM users WHERE id = ?';
// userModel.getAllUsers ((err, result)=>{
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
// })
// })

//post
// app.post('/users/', (req,res)=>{
//     //const data = req.body;
//     // const id = req.params.id;
//     // const newUser = req.body;
//     // users.push(newUser);
//     // fs.writeFileSync('./db.json', JSON.stringify({ users }, null, 2));
//     // res.status(201).send('received data for user id: ' + id + 'with data:' + JSON.stringify(newUser));
//     //res.send('Received data: ' + JSON.stringify(data));

//     //const {name, email} = req.body;
//     // const sql = 'insert into users(name, email) values(?,?)';
//     // db.query(sql, [name, email], (err, result)=>{
//     //     if(err) res.status(500).send('Error inserting data: ' , err);
//     //     res.status(201).send('User inserted successfully: ' + result.insertId);
//     // })

//     const {name, email} = req.body;
//     userModel.createUser(name, email, (err, result)=>
//     {
//         if(err) return res.status(500).send('Error insetring data:' + err);
//         res.status(201).send('User created successfull with id: ' + result.insertId);
//     })

// })

//put method
// app.put('/users/:id', (req, res)=> {
//     // const data = req.body;
//     // const id = req.params.id;
//     // res.send('put data for user with id: ' + id + 'with data:' + JSON.stringify(data));
//     //res.send('Updated data : ' + JSON.stringify(data))

//     // const id = parseInt(req.params.id);
//     // const updatedUser = req.body;

//     // let index = users.findIndex(u => u.id === id);
//     // if (index !== -1) {
//     //     users[index] = updatedUser;
//     //     fs.writeFileSync('./db.json', JSON.stringify({ users }, null, 2));
//     //     res.send('User replaced: ' + JSON.stringify(updatedUser));
//     // } else {
//     //     res.status(404).send(`User with ID ${id} not found.`);
//     // }

//     const {name, email} = req.body;
//     //const sql = 'update users set name = (?), email = (?) where id = (?)';
//     userModel.updateUser(req.params.id, name, email, (err, result) =>{
//         if(err) res.status(500).send('Error updating data: '+err);
//         //if(result.affectedRows === 0) res.status(404).send('User not found with id: ' + req.params.id);
//         res.status(200).send('User updated successfully: ' + req.params.id);
//     })
// })

// app.patch('/users/:id', (req, res) => {
//     const data = req.body;
//     const id = req.params.id;
//     res.send('partially updated data for user id: ' + id + 'with data:' + JSON.stringify(data));
// })

// //delete method
// app.delete('/users/:id', (req, res) => {
//     const id = req.params.id;
//     userModel.deleteUser(id, (err,result)=>{
//         if(err) return res.status(500).send('Error deleting data: ' + err);
//         return res.status(204).send('User deleted successfully with id: ' + id);
//     })
//     //res.send('Delete request received');
// })



