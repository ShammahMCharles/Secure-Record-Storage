require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)
//connection monitoring, log ONCE the connect is made
mongoose.connection.once("open",()=>{
    console.log(`Connected to MongoDB: ${mongoose.connection.name}`)
})
//connection monitoring, log/display connection error
mongoose.connection.on("error",(error)=>{
    console.log("MongoDB connection error", error)
})

mongoose.connection.once("close", ()=>{
    console.log("Connection to MongoDB has Closed")
})
