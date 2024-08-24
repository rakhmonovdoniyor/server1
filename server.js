const express = require("express");
const cors = require("cors");
// const router = require("./routes/auth.router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth.router");
// const router = require("./routes/auth.router");

 
dotenv.config();
const app = express();
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/crm";

app.use(cors());
app.use(express.json());
app.use('/crm', authRouter);
// app.use(router);


// app.use("/", (req,res)=> {
//     res.send(`<h1>home</h1>`)
// })

const PORT = process.env.PORT || 5053;

mongoose
 
    .connect(mongoUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to mongoDB");
        app.listen(PORT, () => {
            console.log("server running on port", PORT);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error", error);
    });