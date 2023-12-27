const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const Admin = require("../db").Admin
const Course = require("../db").Course
// User Routes
app.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{

        await Admin.create(req.body)
        res.status(201).json({ message: 'Admin created successfully' })
    }
   

    catch(err){
        res.status(500).json({message: 'error'})
    }
});

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        let course =  await Course.create(req.body)
      }
      catch(err){
          res.status(500).json({message:'internal server error'})
      }
  
});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    try{
       let course =  await Course.findById(courseId)
        req.user.courses.push(course._id)
        req.user.save()
    }
    catch(err){
        res.status(500).json({course})
    }
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic

    res.status(200).json(req.user.courses)
});
