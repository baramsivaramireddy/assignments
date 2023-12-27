
const express = require('express');

const app = express()


const middleware = {
    authMiddleware : (req,res,next) =>{

        if (! (req.headers.username == 'siva' && req.headers.pass == 'pass')){
            res.status(403).send('auth invalid')
           return
        }   
        next()
    },

    tomatoValidator : (req,res,next) =>{
        if (!(req.query.tomato >=0)){

            res.status(411).send('input invalid')
            return
        }
        next()

    }
}
app.get('/tomato' , middleware.authMiddleware,middleware.tomatoValidator,(req,res) =>{

   

    res.status(200).send('good')
})

app.listen(3000)
