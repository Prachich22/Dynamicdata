const express = require('express');
//require conn.js
require("/home/prachi/nodeDynamic/src/db/conn.js");
const hbs = require("hbs");
const app = express();
//require module
const User = require("./models/usermsg");
//path module
const path = require("path");
//port
const port = process.env.PORT || 8000;
//static site ko use 
//set the path
const staticpath = path.join(__dirname, "../public");
const temlatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
//console.log(path.join(__dirname,"../public"));
//jquery and bootstarp use krne ke liye
//middlewares
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
//data ko json btane ke liye
app.use(express.urlencoded({extended:false}))
//set hbs viewengine
app.set('views', './views');
app.set("view engine", "hbs");
//now views ko template krke use
app.set("views", temlatepath);
hbs.registerPartials(partialpath);
//partial ko use
//static page ko use ke liye
app.use(express.static(staticpath));

//routing
//app.get(path,callback)
app.get("/", (req, res) => {
    //res.send("hi  i m here");
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
    })
//user jb bhi add kre then store in database
app.post("/contact", async (req, res) => {
    try {
        //user ne jo fill kiya h usko hume show
res.send(req.body);
//data ko save or create
const userData = new User(req.body);
 await userData.save();
 res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})
//for about page
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/service", (req, res) => {
    res.render("service");
})

//listen
app.listen(port, () => {
    console.log("server on running");
})
