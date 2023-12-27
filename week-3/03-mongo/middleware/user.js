const User = require("../db").User

async function userMiddleware(req, res, next) {
    try{
        let Usere =  await User.findOne({username:req.headers.username,password:req.headers.password})
        if (Usere){
          req.user= Usere
          next()
        }
      }
      catch(err){
          res.status(500).json({messag:"error"})
      }
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;