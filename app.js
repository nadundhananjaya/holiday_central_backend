import express from "express"
import PackagesRoutes from "./route/PackagesRoutes.js"
import mongoose from "mongoose";
import AirPlaneRoutes from "./route/AirPlaneRoutes.js";


const app = express()

app.use('/package', PackagesRoutes)

app.use('/air-plane', AirPlaneRoutes)

mongoose.connect("mongodb://localhost:27017/holiday_central").then(result => {
    app.listen(8080);
}).catch(err => {
    console.log(err)
})

