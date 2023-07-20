const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    console.log("Enter");
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null){
        return res.status(404).json("token not found");
    }
    jwt.verify(token, "your-secret-key", (err, user)=>{
        if(err){
            console.log(err);
            return res.status(403).json("token not verified");
        }
        req.user = user;
        next();
    })
}

module.exports = authenticate;