const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : false}));




app.use("/student", (req, res, next) =>{
    // res.send("<h1>Student</h1>");
    res.redirect("/")
});


app.use("/", (req, res, next) =>{
    res.send("<h1>HomePage</h1>");
    next();
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>{
    console.log("Running");
});