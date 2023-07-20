const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const admin = await Admin.findOne({});
        if(!admin){
            return res.status(400).json("Admin not found");
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(403).json("Authentication Failed");
        }
        const token = jwt.sign({adminId: admin._id}, 'your-secret-key', {
            expiresIn: '8h'
        })
        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    login,
}