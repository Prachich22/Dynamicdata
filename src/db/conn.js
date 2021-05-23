const mongoose = require('mongoose');
//creating a database
mongoose.connect("mongodb://localhost:27017/prachidynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection fixed");
}).catch((error)=>{
console.log("error");
})