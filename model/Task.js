const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(

    {
        type: String,
        title: String,
        desc: String,
        suburb: String,
        Date: String,
        budget: Number

    }
)
module.exports = mongoose.model("Task", taskSchema)