const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Task = require("./model/Task");
const mongoose = require("mongoose");
const { userInfo } = require("os");
const cors = require("cors")


const app = express()
app.use(cors({origin: 'http://localhost:3000',
credentials: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/task10DB",{useNewUrlParser:true})

app.get('/', (req,res)=>{
    const task = {
        type: "Online",
        title: "tesy title",
        desc: "Test description",
        suburb: '',
        Date: "01/05/2020",
        budget: 500
    }
    res.send(task)
})



app.post('/create', (req, res)=>{
    console.log(req.body.type)
    const task = new Task({
        type: req.body.type,
        title: req.body.title,
        desc: req.body.desc,
        suburb: req.body.suburb,
        Date: req.body.date,
        budget: req.body.budget
    });
    console.log(task)
    task.save().catch((err)=> console.log(err));
    res.json(("saved to db: " + task))

})





app.listen(8080, function (req, res){
    console.log("server is running");
})