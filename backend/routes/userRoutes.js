const express = require('express');
const dotenv = require('dotenv');
const db = require('../db');
const userModel = require('../models/userModel');
dotenv.config();
const http = require('http');
const router = express.Router();
const userController = require('../controller/userController');
router.get('/users/', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users/', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);



//not mvc
// router.get('/users/', (req, res)=>{
//     userModel.getAllUsers ((err, result)=>{
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
//     })
// })

// router.get('/users/:id', (req, res)=>{
//     userModel.getUserbyID((req.params.id), (err, result)=>{
//         console.log("Fetching user wddddith ID: ", req.params.id);
//         if(err) return res.status(500).send('Error fetching data:' + err);
//         res.status(200).json(result);
// })
// })


// router.post('/users/', (req,res)=>{
//     const {name, email} = req.body;
//     userModel.createUser(name, email, (err, result)=>
//     {
//         if(err) return res.status(500).send('Error insetring data:' + err);
//         res.status(201).send('User created successfull with id: ' + result.insertId);
//     })

// })

// router.put('/users/:id', (req, res)=> {
//     const {name, email} = req.body;
//     userModel.updateUser(req.params.id, name, email, (err, result) =>{
//         if(err) res.status(500).send('Error updating data: '+err);
//         res.status(200).send('User updated successfully: ' + req.params.id);
//     })
// })

// router.patch('/users/:id', (req, res) => {
//     const data = req.body;
//     const id = req.params.id;
//     res.send('partially updated data for user id: ' + id + 'with data:' + JSON.stringify(data));
// })

// //delete method
// router.delete('/users/:id', (req, res) => {
//     const id = req.params.id;
//     userModel.deleteUser(id, (err,result)=>{
//         if(err) return res.status(500).send('Error deleting data: ' + err);
//         return res.status(204).send('User deleted successfully with id: ' + id);
//     })
// })

module.exports = router;