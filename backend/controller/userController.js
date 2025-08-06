const User = require('../models/userModel');

exports.createUser = async(req, res) => {
    const { name, email } = req.body;
    User.createUser(name, email, (err, result) => {
        if (err) return res.status(500).send('Error inserting data: ' + err);
        res.status(201).json({message: 'User Created!',data: result});
    });
}

exports.getAllUsers = async(req, res) => {
    User.getAllUsers((err, result) => {
        if (err) return res.status(500).send('Error fetching data: ' + err);
        res.status(200).json(result);
    });
}

exports.getUserById = async(req, res) => {
    const uid = req.params.id;
    User.getUserbyID(uid, (err, result) => {
        if (err) return res.status(500).send('Error fetching data: ' + err);
        res.status(200).json(result);
    });
}

exports.updateUser = async(req, res) => {
    const { name, email } = req.body;
    const id = req.params.id;
    User.updateUser(id, name, email, (err, result) => {
        if (err) return res.status(500).send('Error updating data: ' + err);
        res.status(200).json({message: 'User Updated',data: req.body});
    });
}

exports.deleteUser = async(req, res) => {
    const id = req.params.id;
    User.deleteUser(id, (err, result) => {
        if (err) return res.status(500).send('Error deleting data: ' + err);
        res.status(200).json({message:'User deleted successfully with id: ' + id});
    });
}

