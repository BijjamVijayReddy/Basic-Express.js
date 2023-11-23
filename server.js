
//  express File.

const express = require("express");
const app = express();
const router = require('./router/auth-router');

app.use("/api/auth", router)

// app.get("/" , (req,res) => {
//     res.status(200).send("Server is Running Sucessfully.Conguations Vijay :).");
//     console.log("Server is Running Sucessfully.Conguations Vijay :).")
// });

// app.get("/registration" , (req,res) => {
//     res.status(200).send("Welcome to Registration Page. Please Fill the Form.")
// });

const port = 5000;
app.listen(port,() => {
    console.log(`server is Running at port :${port} `)
})

