const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const router = Router();
const Admin = require("../db").Admin
const Course = require("../db").Course
// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{

        await Admin.create(req.body)
        res.status(201).json({ message: 'Admin created successfully' })
    }
   

    catch(err){
        res.status(500).json({message: 'error'})
    }
});

app.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    try{
      let course =  await Course.create(req.body)
    }
    catch(err){
        res.status(500).json({message:'internal server error'})
    }

   
});

app.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        let courses =  await Course.find()
      }
      catch(err){
          res.status(500).json({message:'internal server error'})
      }

});

module.exports = router;