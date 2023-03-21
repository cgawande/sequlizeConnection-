const express=require("express")
const bodyParser=require("body-parser")
const app=express()

require("./config/config")
const userRoute=require("./routes/userRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/user",userRoute)

app.listen(8000,()=>{
    console.log("server is running on 8000")
})