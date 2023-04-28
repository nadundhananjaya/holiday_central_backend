import express from "express"
import PackagesRoutes from "./route/PackagesRoutes.js"
import mongoose from "mongoose";


const app = express()

app.use('/package', PackagesRoutes)

mongoose.connect("mongodb://localhost:27017/holiday_central").then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err)
})

