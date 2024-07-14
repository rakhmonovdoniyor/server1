const exprress = require("express")

const app = exprress();

app.use(exprress.json());
app.use(exprress.urlencoded({extended:false}));



app.use("/add-new-students", (req, res, next)=> {
    res.send(
       `
       <div style={{display: 'flex' , border: '1px solid red'}}>
        <h1>NewStudent</h1> 
        <form action="/students" method="POST">
        <p >Name</p>
        <input type="text" name="name" placeholder="name"/>
        <p>Cost</p>
        <input type="number" name="CarCost"/>  <br> 
        <p>Type</p>
        <input type="text" name="type"/>  <br> 
        <p>License</p>
        <input type="text" name="Licensce"/>  <br> 
        <p>People</p>
        <input type="text" name="People"/>  <br> 
        <p>Date</p>
        <input type="date" name="date"/>  
        <p>Company</p>
        <input type="text" name="company"/>   
        <p>Location</p>
        <input type="text" name="location"/>  <br>  
        <p>Wievs</p>
        <input type="text" name="wiev"/>  <br> 
        <p>Just</p>
        <input type="text" name="jus"/>  <br> 
        <p>Send</p>
        <input type="submit" value= "submit"/>  <br>
        </form>
        </div>
        `
    );
});


app.use("/students", (req, res, next) => {
    console.log(req.body);
    res.end('<h1>Student List</h1>')
    res.redirect("/");
});



app.use("/", (req, res, next) => {
    console.log("Midlwaves");
    res.send("<h1>Bismillah</h1>")
    next();
});


const PORT = process.env.PORT  || 5050;


app.listen(PORT, ()=> {
    console.log('Running:', PORT);
});



// app.use("/students", (req, res, next) => {
//     console.log(req.body);

// });
