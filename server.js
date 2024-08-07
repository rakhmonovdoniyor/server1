const exprress = require("express");
const cors = require('cors');
const router = require("./routes/motorRoutes");
const app = exprress();

app.use(cors())

app.use(exprress.json());
app.use(exprress.urlencoded({extended:false}));


app.use(router)




app.post("/api/data", (req, res, next) => {
    console.log(req.body);   
    res.status(200).send("Data received")
});





// app.use(mainRoutes);

// app.use("/", (req, res, next) => {
//     console.log("Midlwaves");
//     res.send("<h1>Bismillah</h1>")
//     next();
// });


app.use((req, res, )=> {
    res.status(404).send( '<h1>NOT FOUND</h1>')
})

const PORT = process.env.PORT  || 5052;


app.listen(PORT, ()=> {
    console.log('Running:', PORT);
});



// app.use("/students", (req, res, next) => {
//     console.log(req.body);

// });
