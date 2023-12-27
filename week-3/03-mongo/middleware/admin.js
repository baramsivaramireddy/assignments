// Middleware for handling auth
const Admin = require("../db").Admin

async function  adminMiddleware(req, res, next) {

    try{
      let admin =  await Admin.findOne({username:req.headers.username,password:req.headers.password})
      if (admin){
        next()
      }
    }
    catch(err){
        res.status(500).json({messag:"error"})
    }
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;