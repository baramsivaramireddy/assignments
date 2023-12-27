const express = require('express')

const app = express()
const zod = require('zod')

const signupSchema  = zod.object(
    {
        'email':zod.string().email(),
        "password":zod.string().min(8)
    }
)
app.use(express.json())
app.get('/tomato' , (req,res) =>{

    let response = signupSchema.safeParse(req.body)
   
    if (!response.success){

        res.status(411).json({
            message: 'wrong input'
        })
        return
    }

    res.status(200).json({
        response
    })
})
app.listen(3000)