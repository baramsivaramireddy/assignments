const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://siva:3k3TWHjwNswpEEcG@cluster0.lfr3l7d.mongodb.net/100xdexCourseSellingApp?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here

    username: String,
    password: String,
    courses: [{type :mongoose.SchemaType.ObjectId ,ref:"Course"}]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courses: [{type :mongoose.SchemaType.ObjectId ,ref:"Course"}]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price:String,
    imageLink:String,
    published:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}