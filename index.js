const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const templatePath= path.join(__dirname,'../templates')
app.use(express.json)
app.set("view engine","hbs")
app.set("views",templatePath)
app.get("/",()=>{
    res.render("login")
})
app.listen(3000,()=>{
    console.log("port connected");

})